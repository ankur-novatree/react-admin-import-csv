import { ErrorCallback, PrecommitCallback } from "./config.interface";
import { SimpleLogger } from "./SimpleLogger";
import { DataProvider } from "ra-core";

let logger = new SimpleLogger("uploader", false);

export async function create(
  logging: boolean,
  dataProvider: DataProvider,
  resource: string,
  values: any[],
  handleProgressUpdate: Function,
  preCommitCallback?: PrecommitCallback,
  postCommitCallback?: ErrorCallback
) {
  const parsedValues = preCommitCallback
    ? await preCommitCallback("create", values)
    : values;
  const reportItems = await createInDataProvider(
    logging,
    dataProvider,
    resource,
    parsedValues,
    handleProgressUpdate
  );
  if (postCommitCallback) {
    postCommitCallback(reportItems);
  }
  const shouldReject =
    !postCommitCallback && reportItems.some((r) => !r.success);
  if (shouldReject) {
    return Promise.reject(reportItems.map((r) => r.response));
  }
}

export async function update(
  logging: boolean,
  dataProvider: DataProvider,
  resource: string,
  values: any[],
  preCommitCallback?: PrecommitCallback,
  postCommitCallback?: ErrorCallback
) {
  const parsedValues = preCommitCallback
    ? await preCommitCallback("overwrite", values)
    : values;
  const reportItems = await updateInDataProvider(
    logging,
    dataProvider,
    resource,
    parsedValues
  );
  if (postCommitCallback) {
    postCommitCallback(reportItems);
  }
  const shouldReject =
    !postCommitCallback && reportItems.some((r) => !r.success);
  if (shouldReject) {
    return Promise.reject(reportItems.map((r) => r.response));
  }
}

interface ReportItem {
  value: any;
  success: boolean;
  err?: any;
  response?: any;
}

async function createInDataProvider(
  logging: boolean,
  dataProvider: DataProvider,
  resource: string,
  values: any[],
  handleProgressUpdate: Function
): Promise<ReportItem[]> {
  logger.setEnabled(logging);
  logger.log("createInDataProvider", { dataProvider, resource, values });
  const reportItems: ReportItem[] = [];
  try {

    // Fized batch size for now. Can be made configurable in future.
    let batchSize = 10;
    
    let success = 0;
    let failure = 0;
    const failedItems: any[] = [];
    for (let i = 0;  i < values.length; i += batchSize) {
      try {
        const response = await dataProvider.createMany(resource, { data: values.slice(i, i + batchSize) });
        if("data" in response) {
          response.data.forEach((item, index) => {
            if(item.success === true) {
              success++;
            } else {
              failure++;
              failedItems.push({ data: values[i+index], errorMessage: item.errorMessage })
            }
          })
        } else {
          throw 'Unknown server error'
        }
      } catch(err) {
        values.slice(i, i + batchSize).forEach(item => {
          failure++;
          failedItems.push({ data: item, errorMessage: err.message });
        })
      }
      handleProgressUpdate({success: success, failure: failure, failedItems: failedItems, completed: false})
    }
    handleProgressUpdate({success: success, failure: failure, failedItems: failedItems, completed: true})
  } catch (error) {
    const shouldTryFallback = error.toString().includes("Unknown dataProvider");
    const apiError = !shouldTryFallback;
    if (apiError) {
      reportItems.push({
        value: null, err: error, success: false, response: null
      })
    }
    if (shouldTryFallback) {
      logger.log(
        "createInDataProvider",
        "createMany not found on data provider (you may need to implement it see: https://github.com/benwinding/react-admin-import-csv#reducing-requests): using fallback instead"
      );
      try {
        const items = await createInDataProviderFallback(dataProvider, resource, values);
        reportItems.push(...items);
      } catch (error) {
        logger.error("createInDataProvider", error);
      }
    }
  }
  return reportItems;
}

async function createInDataProviderFallback(
  dataProvider: DataProvider,
  resource: string,
  values: any[]
): Promise<ReportItem[]> {
  const reportItems: ReportItem[] = [];
  await Promise.all(
    values.map((value) =>
      dataProvider
        .create(resource, { data: value })
        .then((res) =>
          reportItems.push({ value: value, success: true, response: res })
        )
        .catch((err) => reportItems.push({ value, success: false, err: err }))
    )
  );
  return reportItems;
}

async function updateInDataProvider(
  logging: boolean,
  dataProvider: DataProvider,
  resource: string,
  values: any[]
) {
  const ids = values.map((v) => v.id);
  logger.setEnabled(logging);
  logger.log("updateInDataProvider", {
    dataProvider,
    resource,
    values,
    logging,
    ids,
  });
  const reportItems: ReportItem[] = [];
  try {
    const response = await dataProvider.updateManyArray(resource, { ids: ids, data: values });
    reportItems.push({
      value: null, success: true, response: response
    })
  } catch (error) {
    const shouldTryFallback = error.toString().includes("Unknown dataProvider");
    const apiError = !shouldTryFallback;
    if (apiError) {
      reportItems.push({
        value: null, err: error, success: false, response: null
      })
    }
    if (shouldTryFallback) {
      logger.log(
        "updateInDataProvider",
        "updateManyArray not found on data provider (you may need to implement it see: https://github.com/benwinding/react-admin-import-csv#reducing-requests): using fallback instead"
      );
      try {
        const items = await updateInDataProviderFallback(dataProvider, resource, values);
        reportItems.push(...items);
      } catch (error) {
        logger.error("updateInDataProvider", error);
      }
    }
  }
  return reportItems;
}

async function updateInDataProviderFallback(
  dataProvider: DataProvider,
  resource: string,
  values: any[]
): Promise<ReportItem[]> {
  const reportItems: ReportItem[] = [];
  await Promise.all(
    values.map((value) =>
      dataProvider
        .update(resource, { id: value.id, data: value, previousData: null as any })
        .then((res) =>
          reportItems.push({ value: value, success: true, response: res })
        )
        .catch((err) => reportItems.push({ value: value, success: false, err }))
    )
  );
  return reportItems;
}
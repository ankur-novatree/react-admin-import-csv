import React, { useEffect } from "react";
import { SharedDialogWrapper } from "./SharedDialogWrapper";
import { SharedLoader } from "./SharedLoader";
import { translateWrapper } from "../translateWrapper";
import { List } from "@material-ui/core";
import { Done, Undo, FileCopy } from "@material-ui/icons";
import { SharedDialogButton } from "./SharedDialogButton";

interface ImportProgress {
  success: number;
  failure: number;
  failedItems: any[];
  completed: boolean;
}

interface ImportCsvDialogStrategyProps {
  title: string,
  disableImportOverwrite: boolean;
  resourceName: string;
  fileName: string;
  count: number;
  handleClose: () => any;
  handleReplace: () => any;
  handleSkip: () => any;
  handleAskDecide: () => any;
  open: boolean;
  isLoading: boolean;
  idsConflicting: string[];
  progress: ImportProgress;
}

interface MessageState {
  title: string;
  subTitle: string;
  importStatus: string;
  importCompleted: string;
  loadingTxt: string;
  labelSkip: string;
  labelReplace: string;
  labelDecide: string;
  messageHtml: string;
}

export const ImportCsvDialogStrategy = (props: ImportCsvDialogStrategyProps) => {
  const {
    title,
    count,
    disableImportOverwrite,
    resourceName,
    fileName,
    handleClose,
    handleReplace,
    handleSkip,
    handleAskDecide,
    open,
    isLoading,
    idsConflicting,
    progress
  } = props;
  const [messages, setMessages] = React.useState({} as MessageState);
  const translate = translateWrapper();

  useEffect(() => {
    setMessages({
      title: translate("csv.dialogImport.title", {
        resource: title,
      }),
      subTitle: translate("csv.dialogCommon.subtitle", {
        count: count,
        fileName: fileName,
        resource: resourceName,
      }),
      importStatus: translate("csv.dialogCommon.importStatus", {
        success: progress.success,
        failed: progress.failure
      }),
      importCompleted: translate("csv.dialogCommon.importCompleted", {
        success: progress.success,
        failed: progress.failure
      }),
      loadingTxt: translate("csv.loading"),
      labelSkip: translate("csv.dialogImport.buttons.skipAllConflicts"),
      labelReplace: translate("csv.dialogImport.buttons.replaceAllConflicts"),
      labelDecide: translate("csv.dialogImport.buttons.letmeDecide"),
      messageHtml: translate("csv.dialogCommon.conflictCount", {
        resource: resourceName,
        conflictingCount: idsConflicting && idsConflicting.length,
      }),
    });
  }, [count, resourceName, fileName, idsConflicting, title, progress]);

  return (
    <SharedDialogWrapper
      title={messages.title}
      subTitle={messages.subTitle}
      open={open}
      handleClose={handleClose}
      importStatus={messages.importStatus}
      importCompleted={messages.importCompleted}
      completed={progress.completed}
      failedItems={progress.failedItems}
    >
      {isLoading && <SharedLoader loadingTxt={messages.loadingTxt}></SharedLoader>}
      {idsConflicting && idsConflicting.length > 0 && !isLoading && (
        <div>
          <p
            style={{ fontFamily: "sans-serif", margin: "0" }}
            dangerouslySetInnerHTML={{
              __html: messages.messageHtml,
            }}
          ></p>
          <List>
            <SharedDialogButton
              disabled={disableImportOverwrite}
              onClick={handleReplace}
              icon={<Done htmlColor="#29c130" />}
              label={messages.labelReplace}
            />
            <SharedDialogButton
              onClick={handleSkip}
              icon={<FileCopy htmlColor="#3a88ca" />}
              label={messages.labelSkip}
            />
            <SharedDialogButton
              onClick={handleAskDecide}
              icon={<Undo htmlColor="black" />}
              label={messages.labelDecide}
            />
          </List>
        </div>
      )}
    </SharedDialogWrapper>
  );
};

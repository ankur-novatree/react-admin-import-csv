// in src/posts.js
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  TopToolbar,
  ShowButton,
  EditButton,
  DeleteButton,
} from "react-admin";

// Change this import to: from "react-admin-import-csv"
import { ImportButton } from "./build-watch";
import { CreateButton, ExportButton } from "ra-ui-materialui";

const ListActions = (props) => {
  const {
    className,
    basePath,
    total,
    resource,
    currentSort,
    filterValues,
    exporter,
  } = props;
  const config = {
    logging: false,
    validateRow: async (row) => {
      if (row.id) {
        // throw new Error("AAAA");
      }
    },
    postCommitCallback: reportItems => {
      console.log('reportItems', {reportItems});
    },
    // disableImportNew: true,
    // disableImportOverwrite: true,
  };
  return (
    <TopToolbar className={className}>
      <CreateButton basePath={basePath} />
      <ExportButton
        disabled={total === 0}
        resource={resource}
        sort={currentSort}
        filter={filterValues}
        exporter={exporter}
      />
      <ImportButton {...props} {...config} parseConfig={{dynamicTyping: true}}/>
    </TopToolbar>
  );
};

export const PostList = (props) => (
  <List {...props} title="Business Associates" actions={<ListActions title="Business Associates" />}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} />
    </Datagrid>
  </List>
);

export const PostShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
    </SimpleShowLayout>
  </Show>
);

export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="title" />
    </SimpleForm>
  </Create>
);

export const PostEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
    </SimpleForm>
  </Edit>
);

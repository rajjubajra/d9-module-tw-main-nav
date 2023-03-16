// in src/users.js
import * as React from "react";
import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';

export const UserList = props => (
  <div>
    <h2>User List</h2>
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            <UrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
    </div>
);
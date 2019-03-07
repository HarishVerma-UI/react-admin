// in src/users.js
import React from 'react';
import MyUrlField from './MyUrlField';
import { List, Datagrid, TextField, EmailField ,UrlField } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            <UrlField source="website" />
            <UrlField source="website" />
            <UrlField source="company.name" />
        </Datagrid>
    </List>
);
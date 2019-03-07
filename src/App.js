// in src/App.js
import React from 'react';
import { Admin , Resource ,ListGuesser  } from 'react-admin';
import { PostList  ,PostEdit ,PostCreate} from './posts';
import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import customRoutes from './customRoutes';
import Settings from './pages/Settings';
import Comments from './pages/Comments';
import Menu from './Menu';
import authProvider from './auth/authProvider';



const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
    <Admin  menu={Menu} authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard} customRoutes={customRoutes}>
        <Resource name="users" list={UserList} icon={UserIcon}/>
        <Resource name="posts" list={PostList}  edit={PostEdit} create={PostCreate}  icon={PostIcon}/>
    </Admin>
);

export default App;
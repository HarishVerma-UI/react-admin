import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { Title } from 'react-admin';

class Comments extends React.Component{
	render(){
		return(
			<Card>
				<Title title="Comments" />
        		<CardHeader title="This is comments page" />
        		<CardContent>Lorem ipsum sic dolor amet...</CardContent>
             </Card>
			);
	};
};

export default Comments;
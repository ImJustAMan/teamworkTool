import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import {projectPage} from "../router/config";



/*

list: [
	{
		name: '',
		describe: '',
		id: '',
		missions: [],
		color: []
	}
]

*/
class ProjectPage extends Component {
	state = {
		select: false,
		group: [],
		color: []
	};
	render () {
		return(
			<Switch>
				{projectPage.map(item=>(
					<Route
						exact={item.exact}
						path={item.path}
						component={item.component}
						key={item.path}
					/>
				))}
			</Switch>
		)
	}
}

export default ProjectPage;
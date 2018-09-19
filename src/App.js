import React, { Component } from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import {homePage} from "./router/config";



class App extends Component {
    render() {
        return (
			<div className='projectPage'>
                <Switch>
					{homePage.map(item=>(
						<Route
							exact={item.exact}
							path={item.path}
							component={item.component}
							key={item.path}
						/>
					))}
                </Switch>
            </div>
        );
    }
}

export default App;
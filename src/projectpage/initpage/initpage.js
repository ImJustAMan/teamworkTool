import React, { Component,Fragment } from 'react';
import './initpage.css';
import HaveProject from "./haveproject/haveproject";
import NoProject from "./noproject/noproject";
import {acceptList} from "../../component/acceptredux";
import {connect} from "react-redux";


class InitPage extends Component {
	render() {
		let {list,history,location,march} = this.props;
		return (
			<Fragment>
				{list.length>0?
					<HaveProject
						history={history}
						location={location}
						march={march}
					/>:
					<NoProject
						history={history}
						location={location}
						march={march}
					/>
				}
			</Fragment>
		);
	}
}

export default connect(acceptList)(InitPage);
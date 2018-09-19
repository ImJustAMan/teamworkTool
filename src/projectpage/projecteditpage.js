import React,{Component,Fragment} from 'react';
import {Icon} from 'antd';
import {acceptList} from "../component/acceptredux";
import {connect} from "react-redux";
import Mission from "../component/mission";


class ProjectEditPage extends Component {
	state = {
		project: ''
	};
	componentDidMount () {
		let {id} = this.props.match.params;
		this.setState({
			project: this.props.list.filter(item=>Number(item.id) === Number(id))[0]
		})
	}
	render () {
		let {location,match,history} = this.props;
		return(
			<Fragment>
				<div
					className='backProject'
					onClick={()=>{
						this.props.history.push('/project')
					}}
				>项目总览</div>
				<div className='project'>
					<div className='editTop'>
						{this.state.project && <div className='fl'>
							<h2>
								{this.state.project.name}
							</h2>
							<div>
								{this.state.project.describe}
							</div>
						</div>}
						<div
							className='fr'
							onClick={()=>{
								this.props.history.push('/project/setting/'+this.props.match.params.id)
							}}
						>
							<Icon
								type="setting"
								theme="filled"
								className='setting'
							/>
							<span
								className='setting'
							>
							项目设置
							</span>
						</div>
					</div>
					<div className='editBottom'>
						<Mission
							history={history}
							match={match}
							location={location}
						/>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default connect(acceptList)(ProjectEditPage);
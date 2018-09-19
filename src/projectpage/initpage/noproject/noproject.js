import React,{Component} from 'react';


class NoProject extends Component {
	render () {
		let {history} = this.props;
		return(
			<div className='project'>
				<div className='tips'>
					现在还没有项目
					<span>
						快来创建一个新项目吧！
					</span>
				</div>
				<button
					className='addNewProject'
					onClick={()=>{
						history.push('/project/new')
					}}
				>
					新建项目
				</button>
			</div>
		)
	}
}

export default NoProject;
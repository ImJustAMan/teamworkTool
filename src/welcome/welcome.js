import React, { Component,Fragment } from 'react';
import 'antd/dist/antd.css';

class Welcome extends Component {
	render () {
		return(
			<Fragment>
				<div className='welcome'>
					欢迎使用我的工具
				</div>
				<input
					className='startButton'
					value='开始使用'
					type='button'
					onClick={()=>{
						this.props.history.push('/project')
					}}
				/>
			</Fragment>
		)
	}
}

export default Welcome;
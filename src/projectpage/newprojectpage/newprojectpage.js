import React,{Component,Fragment} from 'react';
import {Input,message} from 'antd';
import {changeProjectDetails} from "../../component/acceptredux";
import {connect} from "react-redux";
import {randomColor} from "../../tools/tools";

const success = () => {
	message.success('成功创建项目了哦~',1);
};

const error = (errorInfo) => {
	message.error(errorInfo,1);
};

class NewProjectPage extends Component {
	state = {
		error: false
	};
	val = '';
	describe = '';
	id = -1;
	render () {
		return(
			<Fragment>
				<div
					className='backProject'
					onClick={()=>{
						this.props.history.push('/project')
					}}
				>项目总览</div>
				<div className='project'>
					<div className='newProjectPage'>
						<h2>
							创建新项目
						</h2>
						<Input
							type="text"
							placeholder='项目名称'
							onChange={(e)=>{this.val = e.target.value}}
							className={this.state.error ? 'error' : ''}
						/>
						<Input.TextArea
							placeholder='可以简单描述一下你的项目哟~'
							style={{
								resize: 'none'
							}}
							onChange={(e)=>{this.describe = e.target.value}}
						/>
						<div className='createBtns'>
							<button
								className='sure'
								onClick={()=>{
									if (this.val.trim()) {
										this.setState({
											error: false
										});
										this.id = Date.now();
										this.props.addNewProject({
											name: this.val && this.val,
											describe: this.describe && this.describe,
											id: this.id,
											color: randomColor(),
											missions: []
										});
										success();
										this.props.history.push('/project/edit/'+this.id);
									}else {
										this.setState({
											error: true
										});
										error('请输入项目名字哦~');
									}
								}}
							>
								创建项目
							</button>
							<span
								className='cancel'
								onClick={()=>{
									this.props.history.go(-1)
								}}
							>
								取消
							</span>
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default connect(null,changeProjectDetails)(NewProjectPage);
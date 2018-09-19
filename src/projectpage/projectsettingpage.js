import React,{Component,Fragment} from 'react';
import {Input,message,Modal} from 'antd';
import {acceptList, changeProjectDetails} from "../component/acceptredux";
import {connect} from "react-redux";
import ReactDom from 'react-dom';

const success = (successInfo) => {
	message.success(successInfo,1);
};

const error = (errorInfo) => {
	message.error(errorInfo,1);
};

class ProjectSettingPage extends Component {
	state = {
		error: false,
		project: '',
		visible: false
	};
	val = '';
	describe = '';
	showModal = () => {
		this.setState({
			visible: true
		})
	};
	sureBtnClick = (id) => {
		this.setState({
			visible: false
		});
		this.props.removeProject(id);
	};
	cancelBtnClick = () => {
		this.setState({
			visible: false
		})
	};
	componentDidMount () {
		let {id} = this.props.match.params;
		this.setState({
			project: this.props.list.filter(item=>Number(item.id) === Number(id))[0]
		})
	}
	render () {
		let {project} = this.state;
		let {id} = this.props.match.params;
		let {changeProjectDetails,history} = this.props;
		return(
			<Fragment>
				{project && <div
					className='backProject'
					onClick={()=>{
						history.go(-1);
					}}
				>{project.name}</div>}
				<div className='project'>
					<div className='newProjectPage'>
						<h2>
							项目设置
						</h2>
						{project && <Fragment>
							<Input
								type="text"
								placeholder='项目名称'
								onChange={(e)=>{this.val = e.target.value}}
								className={this.state.error ? 'error' : ''}
								defaultValue={project.name}
							/>
							<Input.TextArea
								placeholder='可以简单描述一下你的项目哟~'
								style={{
									resize: 'none'
								}}
								defaultValue={project.describe}
								onChange={(e)=>{this.describe = e.target.value}}
							/>
						</Fragment>}
						<div className='createBtns'>
							<button
								className='sure'
								style={{
									width: '150px',
									lineHeight: '50px',
									height: '50px'
								}}
								onClick={()=>{
									if (this.val.trim()) {
										changeProjectDetails(id,this.val,this.describe);
										success('成功修改项目细节了哦~');
										history.push('/project/edit/'+id);
									}else {
										this.setState({
											error: true
										});
										error('请务必输入项目名称哦~');
									}
								}}
							>
								保存修改
							</button>
						</div>
						<button
							className='removeBtn'
							onClick={()=>{
								this.showModal()
							}}
						>
							删除此项目
						</button>
					</div>
				</div>
				{ReactDom.createPortal(
					<Modal
						visible={this.state.visible}
						onOk={()=>{
							this.sureBtnClick(id);
							history.push('/project');
							success('成功删除这个项目了哦~');
						}}
						onCancel={this.cancelBtnClick}
						width={350}
						className='popWindow'
					>
						<p>
							真的要删除掉这个项目吗？
						</p>
					</Modal>,
					document.body
				)}
			</Fragment>
		)
	}
}

export default connect(acceptList,changeProjectDetails)(ProjectSettingPage);
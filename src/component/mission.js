import React,{Component,Fragment} from 'react';
import { Menu, Dropdown, Icon,message,Checkbox } from 'antd';
import {connect} from "react-redux";
import {acceptList, addMissionList} from "./acceptredux";

const error = () => {
	message.error('请务必输入任务或清单名称哦~',1);
};

class Mission extends Component {
	state = {
		nowBtn: '添加任务',
		createMissionList: false,
		val: '',
		missionName: ''
	};
	pid = -1;
	last = -1;
	dropDownMenuClick = ({item}) => {
		this.setState({nowBtn: item.props.children[1]})
	};
	addMissionComponent = () => {
		let {match,addMissionList} = this.props;
		let {id} = match.params;
		return (
			<div >
				<input
					type="text"
					className='missionInp'
					autoFocus
					value={this.state.val}
					onChange={(e)=>{
						this.setState({val: e.target.value})
					}}
				/>
				<button
					className='addMissionBtn'
					onClick={()=>{
						if (this.state.val) {
							if (this.state.nowBtn === '添加任务') {
								addMissionList(id,{
									name: this.state.val,
									type: 'mission',
									id: Date.now(),
									pid: this.pid,
									complete: false
								})
							}else if (this.state.nowBtn === '添加清单') {
								addMissionList(id,{
									name: this.state.val,
									type: 'list',
									id: Date.now(),
									complete: false,
									editing: false
								})
							}
							this.setState({
								createMissionList: false,
								val: ''
							})
						}else {
							error();
						}
					}}
				>
					添加任务
				</button>
				<span
					className='cancel'
					onClick={()=>{
						this.setState({
							createMissionList: false,
							val: ''
						})
					}}
				>取消</span>
			</div>
		)
	};
	render () {
		let {match,history,removeMissionList,editMissionList,changeMissionListDetail} = this.props;
		let {id} = match.params;
		let project = this.props.list.filter(item=>Number(item.id) === Number(id))[0];
		let {missions} = project;
		return(
			<div className='missionPage'>
				<div className="missionTop">
					<div>
						<h2
							style={{
								display: 'inline-block',
								margin: 0
							}}
						>
							任务
						</h2>
						<Dropdown.Button
							onClick={()=>{
								this.setState({
									createMissionList: true
								})
							}}
							overlay={
								<Menu
									onClick={this.dropDownMenuClick}
									theme='light'
									style={{
										width: '118px'
									}}
									className='dropDownMenus'
								>
									<Menu.Item key="1">
										<Icon type="issues-close" theme="outlined" />
										添加任务
									</Menu.Item>
									<Menu.Item key="2">
										<Icon type="menu-unfold" theme="outlined" />
										添加清单
									</Menu.Item>
								</Menu>
							}
							trigger={['click']}
							style={{
								marginLeft: '10px'
							}}
							className='projectBtns'
						>
							{this.state.nowBtn}
						</Dropdown.Button>
					</div>
				</div>
				<div className="missionBottom">
					{
						missions && missions.length > 0?
						<div className='haveMissions'>
							{missions.map(item=>(
								<Fragment key={item.id}>
									{
										item.editing?
										<div className='clear'>
											<input
												type="text"
												className='editInp fl'
												autoFocus
												value={this.state.missionName}
												onChange={(e)=>{
													this.setState({
														missionName: e.target.value
													})
												}}
											/>
											<span
												className='cancel fr'
												onClick={()=>{
													editMissionList(id,item.id,false)
												}}
											>
												取消
											</span>
											<button
												className='editMissionBtn fr'
												onClick={()=>{
													editMissionList(id,item.id,false);
													changeMissionListDetail(
														id,
														item.id,
														this.state.missionName
													);
												}}
											>
												保存
											</button>
										</div>:
										<div className='clear'>
											<Checkbox
												className='fl checkbox'
											>
												<span>{item.name}</span>
											</Checkbox>
											<span className='fr'>
											<span
												onClick={()=>{
													removeMissionList(id,item.id)
												}}
											>
												删除
											</span>
											<span
												onClick={()=>{
													editMissionList(id,item.id,true);
													this.setState({
														missionName: item.name
													})
												}}
											>
												修改
											</span>
										</span>
										</div>
									}
								</Fragment>
							))}
							{this.state.createMissionList &&
							this.addMissionComponent()
							}
						</div>:
						this.state.createMissionList?
							this.addMissionComponent():
						<div className='noMission'>
							现在还没有任务哦 快去添加一个吧~
						</div>
					}
				</div>
			</div>
		)
	}
}

export default connect(acceptList,addMissionList)(Mission);
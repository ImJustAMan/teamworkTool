import React,{Component} from 'react';
import { Row, Col,Icon,Popover } from 'antd';
import {acceptList, changeColor} from "../../../component/acceptredux";
import {connect} from "react-redux";


class HaveProject extends Component {
	render () {
		let {changeColor,changeColorState,changeAllColorState,list,history} = this.props;
		return(
			<div className='project'
				onClick={()=>{
					changeAllColorState()
				}}
			>
				<div className="top">
					<button
						className={'allProject'}
						onClick={()=>{

						}}
					>
						所有项目
					</button>
					<span
						className='group'
						onClick={()=>{

						}}
					>
							{'管理分组'}
					</span>
					<span
						className='newProject'
						onClick={()=>{
							history.push('/project/new')
						}}
					>
						新建项目
					</span>
				</div>
				<div className="bottom">
					<Row>
						{list.length > 0 && list.map((item)=>{
							return(
								<Col
									span={6}
									className='grid'
									key={item.id}
									onClick={()=>{
										history.push('/project/edit/'+item.id)
									}}
								>
									<Icon
										type="file-text"
										theme="outlined"
										className='icon'
										style={{
											color: item.color
										}}
									/>
									<Popover
										placement="bottom"
										visible={item.visible}
										content={(
											<div
												className='colorBar'
												onClick={(e)=>{
													e.stopPropagation();
												}}
											>
												<div
													className='colorBox c1'
													onClick={()=>{
														changeColor(item.id,'#ff8a89');
														changeAllColorState()
													}}
												>
												</div>
												<div
													className='colorBox c2'
													onClick={()=>{
														changeColor(item.id,'#ffac75');
														changeAllColorState()
													}}
												>
												</div>
												<div
													className='colorBox c3'
													onClick={()=>{
														changeColor(item.id,'#c0fb39');
														changeAllColorState()
													}}
												>
												</div>
												<div
													className='colorBox c4'
													onClick={()=>{
														changeColor(item.id,'#989eeb');
														changeAllColorState()
													}}
												>
												</div>
												<div
													className='colorBox c5'
													onClick={()=>{
														changeColor(item.id,'#1890ff');
														changeAllColorState()
													}}
												>
												</div>
											</div>
										)}
										trigger="click"
									>
										<Icon
											type="bg-colors"
											theme="outlined"
											className='colorChange'
											style={{
												fontSize: '20px'
											}}
											onClick={(e)=>{
												changeColorState(item.id,true);
												e.stopPropagation();
											}}
										/>
									</Popover>
									<span
										className='projectName'
									>{item.name}</span>
								</Col>
							)
						})}
					</Row>
				</div>
			</div>
		)
	}
}

export default connect(acceptList,changeColor)(HaveProject);
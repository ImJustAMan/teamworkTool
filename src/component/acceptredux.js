export function acceptList(state) {
	return {
		list: state.list
	}
}

export function changeColor(dispatch) {
	return {
		changeColor (id,color) {
			dispatch({type:'changeColor',id,color})
		},
		changeColorState (id,visible) {
			dispatch({type:'changeColorState',id,visible})
		},
		changeAllColorState () {
			dispatch({type:'changeAllColorState'})
		}
	}
}

export function addMissionList(dispatch) {
	return {
		addMissionList (id,obj) {
			dispatch({type:'addMissionList',id,obj})
		},
		removeMissionList (id,missionid) {
			dispatch({type:'removeMissionList',id,missionid})
		},
		changeMissionListDetail (id,missionid,name) {
			dispatch({type:'changeMissionListDetail',id,missionid,name})
		},
		editMissionList (id,missionid,editing) {
			dispatch({type:'editMissionList',id,missionid,editing})
		}
	}
}

export function changeProjectDetails(dispatch) {
	return {
		changeProjectDetails (id,name,describe) {
			dispatch({type:'changeProjectDetails',id,name,describe});
		},
		addNewProject (newProject) {
			dispatch({type:'addNewProject',newProject});
		},
		removeProject (id) {
			dispatch({type:'removeProject',id});
		}
	}
}
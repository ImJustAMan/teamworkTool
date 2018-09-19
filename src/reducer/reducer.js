export default function reducer(state={},action) {
	let o = '';
	switch (action.type) {
		case 'addNewProject':
			o = {
				...state,
				list: [
					...state.list,
					{
						...action.newProject
					}
				]
			};
			localStorage.setItem('data',JSON.stringify(o));
			return o;
		case 'changeColor':
			o = {
				...state,
				list: state.list.map(item=>{
					if (Number(item.id) === Number(action.id)) {
						return {
							...item,
							color: action.color,
							visible: false
						}
					}else {
						return item;
					}
				})
			};
			localStorage.setItem('data',JSON.stringify(o));
			return o;
		case 'changeColorState':
			o = {
				...state,
				list: state.list.map(item=>{
					if (Number(item.id) === Number(action.id)) {
						return {
							...item,
							visible: action.visible
						}
					}else {
						return item;
					}
				})
			};
			return o;
		case 'changeAllColorState':
			o = {
				...state,
				list: state.list.map(item=>{
					return {
						...item,
						visible: false
					}
				})
			};
			return o;
		case 'changeProjectDetails':
			o = {
				...state,
				list: state.list.map(item=>{
					if (Number(item.id) === Number(action.id)) {
						return {
							...item,
							name: action.name,
							describe: action.describe
						}
					}else {
						return item;
					}
				})
			};
			localStorage.setItem('data',JSON.stringify(o));
			return o;
		case 'removeProject':
			o = {
				...state,
				list: state.list.filter(item=> {
					return Number(item.id) !== Number(action.id)
				})
			};
			localStorage.setItem('data',JSON.stringify(o));
			return o;
		case 'addMissionList':
			o = {
				...state,
				list: state.list.map(item=>{
					if (Number(item.id) === Number(action.id)) {
						return {
							...item,
							missions: [
								...item.missions,
								{
									...action.obj
								}
							]
						}
					}else {
						return item;
					}
				})
			};
			localStorage.setItem('data',JSON.stringify(o));
			return o;
		case 'removeMissionList':
			o = {
				...state,
				list: state.list.map(item=>{
					if (Number(item.id) === Number(action.id)) {
						return {
							...item,
							missions: item.missions.filter(i=>{
								return (Number(i.id) !== Number(action.missionid) && Number(i.pid) !== Number(action.missionid))
							})
						}
					}else {
						return item;
					}
				})
			};
			localStorage.setItem('data',JSON.stringify(o));
			return o;
		case 'changeMissionListDetail':
			o = {
				...state,
				list: state.list.map(item=>{
					if (Number(item.id) === Number(action.id)) {
						return {
							...item,
							missions: item.missions.map(i=>{
								if (Number(i.id) === Number(action.missionid)) {
									return {
										...i,
										name: action.name
									}
								}else {
									return i;
								}
							})
						}
					}else {
						return item;
					}
				})
			};
			localStorage.setItem('data',JSON.stringify(o));
			return o;
		case 'editMissionList':
			o = {
				...state,
				list: state.list.map(item=>{
					if (Number(item.id) === Number(action.id)) {
						return {
							...item,
							missions: item.missions.map(i=>{
								if (Number(i.id) === Number(action.missionid)) {
									return {
										...i,
										editing: action.editing
									}
								}else {
									return i;
								}
							})
						}
					}else {
						return item;
					}
				})
			};
			return o;
		default:
			return state;
	}
}
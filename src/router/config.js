import InitPage from "../projectpage/initpage/initpage";
import NewProjectPage from "../projectpage/newprojectpage/newprojectpage";
import ProjectEditPage from "../projectpage/projecteditpage";
import Welcome from "../welcome/welcome";
import ProjectPage from "../projectpage/projectpage";
import ProjectSettingPage from "../projectpage/projectsettingpage";

let projectPage = [
	{
		path: '/project',
		component: InitPage,
		exact: true
	},
	{
		path: '/project/new',
		component: NewProjectPage,
		exact: false,
	},
	{
		path: '/project/edit/:id',
		component: ProjectEditPage,
		exact: false
	},
	{
		path: '/project/setting/:id',
		component: ProjectSettingPage,
		exact: false
	}
];

let homePage = [
	{
		path: '/',
		component: Welcome,
		exact: true
	},
	{
		path: '/project',
		component: ProjectPage,
		exact: false,
	}
];

export {
	projectPage,
	homePage
}
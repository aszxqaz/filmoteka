import { IMenu } from './menu.interface'

export const firstMenu: IMenu = {
	title: 'Menu',
	items: [
		{
			title: 'Home',
			link: '/',
			icon: 'MdHome',
		},
		{
			title: 'Discovery',
			link: '/genres',
			icon: 'MdExplore',
		},
		{
			title: 'Fresh movies',
			link: '/fresh',
			icon: 'MdRefresh',
		},
		{
			title: 'Trending now',
			link: '/trending',
			icon: 'MdLocalFireDepartment',
		},
	],
}

export const userMenu: IMenu = {
	title: 'General',
	items: [],
}


import { FCC } from '@/types/fcc'

import Menu from './Menu'
import GenreMenu from './genres/GenreMenu'
import { firstMenu, userMenu } from './menu.data'

const MenuContainer: FCC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			<GenreMenu />
			<Menu menu={userMenu} />
		</div>
	)
}

export default MenuContainer

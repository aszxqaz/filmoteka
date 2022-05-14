import { FCC } from '@/types/fcc'

import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

import MaterialIcon from '@/components/ui/MaterialIcon'

import styles from './Menu.module.scss'
import { IMenuItem } from './menu.interface'

const MenuItem: FCC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()

	const className = cn({
		[styles.active]: asPath === item.link,
	})

	return (
		<li {...className}>
			<Link href={item.link}>
				<a>
					<MaterialIcon name={item.icon} />
					<span>{item.title}</span>
				</a>
			</Link>
		</li>
	)
}

export default MenuItem

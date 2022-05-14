import { FCC } from '@/types/fcc'

import SkeletonLoader from '@/ui/SkeletonLoader'

import Menu from '../Menu'

import { usePopularGenres } from './usePopularGenres'

const GenreMenu: FCC = () => {
	const { isLoading, data } = usePopularGenres()

	return isLoading || true ? (
		<div className='mx-11 mb-6'>
			<SkeletonLoader count={5} className='h-7 mt-6' />
		</div>
	) : (
		<Menu menu={{ title: 'Popular genres', items: data || [] }} />
	)
}

export default GenreMenu

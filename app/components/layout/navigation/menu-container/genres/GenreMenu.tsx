import { FCC } from '@/types/fcc'

import Menu from '../Menu'

import { usePopularGenres } from './usePopularGenres'

const GenreMenu: FCC = () => {
	const { isLoading, data } = usePopularGenres()

	return isLoading ? (
		<div className='mx-11 mb-6'>Loading...</div>
	) : (
		<Menu menu={{ title: 'Popular genres', items: data || [] }} />
	)
}

export default GenreMenu

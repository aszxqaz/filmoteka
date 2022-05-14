import { FCC } from '@/types/fcc'

import React from 'react'

interface IHeading {
	title: string
	className?: string
}

const Heading: FCC<IHeading> = ({ title, className }) => {
	const defaultClassName = 'text-white text-opacity-80 font-semibold'

	return (
		<h1
			className={`${defaultClassName} ${
				className?.includes('xl') ? '' : ' text-3xl'
			} ${className}`}
		>
			{title}
		</h1>
	)
}

export default Heading

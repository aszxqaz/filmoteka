import { FCC } from '@/types/fcc'

import cn from 'classnames'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader: FCC<SkeletonProps> = ({ className, ...rest }) => {
	return (
		<Skeleton
			{...rest}
			baseColor='#1f2125'
			highlightColor='#292a2e'
			className={cn('rounded-lg', className)}
		/>
	)
}

export default SkeletonLoader

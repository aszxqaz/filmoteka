import { FCC } from '@/types/fcc'

import React from 'react'
import * as MaterialIcons from 'react-icons/md'

import { TypeMaterialIconName } from '@/shared/types/icon.types'

const MaterialIcon: FCC<{ name: TypeMaterialIconName }> = ({ name }) => {
	const IconComponent = MaterialIcons[name]
	return <IconComponent /> || <MaterialIcons.MdError />
}

export default MaterialIcon

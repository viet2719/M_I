import { LayoutProps } from '@/models/index'
import * as React from 'react'
import Header from '../common/header'

export function HomePageBeforeLayout({ children }: LayoutProps) {
	return (
		<>
			<div className="">{children}</div>
		</>
	)
}

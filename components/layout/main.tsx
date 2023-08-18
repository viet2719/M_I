import { LayoutProps } from '@/models/index'
import React, { useEffect } from 'react'
import Link from 'next/link'

export function MainLayout({ children }: LayoutProps) {
	useEffect(() => {
		console.log('MainLayout mounting')
		return () => console.log('MainLayout unmounting')
	}, [])

	return (
		<div>
			<h1>Main Layout</h1>

			<Link href="/">Home</Link>

			<Link href="/about">About</Link>

			<div>{children}</div>
		</div>
	)
}

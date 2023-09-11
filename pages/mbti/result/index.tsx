import React from 'react'
// import Introduce from '@/components/mbti/index'
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'
import Resuilt from '@/components/mbti/body/PagesResult/Result'

export default function index(): JSX.Element {
	return (
		<div>
			<Header />
			<Resuilt />
			<Footer />
		</div>
	)
}

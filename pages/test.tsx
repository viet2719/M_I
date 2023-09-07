import LoadingOverlay from '@/pages/LoadingOverlay'
import Link from 'next/link'
import { useState } from 'react'

function YourComponent() {
	const [loading, setLoading] = useState(false)
	const handleLinkClick = () => {
		setLoading(true)
		// setTimeout(() => {
		// 	setLoading(false)
		// }, 2000)
	}

	return (
		<div>
			<Link href="/index" onClick={handleLinkClick}>
				Chuyển trang
			</Link>
			<LoadingOverlay loading={loading} />
		</div>
	)
}

export default YourComponent

import { useRouter } from 'next/router'

function TagPage() {
	const router = useRouter()
	const { id, slug } = router.query

	return (
		<div>
			<h1>Tag Page</h1>
			<p>ID: {id}</p>
			<p>Slug: {slug}</p>
		</div>
	)
}

export default TagPage

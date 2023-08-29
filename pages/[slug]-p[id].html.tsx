import Detail from '@/components/details/details'
import { useRouter } from 'next/router'

function SlugPidHtmlPage() {
	const router = useRouter()
	const { slug, id } = router.query
	return <Detail />
}

export default SlugPidHtmlPage

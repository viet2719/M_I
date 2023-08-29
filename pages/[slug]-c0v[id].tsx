import Main_search from '@/components/list_occupations/main_search'
import { useRouter } from 'next/router'

function SlugCIdPage() {
	const router = useRouter()
	const { slug, id } = router.query
	return <Main_search />
}

export default SlugCIdPage

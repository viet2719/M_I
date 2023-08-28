import Detail from '@/components/details/details'
import Main_search from '@/components/list_occupations/main_search'
import { containsIdPattern } from '@/utils/convert'
import { useRouter } from 'next/router'

const List_occupations = () => {
	const router = useRouter()
	const slug = router.query['slug-nganh-nghe']
	return (
		<>
			{!containsIdPattern(slug) ? (
				<Main_search />
			) : (
				<>
					<Detail />
				</>
			)}
		</>
	)
}

export default List_occupations

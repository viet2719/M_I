import Detail from '@/components/details/details'
import Main_search from '@/components/list_occupations/main_search'
import { useRouter } from 'next/router'

const List_occupations = () => {
	const router = useRouter()
	if (router.isFallback) {
		return <div style={{ fontSize: '2rem', textAlign: 'center' }}>Loading...</div>
	}
	return (
		<>
			{true ? (
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

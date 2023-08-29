import Detail from '@/components/details/details'
import Main_search from '@/components/list_occupations/main_search'
import { checkUrl, checkUrlDSNganhNghe } from '@/utils/convert'
import { useRouter } from 'next/router'
import Blank_page from './404'

const Dynamic = () => {
	const router = useRouter()
	const slug = router.query['dynamic']
	if (checkUrl(slug)) {
		return <Detail />
	}
	if (checkUrlDSNganhNghe(slug)) {
		return <Main_search />
	}
	if (!checkUrl(slug) && !checkUrlDSNganhNghe(slug)) {
		return <Blank_page />
	}
}

export default Dynamic

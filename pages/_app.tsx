import { EmptyLayout } from '@/components/layout'
import store from '@/stores'
import { Provider } from 'react-redux'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: any) {
	const Layout = Component.Layout ?? EmptyLayout

	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	)
}
export default MyApp

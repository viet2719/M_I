import { EmptyLayout } from '@/components/layout'
import { Provider } from 'react-redux'
import { AppPropsWithLayout } from '@/models/index'
import '../styles/globals.scss'
import store from '@/stores'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
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

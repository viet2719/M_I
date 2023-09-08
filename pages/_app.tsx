import { EmptyLayout } from '@/components/layout'
import { Provider } from 'react-redux'
import { AppPropsWithLayout } from '@/models/index'
import '../styles/globals.scss'
import store from '@/stores'
import { MyProvider } from '@/components/useContext/useContext'

function MyApp({ Component, pageProps }: any) {
	const Layout = Component.Layout ?? EmptyLayout

	return (
		<Provider store={store}>
			<MyProvider>
				{/* Sử dụng Redux Store thứ nhất cho các phần tử ở đây */}
				<Layout>
					{/* Sử dụng Redux Store thứ hai cho các phần tử ở đây */}
					<Component {...pageProps} />
				</Layout>
			</MyProvider>
		</Provider>
	)
}
export default MyApp

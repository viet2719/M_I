import { EmptyLayout } from '@/components/layout'
import { Provider } from 'react-redux'
import { AppPropsWithLayout } from '@/models/index'
import '../styles/globals.scss'
import store from '@/stores'
import { useEffect } from 'react'
import { io } from 'socket.io-client'

function MyApp({ Component, pageProps }) {
	const Layout = Component.Layout ?? EmptyLayout
// useEffect(()=>{
// 	const socket = io.connect("https://socket.timviec365.vn", {
// 		secure: true,
// 		enabledTransports: ["https"],
// 		transports: ["websocket", "polling"],
// 	  });
// 	  // Đoạn mã xử lý sự kiện và giao tiếp với máy chủ Socket.IO
// 	  socket.on("connect", () => {
// 		console.log("Connected to Socket.IO");
// 		// Thêm xử lý sự kiện hoặc truyền tải dữ liệu ở đây
// 	  });
// },[])
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	)
}
export default MyApp

import { Spin } from 'antd'
import { useEffect, useRef } from 'react'
import styles from '@styles/home/home.module.scss'

const LoadingOverlay = ({ loading }: any) => {
	const isLoadingRef = useRef(loading)
	useEffect(() => {
		isLoadingRef.current = loading
	}, [loading])
	useEffect(() => {
		const handleRouteChange = () => {
			if (isLoadingRef.current) {
				isLoadingRef.current = false
			}
		}

		window.addEventListener('routeChangeComplete', handleRouteChange)
		return () => {
			window.removeEventListener('routeChangeComplete', handleRouteChange)
		}
	}, [])

	return loading ? (
		<div className={styles.overlay}>
			<Spin
				size="large"
				style={{
					zIndex: '10000',
					position: 'fixed',
					background: 'rgba(0, 0, 0, 0.05) !important',
				}}
			>
				<div
					className="content"
					style={{
						padding: '50px',
						background: 'rgba(0, 0, 0, 0.05) !important',
						borderRadius: '4px',
					}}
				/>
			</Spin>
		</div>
	) : null
}

export default LoadingOverlay

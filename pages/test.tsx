import React, { useState, useRef } from 'react'

const ResizableDiv = () => {
	const [width, setWidth] = useState(200) // Chiều rộng khởi đầu của thẻ div
	const isDragging = useRef(false) // Ref để theo dõi trạng thái kéo

	const handleMouseDown = () => {
		isDragging.current = true // Bắt đầu kéo
		console.log('giữ')
	}

	const handleMouseMove = (event) => {
		if (!isDragging.current) return

		const newWidth = document.documentElement.clientWidth - event.clientX
		setWidth(newWidth)
	}

	const handleMouseUp = () => {
		isDragging.current = false // Kết thúc kéo
	}

	return (
		<div
			className="resizable-div"
			style={{ width: `${width}px` }}
			onMouseDown={handleMouseDown} // Xử lý sự kiện khi nhấn chuột
			onMouseMove={handleMouseMove} // Xử lý sự kiện khi di chuyển chuột
			onMouseUp={handleMouseUp} // Xử lý sự kiện khi thả chuột
		>
			Kéo bên lề trái để thay đổi chiều rộng
		</div>
	)
}

export default ResizableDiv

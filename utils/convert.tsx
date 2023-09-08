export function convertToSlug(inputString?: any): any {
	if (inputString) {
		const cleanedString = inputString
			.toLowerCase()
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/[^\w\s-]/g, '')

		const slug = cleanedString.replace(/\s+/g, '-')
		return `${slug}`
	}
}
export function convertToSlugNo(inputString?: any): any {
	if (inputString) {
		const slug = inputString.replace(/\s+/g, '-')
		return `${slug}`
	}
}
export function checkUrl(url: any): boolean {
	const pattern = /^[a-zA-Z0-9-]+-d[0-9]+\.html$/
	return pattern.test(url)
}
export function checkUrlDSNganhNghe(url: any): boolean {
	const pattern = /^[\w\-]+-c\d+$/
	return pattern.test(url)
}

export const unixTimestampToDateString = (timestamp: number) => {
	// Tạo một đối tượng Date mới và truyền timestamp như mili giây
	const date = new Date(timestamp * 1000)

	// Trích xuất các thành phần của ngày
	const year = date.getFullYear()
	const month = date.getMonth() + 1 // Tháng tính từ 0 nên cộng thêm 1
	const day = date.getDate()

	// Tạo chuỗi ngày tháng năm định dạng
	const formattedDate = `${day}/${month}/${year}`

	return formattedDate
}

export const unixTimestampToDateStringMon = (timestamp: number) => {
	// Tạo một đối tượng Date mới và truyền timestamp như mili giây
	const date = new Date(timestamp * 1000)

	// Trích xuất các thành phần của ngày
	const year = date.getFullYear()
	const month = date.getMonth() + 1 // Tháng tính từ 0 nên cộng thêm 1
	const day = date.getDate()

	// Tạo chuỗi ngày tháng năm định dạng
	const formattedDate = `${month}/${year}`

	return formattedDate
}
export const calculateTimeDifference = (timestamp: number) => {
	// Lấy thời gian hiện tại
	const now: any = new Date()

	// Tạo một đối tượng Date từ timestamp
	const date: any = new Date(timestamp * 1000)

	// Tính số ngày, giờ và phút từ khoảng thời gian
	const timeDifferenceMillis = date - now
	const days = Math.floor(timeDifferenceMillis / (1000 * 60 * 60 * 24))
	const hours = Math.floor((timeDifferenceMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	const minutes = Math.floor((timeDifferenceMillis % (1000 * 60 * 60)) / (1000 * 60))

	// Kiểm tra và trả về giá trị phù hợp
	let result = ''

	// Kiểm tra và thêm ngày, giờ hoặc phút vào biến kết quảs
	if (minutes < 0) {
		result = `${minutes} phút`
		if (hours < 0) {
			result = `${hours} giờ `
			if (days < 0) {
				result = `${days} ngày `
			}
		}
	}

	// Loại bỏ dấu "-" ở đầu nếu có
	if (result.charAt(0) === '-') {
		result = result.substring(1)
	}
	return result
}
// Bỏ thẻ html
export const removeHtmlTags = (htmlString: any) => {
	// Sử dụng DOMParser để phân tích chuỗi HTML thành một tài liệu DOM
	const parser: any = new DOMParser()
	const doc = parser.parseFromString(htmlString, 'text/html')

	// Sử dụng innerText để trích xuất văn bản không có thẻ HTML

	// Loại bỏ các thuộc tính class, title, dir và các thuộc tính khác
	const cssLikeAttributes = [
		'color',
		'background',
		'font - size',
		'font-family',
		'text - align',
		'height' /* thêm các thuộc tính khác nếu cần */,
	]

	// Sử dụng innerText để trích xuất văn bản không có thẻ HTML
	const textWithoutTags = doc.body.innerText
	const cleanedHtml = textWithoutTags.replace(
		/\s(class|title|dir|style|align|valign|bgcolor)\s*=\s*(['"])(?:(?!\2).)*\2/g,
		''
	)

	const cleanedHtml2 = cleanedHtml.replace(/<[^>]*>/g, '')
	const cleanedHtml3 = cleanedHtml2.replace(/\s(\w+)=['"][^'"]*['"]/g, '')
	const cleanedHtml4 = cleanedHtml3.replace(
		new RegExp(`\\s(${cssLikeAttributes.join('|')})\\s*=\\s*['"][^'"]*['"]`, 'g'),
		''
	)
	return cleanedHtml4
}
export function extractH2Content(htmlContent: any) {
	// Kiểm tra xem mã đang chạy trong trình duyệt
	if (typeof document === 'undefined') {
		return [] // Hoặc xử lý lỗi theo cách của bạn
	}

	// Mã JavaScript ở đây chỉ chạy trong trình duyệt
	var tempDiv = document.createElement('div')
	tempDiv.innerHTML = htmlContent

	var h2Elements = tempDiv.querySelectorAll('h2')
	var h2Contents: any = []

	h2Elements.forEach(function (element) {
		h2Contents.push(element.innerText)
	})

	return h2Contents
}
export function extractH3Content(htmlContent: any) {
	// Kiểm tra xem mã đang chạy trong trình duyệt
	if (typeof document === 'undefined') {
		return [] // Hoặc xử lý lỗi theo cách của bạn
	}

	// Mã JavaScript ở đây chỉ chạy trong trình duyệt
	var tempDiv = document.createElement('div')
	tempDiv.innerHTML = htmlContent

	var h2Elements = tempDiv.querySelectorAll('h3')
	var h2Contents: any = []

	h2Elements.forEach(function (element) {
		h2Contents.push(element.innerText)
	})

	return h2Contents
}



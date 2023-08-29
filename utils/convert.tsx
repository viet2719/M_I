export function convertToSlug(inputString: any): any {
	const cleanedString = inputString
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^\w\s-]/g, '')

	const slug = cleanedString.replace(/\s+/g, '-')
	return `${slug}`
}

export function containsIdPattern(inputString: any): boolean {
	const pattern = /-p\d+\.html$/ // Mẫu kiểm tra có dạng -p{số}.html ở cuối chuỗi
	return pattern.test(inputString)
}

export function convertToSlug(inputString: any): any {
	const cleanedString = inputString
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^\w\s-]/g, '')

	const slug = cleanedString.replace(/\s+/g, '-')
	return `${slug}`
}
export function checkUrl(url: any): boolean {
	const pattern = /^[a-zA-Z0-9-]+-d[0-9]+\.html$/
	return pattern.test(url)
}
export function checkUrlDSNganhNghe(url: any): boolean {
	const pattern = /^[\w\-]+-c\d+$/
	return pattern.test(url)
}

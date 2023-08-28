export function convertToSlug(inputString: any, id: any): any {
	const cleanedString = inputString
		.toLowerCase() // Chuyển đổi thành chữ thường
		.normalize('NFD') // Chuyển đổi các ký tự có dấu thành không dấu + phân tách ký tự và dấu
		.replace(/[\u0300-\u036f]/g, '') // Loại bỏ ký tự dấu (combining diacritical marks)
		.replace(/[^\w\s-]/g, '') // Loại bỏ ký tự không phải chữ cái, số, dấu cách và dấu gạch ngang

	const slug = cleanedString.replace(/\s+/g, '-') // Thay thế dấu cách bằng dấu gạch ngang
	return `/${slug}-p${id}.html`
}
export function containsIdPattern(inputString: any): boolean {
	const pattern = /-p\d+\.html$/ // Mẫu kiểm tra có dạng -p{số}.html ở cuối chuỗi
	return pattern.test(inputString)
}

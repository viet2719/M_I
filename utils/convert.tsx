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

export const unixTimestampToDateString=(timestamp:number)=> {
	// Tạo một đối tượng Date mới và truyền timestamp như mili giây
	const date = new Date(timestamp * 1000);
  
	// Trích xuất các thành phần của ngày
	const year = date.getFullYear();
	const month = date.getMonth() + 1; // Tháng tính từ 0 nên cộng thêm 1
	const day = date.getDate();
  
	// Tạo chuỗi ngày tháng năm định dạng
	const formattedDate = `${day}/${month}/${year}`;
  
	return formattedDate;
  }
  export const calculateTimeDifference=(timestamp:number) =>{
	// Lấy thời gian hiện tại
	const now:any = new Date();
  
	// Tạo một đối tượng Date từ timestamp
	const date:any = new Date(timestamp * 1000);
  
	// Tính số ngày, giờ và phút từ khoảng thời gian
	const timeDifferenceMillis = date - now;
	const days = Math.floor(timeDifferenceMillis / (1000 * 60 * 60 * 24));
	const hours = Math.floor((timeDifferenceMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((timeDifferenceMillis % (1000 * 60 * 60)) / (1000 * 60));
  
	// Kiểm tra và trả về giá trị phù hợp
	let result = '';

	// Kiểm tra và thêm ngày, giờ hoặc phút vào biến kết quảs
	if (minutes < 0) {
	  result = `${minutes} phút`;
	  if (hours < 0) {
		result = `${hours} giờ `;
		if (days < 0) {
		result = `${days} ngày `;
	  }
	  }
	}
  
	// Loại bỏ dấu "-" ở đầu nếu có
	if (result.charAt(0) === '-') {
	  result = result.substring(1);
	}
	return result;
  }

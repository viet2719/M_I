import axios from 'axios'
const baseURL: any = process.env.NEXT_PUBLIC_BASE_URL
const token =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MjA4NTEzLCJpZFRpbVZpZWMzNjUiOjExNzgzODQsImlkUUxDIjoxNzAzODAsImlkUmFvTmhhbmgzNjUiOjAsImVtYWlsIjoiIiwicGhvbmVUSyI6IjA4Njk1MTY5NzgiLCJjcmVhdGVkQXQiOjE2ODQyMjc1NDcsInR5cGUiOjB9LCJpYXQiOjE2OTM0NDYyNTAsImV4cCI6MTY5MzUzMjY1MH0.3UwrRDW3F-TQbYecgwYuedNaTLepj4kInZDb_UL5dQA'
// Read - show
export const fetchData = async (api: string, data?: any) => {
	try {
		const response = await axios.post(`${baseURL}${api}`, data, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		return response?.data
	} catch (err) {
		console.error('Error fetching home data:', err)
	}
}
/// Add - create - update
export const handleCreate = async (api: string, data: any) => {
	try {
		const response = await axios.post(`${baseURL}${api}`, data, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		if (response.status == 200) {
			alert('Thành công')
		}
		return response.status
	} catch (error) {
		alert('Thất bại')
		console.log('Lỗi khi thêm ý kiêns:', error)
	}
}
// delete
export const handleDelete = async (api: string, data: any) => {
	try {
		const response = await axios.post(`${baseURL}${api}`, data, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
	} catch (error) {
		alert('Thất bại')
		console.log('Lỗi khi xóa:', error)
	}
}
// Token đăng nhập
const token_login =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6MjA4NTEzLCJpZFRpbVZpZWMzNjUiOjExNzgzODQsImlkUUxDIjoxNzAzODAsImlkUmFvTmhhbmgzNjUiOjAsImVtYWlsIjoiIiwicGhvbmVUSyI6IjA4Njk1MTY5NzgiLCJjcmVhdGVkQXQiOjE2ODQyMjc1NDcsInR5cGUiOjB9LCJpYXQiOjE2OTQwNTY1NDYsImV4cCI6MTY5NDE0Mjk0Nn0.798srusUmgRGfCq42uCQ-iUuGFt2jtMKDOXerIdnQMc'
export const handleCreateLogin = async (api: string, data: any) => {
	try {
		const response = await axios.post(`${baseURL}${api}`, data, {
			headers: {
				Authorization: `Bearer ${token_login}`,
			},
		})
		if (response.status == 200) {
			alert('Thành công')
		}
		return response.status
	} catch (error) {
		alert('Thất bại')
		console.log('Lỗi khi thêm ý kiêns:', error)
	}
}

// MyContext.js
import { createContext, useContext, useState } from 'react'

const MyContext = createContext({})

export const MyProvider = ({ children }: any) => {
	const [dataConText, setDataContext] = useState({}) // Dữ liệu bạn muốn chia sẻ


	return <MyContext.Provider value={{ dataConText, setDataContext }}>{children}</MyContext.Provider>
}

export const useMyContext = () => {
	return useContext(MyContext)
}

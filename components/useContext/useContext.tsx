// MyContext.js
import { createContext, useContext, useState } from 'react'

const MyContext = createContext({})

export const MyProvider = ({ children }: any) => {
	const [data, setData] = useState({}) // Dữ liệu bạn muốn chia sẻ
    const [selectedNganhNghe, setSelectedNganhNghe] = useState('');


	return <MyContext.Provider value={{ data, setData }}>{children}</MyContext.Provider>
}

export const useMyContext = () => {
	return useContext(MyContext)
}


import React from 'react'
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'
import Resuilt from '@/components/mi/PagesResultMi'

export default function index(): JSX.Element {
    return (
        <div>
            <Header />
            <Resuilt/>
            <Footer />
        </div>
    )
}

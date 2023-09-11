import PageTracNghiem from '@/components/mi/QuizMi/PageTracNghiem'
import React from 'react'
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'

export default function index(): JSX.Element {
    return (
        <div>
            <Header />
            <PageTracNghiem />
            <Footer />
        </div>
    )
}

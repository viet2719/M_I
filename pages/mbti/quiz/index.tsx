import PageTracNghiem from '@/components/mbti/body/quiz/PageTracNghiem'
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

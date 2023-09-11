import React from 'react'
import Introduce from '@/components/mi/index'

import Header from '@/components/common/header'
import Footer from '@/components/common/footer'

export default function index(): JSX.Element {
    return (
        <div>
            <Header />
            <Introduce />
            <Footer />
        </div>
    )
}


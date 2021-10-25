import React from 'react'
import TopPageTitle from '../../shared-components/TopPageTitle'
import Material from '../../pages/material/Material';
import BackToTop from '../../shared-components/BackToTop';
import Footer from "../../shared-components/Footer";

function HRMaterial() {

    const title = "Kho tài liệu",
    link = "Trang chủ",
    linkActive = "Thư viện"

    return (
        <>
            <TopPageTitle title={title} link={link} linkActive={linkActive} />
            <Material />
            <Footer/>
            <BackToTop/>
        </>
    )
}

export default HRMaterial

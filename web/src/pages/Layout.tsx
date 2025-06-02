import React, { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface LayoutProps {
    children : ReactNode
}

export default function Layout({ children } : LayoutProps) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>);
}
import React, { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface LayoutProps {
    children : ReactNode
}

export default function Layout({ children } : LayoutProps) {
    return (
        <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>);
}
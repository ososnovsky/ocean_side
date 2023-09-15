import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import BookingWidget from "./BookingWidget";
import Footer from "./Footer";

export default function Layout() {
    return (
        <>
            <div className="p-4 flex flex-col min-h-screen">
                <Navbar />
                <BookingWidget />
                <div className="outlet">
                    <Outlet />
                </div>

            </div>
            <Footer />
        </>

    )
}
import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const Layout = () => {
	return (
		<div className="min-h-screen flex flex-col bg-background text-on-background font-body">
			<Header />
			<main className="flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-16 pt-24 pb-16">
				<Outlet />
			</main>
			<Footer />

			<Sidebar />
		</div>
	);
};

export default Layout;

import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const Layout = () => {
	return (
		<div>
			<Header />
			<div className="flex flex-row min-h-screen">
				<main>
					<Outlet />
				</main>
				<Sidebar />
			</div>
			<Footer />
		</div>
	);
};

export default Layout;

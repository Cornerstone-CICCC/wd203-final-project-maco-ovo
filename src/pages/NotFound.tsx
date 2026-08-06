import { Link } from "react-router";

const NotFound = () => {
	return (
		<div className="p-12 text-center">
			<h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
			<h2 className="text-2xl mb-8">Page Not Found</h2>
			<Link to="/" className="text-amber-600 underline text-lg">
				Go back to Home
			</Link>
		</div>
	);
};

export default NotFound;

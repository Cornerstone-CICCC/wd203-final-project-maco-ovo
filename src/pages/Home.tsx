import { Link } from "react-router";

const Home = () => {
	return (
		<div className="p-12 text-center">
			<h1 className="text-4xl font-bold mb-8">Welcome</h1>

			<Link
				to="/items"
				className="px-6 py-3 bg-amber-800 text-white font-semibold rounded hover:bg-amber-700"
			>
				View Menu
			</Link>
		</div>
	);
};

export default Home;

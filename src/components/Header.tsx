import { Link } from "react-router";
import { useCart } from "../context/CartContext";

const Header = () => {
	const { cart, toggleSidebar } = useCart();
	const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
	return (
		<nav className="p-4 bg-gray-100 flex justify-between items-center">
			<ul className="flex gap-4">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/items">Menu</Link>
				</li>
			</ul>

			<button
				onClick={toggleSidebar}
				className="font-bold bg-white px-4 py-2 rounded shadow hover:bg-gray-200"
			>
				Cart ({totalItems})
			</button>
		</nav>
	);
};

export default Header;

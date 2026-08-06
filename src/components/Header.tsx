import { Link } from "react-router";
import { useCart } from "../context/CartContext";

const Header = () => {
	const { cart } = useCart();
	const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
	return (
		<nav>
			<ul className="flex flex-row justify-center gap-5">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/items">Menu</Link>
				</li>
				<li>
					<Link to="/cart">Cart ({totalItems})</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Header;

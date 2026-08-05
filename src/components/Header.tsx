import { Link } from "react-router";

const Header = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/items">Menu</Link>
				</li>
				<li>
					<Link to="/cart">Cart</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Header;

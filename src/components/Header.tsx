import { Link } from "react-router";
import { useCart } from "../context/CartContext";

const Header = () => {
	const { cart, toggleSidebar } = useCart();
	const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
	return (
		<header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 border-b border-tertiary-container/30">
			<div className="max-w-[1280px] mx-auto px-4 md:px-16 h-16 flex items-center justify-between">
				<Link
					to="/"
					className="font-display text-2xl text-primary font-semibold transition-transform hover:scale-[1.02]"
				>
					Cafe 203
				</Link>

				<nav>
					<ul className="flex items-center gap-8">
						<li>
							<Link
								to="/Items"
								className="text-sm font-semibold uppercase tracking-wider text-on-surface hover:text-primary transition-colors"
							>
								Menu
							</Link>
						</li>
						<li>
							<Link
								to="/Cart"
								className="text-sm font-semibold uppercase tracking-wider bg-primary/10 text-primary px-4 py-2 rounded hover:bg-primary/20 transition-colors"
							>
								Cart (0)
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;

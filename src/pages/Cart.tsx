import { Link } from "react-router";
import { useCart } from "../context/CartContext";

const Cart = () => {
	const { cart, removeFromCart, totalPrice } = useCart();

	if (cart.length === 0) {
		return (
			<div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
				<p className="font-display text-xl text-on-background m-12">
					Your Cart is Empty
				</p>
				<Link
					to="/items"
					className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-body font-semibold rounded-full transition-all hover:scale-[1.02] hover:shadow-glow"
				>
					Explore Menu
				</Link>
			</div>
		);
	}

	return (
		<div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
			<div className="border-b border-surface-dim pb-6 mb-10">
				<h1 className="font-display text-4xl md:text-5xl text-on-background">
					Your Cart
				</h1>
			</div>

			<ul className="space-y-6 mb-16">
				{cart.map((item) => (
					<li
						key={item.id}
						className="flex flex-col md:flex-row md:items-center justify-between gap-5 p-6 bg-surface-container-lowest border-tertiary-container/30 transition-shadow hover:shadow-glow"
					>
						<div className="flex items-center gap-6">
							<img
								src={item.photo}
								alt={item.name}
								className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-2xl border border-surface-dim"
							/>
							<div className="flex flex-col">
								<h2 className="font-display text-2xl text-on-surface mb-2">
									{item.name}
								</h2>
								<p className="font-body text-on-surface-variant font-medium">
									${item.price.toFixed(2)}
									<span className="mx-2 text-tertiary text-sm font-normal">
										x
									</span>
									{item.quantity}
								</p>
							</div>
						</div>

						<div className="flex md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-4 mt-4 md:mt-0 pt-4 md:pt-0 border-t border-tertiary-container/30 md:border-none">
							<p className="font-body text-2xl font-semibold text-primary">
								${(item.price * item.quantity).toFixed(2)}
							</p>
							<button
								onClick={() => removeFromCart(item.id)}
								className="text-sm font-semibold cursor-pointer tracking-wider text-error/80 hover:text-error transition-colors"
							>
								REMOVE
							</button>
						</div>
					</li>
				))}
			</ul>

			<div className="flex flex-col md:flex-row justify-between items-center bg-surface-container-low p-8 md:p-10 border-t border-surface-dim">
				<div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
					<span className="font-body text-sm font-semibold uppercase tracking-widest text-tertiary mb-3">
						Total Amount
					</span>
					<div className="font-display text-4xl md:text-5xl text-on-background">
						${totalPrice.toFixed(2)}
					</div>
				</div>

				<Link
					to="/checkout"
					className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white font-body font-semibold rounded-full transition-all hover:scale-[1.02] hover:shadow-glow active:scale-95 w-full md:w-auto"
				>
					Proceed to Checkout　→
				</Link>
			</div>
		</div>
	);
};

export default Cart;

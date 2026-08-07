import { useNavigate } from "react-router";
import { useCart } from "../context/CartContext";

const Sidebar = () => {
	const { cart, removeFromCart, totalPrice, isShown, toggleSidebar } =
		useCart();
	const navigate = useNavigate();

	const handleNavigate = (path: string) => {
		toggleSidebar();
		navigate(path);
	};

	return (
		<>
			<div
				className={`fixed inset-0 z-40  ${
					isShown ? "opacity-100 visible" : "opacity-0 invisible"
				}`}
				onClick={toggleSidebar}
				aria-hidden="true"
			/>
			<aside
				className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl p-6 md:p-8 z-50 transform transition-transform duration-300 ease-out flex flex-col ${
					isShown ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="flex justify-between items-center mb-10">
					<h2 className="font-display text-3xl text-on-background">
						Your Cart
					</h2>
					<button
						onClick={toggleSidebar}
						className="text-tertiary hover:text-primary transition-colors p-2 -mr-2"
						aria-label="Close cart"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1.5}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>

				{cart.length === 0 ? (
					<div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
						<p className="font-body text-on-surface-variant text-lg">
							Your cart is empty.
						</p>
					</div>
				) : (
					<>
						<ul className="space-y-6 flex-1 overflow-y-auto pr-2 pb-4">
							{cart.map((item) => (
								<li
									key={item.id}
									className="flex justify-between items-start border-b border-tertiary-container/30 pb-6"
								>
									<div className="flex gap-4">
										<img
											src={item.photo}
											alt={item.name}
											className="w-16 h-16 object-cover rounded-xl shadow-sm"
										/>
										<div className="flex flex-col">
											<p className="font-display text-lg text-on-surface leading-tight">
												{item.name}
											</p>
											<p className="font-body text-sm font-semibold text-primary mt-1">
												${item.price.toFixed(2)}{" "}
												<span className="text-tertiary font-normal mx-1">
													x
												</span>{" "}
												{item.quantity}
											</p>
										</div>
									</div>

									<button
										onClick={() => removeFromCart(item.id)}
										className="text-xs font-semibold uppercase tracking-wider text-error/80 hover:text-error transition-colors mt-1"
									>
										Remove
									</button>
								</li>
							))}
						</ul>

						<div className="pt-6 mt-4 border-t border-tertiary-container/30">
							<div className="flex justify-between items-end mb-8">
								<span className="font-body text-sm font-semibold uppercase tracking-widest text-tertiary">
									Subtotal
								</span>
								<span className="font-display text-3xl text-primary">
									${totalPrice.toFixed(2)}
								</span>
							</div>

							<div className="flex flex-col gap-3">
								<button
									onClick={() => handleNavigate("/cart")}
									className="w-full py-4 rounded-full border border-primary text-primary font-body font-semibold transition-all hover:bg-primary/5 active:scale-95"
								>
									View Cart
								</button>
								<button
									onClick={() => handleNavigate("/checkout")}
									className="w-full py-4 rounded-full bg-primary text-white font-body font-semibold transition-all hover:shadow-glow hover:scale-[1.02] active:scale-95 flex justify-center items-center gap-2"
								>
									Checkout　→
								</button>
							</div>
						</div> 
					</>
				)}
			</aside>
		</>
	);
};

export default Sidebar;

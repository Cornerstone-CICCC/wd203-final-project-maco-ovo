import { useNavigate } from "react-router";
import { useCart } from "../context/CartContext";

const Checkout = () => {
	const { cart, totalPrice, taxAmount, finalTotal, clearCart } = useCart();
	const navigate = useNavigate();

	const handleConfirm = () => {
		clearCart();
		alert("Thank you for your order!");
		navigate("/");
	};

	return (
		<div className="min-h-[80vh] flex flex-col items-center py-12 px-4">
			<h1 className="text-center mb-10 font-display text-4xl md:text-5xl text-on-background">
				Review Your Order
			</h1>

			<div className="bg-surface-container-lowest p-8 md:p-12 max-w-xl w-full shadow-md">
				<h2 className="font-display text-2xl text-on-background border-b border-tertiary-container/30 pb-4 mb-6">
					Order Summary
				</h2>

				<ul className="flex flex-col gap-4 mb-6">
					{cart.map((item) => (
						<li key={item.id} className="flex items-center justify-between">
							<div className="flex items-center gap-4">
								<img
									src={item.photo}
									alt={item.name}
									className="w-12 h-12 object-cover rounded-lg border border-surface-dim"
								/>
								<div className="flex flex-col">
									<span className="font-body font-bold text-on-surface">
										{item.name}
									</span>
									<span className="font-body text-sm text-tertiary">
										Qty: {item.quantity}
									</span>
								</div>
							</div>

							<span className="font-display text-lg text-on-background">
								${(item.price * item.quantity).toFixed(2)}
							</span>
						</li>
					))}
				</ul>

				<div className="border-t border-tertiary-container/30 pt-6 flex flex-col gap-3 font-body text-on-surface-variant">
					<div className="flex justify-between text-tertiary">
						<span>Subtotal</span>
						<span>${totalPrice.toFixed(2)}</span>
					</div>
					<div className="flex justify-between text-tertiary">
						<span>Tax</span>
						<span>${taxAmount.toFixed(2)}</span>
					</div>

					<div className="flex justify-between items-center mt-4 mb-8 text-on-background">
						<span className="font-display text-2xl">Total</span>
						<span className="font-display text-3xl font-bold text-primary">
							${finalTotal.toFixed(2)}
						</span>
					</div>
				</div>

				<button
					onClick={handleConfirm}
					className="w-full flex items-center justify-center gap-2 bg-secondary text-white font-body font-semibold text-lg py-4 rounded-xl transition-transform active:scale-[0.98] hover:shadow-lg"
				>
					Confirm Order　☑︎
				</button>
			</div>
		</div>
	);
};

export default Checkout;

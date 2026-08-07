import { useNavigate } from "react-router";
import { useCart } from "../context/CartContext";

const Checkout = () => {
	const { clearCart } = useCart();
	const navigate = useNavigate();

	const handleConfirm = () => {
		clearCart();
		alert("Thank you for your order!");
		navigate("/");
	};

	return (
		<div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-12">
			<div className="bg-surface-container-lowest border border-tertiary-container/30 rounded-[2rem] p-10 md:p-16 max-w-lg w-full text-center shadow-sm transition-shadow duration-500 hover:shadow-glow">
				<h1 className="font-display text-4xl md:text-5xl text-on-background mb-12">
					Please confirm your order
				</h1>
				<button
					onClick={handleConfirm}
					className="inline-flex items-center justify-center gap-3 w-full px-8 py-5 bg-primary text-white font-body font-semibold text-lg rounded-full transition-all hover:scale-[1.02] hover:shadow-glow active:scale-95"
				>
					Confirm Order　→
				</button>
			</div>
		</div>
	);
};

export default Checkout;

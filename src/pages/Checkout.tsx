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
		<div className="p-12 flex flex-col items-center justify-center">
			<h1 className="text-3xl font-bold mb-6">Checkout</h1>
			<p className="text-gray-600 mb-8">Please confirm your order</p>

			<button
				onClick={handleConfirm}
				className="px-8 py-3 bg-green-800 text-white text-xl font-bold rounded shadow hover:bg-green-700"
			>
				Confirm Order
			</button>
		</div>
	);
};

export default Checkout;

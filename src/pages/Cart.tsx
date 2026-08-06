import { Link } from "react-router";
import { useCart } from "../context/CartContext";

const Cart = () => {
	const { cart, removeFromCart, totalPrice } = useCart();

	if (cart.length === 0) {
		return (
			<div className="p-8 text-center">
				<h1 className="text-xl text-gray-700 mb-4">Your Cart is Empty</h1>
				<Link to="/items" className="text-amber-700 underline">
					Go back to Menu
				</Link>
			</div>
		);
	}

	return (
		<div className="p-8 max-w-4xl mx-auto">
			<h1 className="text-3xl font-bold mb-6">Your Cart</h1>

			<ul className="divide-y mb-6">
				{cart.map((item) => (
					<li key={item.id} className="py-4 flex justify-between items-center">
						<div className="flex items-center gap-4">
							<img
								src={item.photo}
								alt={item.name}
								className="w-16 h-16 object-cover rounded"
							/>
							<div>
								<h2 className="font-semibold text-lg">{item.name}</h2>
								<p className="text-gray-600">
									${item.price.toFixed(2)} x {item.quantity}
								</p>
							</div>
						</div>

						<div className="flex items-center gap-4">
							<p className="font-bold">
								${(item.price * item.quantity).toFixed(2)}
							</p>
							<button
								onClick={() => removeFromCart(item.id)}
								className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-red-900 text-sm"
							>
								Remove
							</button>
						</div>
					</li>
				))}
			</ul>

			<div className="border-t pt-4 flex flex-col items-end gap-4">
				<div className="text-2xl font-bold">
					Total: ${totalPrice.toFixed(2)}
				</div>
				<Link
					to="/checkout"
					className="px-6 py-3 bg-green-900 text-white rounded hover:bg-green-700 font-semibold"
				>
					Proceed to Checkout
				</Link>
			</div>
		</div>
	);
};

export default Cart;

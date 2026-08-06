import { Link } from "react-router";
import { useCart } from "../context/CartContext";

const Sidebar = () => {
	const { cart, removeFromCart, totalPrice } = useCart();

	return (
		<aside className="w-80 bg-gray-50 p-4 border-l min-h-screen">
			<h2 className="text-xl font-bold mb-4">Cart Summary</h2>

			{cart.length === 0 ? (
				<p className="text-gray-500 text-sm">Your cart is empty.</p>
			) : (
				<div>
					<ul className="space-y-3 mb-4">
						{cart.map((item) => (
							<li
								key={item.id}
								className="flex justify-between items-center text-sm border-b pb-2"
							>
								<div>
									<p className="font-semibold">{item.name}</p>
									<p className="text-gray-600">
										${item.price.toFixed(2)} x {item.quantity}
									</p>
								</div>
								<button
									onClick={() => removeFromCart(item.id)}
									className="text-red-500 hover:text-red-700 text-xs"
								>
									Remove
								</button>
							</li>
						))}
					</ul>

					<div className="border-t pt-3 mb-4">
						<p className="flex justify-between font-bold text-lg">
							<span>Total:</span>
							<span>${totalPrice.toFixed(2)}</span>
						</p>
					</div>

					<Link
						to="/cart"
						className="block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 text-sm font-semibold mb-2"
					>
						See your cart
					</Link>
					<Link
						to="/checkout"
						className="block text-center bg-green-600 text-white py-2 rounded hover:bg-green-700 text-sm font-semibold"
					>
						Checkout now
					</Link>
				</div>
			)}
		</aside>
	);
};

export default Sidebar;

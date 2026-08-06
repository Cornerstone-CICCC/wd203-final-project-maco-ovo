import { Link, useNavigate } from "react-router";
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
		<aside
			className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl p-4 z-50 transform transition-transform duration-300 ease-in-out ${isShown ? "translate-x-0" : "translate-x-full"}`}
		>
			<div className="flex justify-between items-center mb-6">
				<h2 className="text-xl font-bold">Cart Summary</h2>
				<button
					onClick={toggleSidebar}
					className="text-2xl font-bold text-gray-500 hover:text-black"
				>
					×
				</button>
			</div>

			{cart.length === 0 ? (
				<p className="text-gray-500 text-sm">Your cart is empty.</p>
			) : (
				<div className="flex flex-col h-[calc(100vh-100px)]">
					<ul className="space-y-4 flex-1 overflow-y-auto pr-2">
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
									className="bg-red-400 text-white p-2 rounded hover:bg-red-700 text-xs"
								>
									Remove
								</button>
							</li>
						))}
					</ul>

					<div className="border-t pt-4 mt-auto">
						<p className="flex justify-between font-bold text-lg mb-4">
							<span>Total:</span>
							<span>${totalPrice.toFixed(2)}</span>
						</p>
						<button
							onClick={() => handleNavigate("/cart")}
							className="block w-full text-center bg-blue-600 text-white py-3 rounded hover:bg-blue-700 font-semibold mb-2"
						>
							View Cart Page
						</button>
						<button
							onClick={() => handleNavigate("/checkout")}
							className="block w-full text-center bg-green-600 text-white py-3 rounded hover:bg-green-700 font-semibold"
						>
							Checkout
						</button>
					</div>
				</div>
			)}
		</aside>
	);
};

export default Sidebar;

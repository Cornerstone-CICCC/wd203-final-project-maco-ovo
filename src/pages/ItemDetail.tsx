import { useParams, Link } from "react-router";
import { type Product, type RawProduct } from "../types/productTypes";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const ItemDetail = () => {
	const { id } = useParams();
	const [item, setItem] = useState<Product | null>(null);
	const { addToCart } = useCart();

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch("/products.json");
				const data = await response.json();

				const foundItem = data.products.find(
					(item: RawProduct) => item.id === Number(id),
				);

				if (!foundItem) return;

				setItem({ ...foundItem, price: Number(foundItem.price) });
			} catch (error) {
				console.error("Failed fetching:", error);
			}
		};
		fetchProducts();
	}, [id]);

	if (!item) return <div>Loading...</div>;

	return (
		<div className="max-w-5xl mx-auto px-4 py-8 md:py-16">
			<Link
				to="/items"
				className="inline-flex items-center gap-2 mb-10 text-sm font-semibold uppercase tracking-widest text-tertiary hover:text-primary transition-colors"
			>
				◀︎　Back to Menu
			</Link>
			<div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
				<div className="w-full md:w-1/2">
					<img
						src={item.photo}
						alt={item.name}
						className="w-full aspect-square object-cover rounded-3xl shadow-glow "
					/>
				</div>
				<div className="w-full md:w-1/2 flex flex-col items-start">
					<h1 className="font-display text-4xl md:text-5xl text-on-background leading-tight mb-4">
						{item.name}
					</h1>

					<p className="font-body text-2xl md:text-3xl font-semibold text-primary mb-12">
						${item.price.toFixed(2)}
					</p>

					<p className="font-body text-lg text-on-surface-variant leading-relaxed mb-12">
						{item.desc}
					</p>

					<button
						onClick={() => addToCart(item)}
						className="inline-flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 bg-primary text-white font-body font-semibold rounded-full transition-all hover:scale-[1.02] hover:shadow-glow active:scale-95"
					>
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
							/>
						</svg>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;

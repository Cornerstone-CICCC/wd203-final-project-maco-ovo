import { useParams } from "react-router";
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
		<div className="p-12 md:flex md:flex-row">
			<img src={item.photo} alt={item.name} className="w-64 mb-4" />
			<div className="flex flex-col">
				<h1 className="text-3xl mb-4">{item.name}</h1>
				<p className="text-xl mb-4">${item.price.toFixed(2)}</p>
				<p className="text-gray-600 mt-6">{item.desc}</p>

				<button
					onClick={() => addToCart(item)}
					className="mt-4 px-6 py-2 bg-amber-800 text-white rounded hover:bg-amber-900 w-fit"
				>
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default ItemDetail;

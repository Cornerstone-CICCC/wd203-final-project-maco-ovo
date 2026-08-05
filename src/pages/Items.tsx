import { useEffect, useState } from "react";
import { type Product, type RawProduct } from "../types/productTypes";

const Items = () => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch("/products.json");
				const data = await response.json();

				const formattedProducts = data.products.map((item: RawProduct) => ({
					...item,
					price: Number(item.price),
				}));

				setProducts(formattedProducts);
				console.log("products:", formattedProducts);
			} catch (error) {
				console.error("Failed fetching:", error);
			}
		};
		fetchProducts();
	}, []);

	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-4">Menu</h1>

			<ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{products.map((p) => (
					<li key={p.id} className="border p-4 rounded shadow">
						<img
							src={p.photo}
							alt={p.name}
							className="w-full h-48 object-cover mb-2 rounded"
						/>
						<h2 className="text-xl font-semibold">{p.name}</h2>
						<p className="text-gray-700">${p.price.toFixed(2)}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Items;

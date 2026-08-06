import { useParams } from "react-router";
import { type Product, type RawProduct } from "../types/productTypes";
import { useEffect, useState } from "react";

const ItemDetail = () => {
	const { id } = useParams();
	const [item, setItem] = useState<Product | null>(null);

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
			<div className="flex flex-col gap-3">
				<h1 className="text-3xl mb-4">{item.name}</h1>
				<p className="text-xl">${item.price.toFixed(2)}</p>
				<p className="text-gray-600">{item.desc}</p>
			</div>
		</div>
	);
};

export default ItemDetail;

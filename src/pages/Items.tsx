import { useEffect, useState } from "react";
import { type Product, type RawProduct } from "../types/productTypes";

const Items = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 12;

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

	// Pagination
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;

	const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

	const totalPages = Math.ceil(products.length / itemsPerPage);

	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-4">Menu</h1>

			<div className="p-4">
				<button
					onClick={() => setCurrentPage(currentPage - 1)}
					disabled={currentPage === 1}
					className="px-4 p-2 bg-gray-200 rounded disabled:opacity-50"
				>
					◀︎
				</button>
				<span className="p-2">
					Page {currentPage} of {totalPages}
				</span>
				<button
					onClick={() => setCurrentPage(currentPage + 1)}
					disabled={currentPage === totalPages}
					className="px-4 p-2 bg-gray-200 rounded disabled:opacity-50"
				>
					▶
				</button>
			</div>

			<ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{currentItems.map((p) => (
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

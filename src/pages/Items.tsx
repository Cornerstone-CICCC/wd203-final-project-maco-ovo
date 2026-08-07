import { useEffect, useState } from "react";
import { type Product, type RawProduct } from "../types/productTypes";
import { Link } from "react-router";
import { useFavorite } from "../context/FavoriteContext";

const Items = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [filterFavorites, setFilterFavorites] = useState(false);
	const itemsPerPage = 12;

	const { favorites, isFavorite, toggleFavorite } = useFavorite();

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
				// console.log("products:", formattedProducts);
			} catch (error) {
				console.error("Failed fetching:", error);
			}
		};
		fetchProducts();
	}, []);

	// Favorite Filtering
	const displayedProducts = filterFavorites
		? products.filter((p) => isFavorite(p.id))
		: products;

	// Pagination
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = displayedProducts.slice(
		indexOfFirstItem,
		indexOfLastItem,
	);
	const totalPages = Math.ceil(displayedProducts.length / itemsPerPage);

	return (
		<div className="py-8 md:py-12">
			<h1 className=" text-center mb-12 font-display text-4xl md:text-5xl text-on-background mb-4">
				Our Menu
			</h1>
			{/* Filter */}
			<div className="inilne-flex p-1 bg-surface-container rounded-full font-body text-sm">
				<button
					onClick={() => {
						setFilterFavorites(false);
						setCurrentPage(1);
					}}
					className={`px-6 py-2 rounded-full transition-all ${
						!filterFavorites
							? "bg-primary text-white shadow-sm"
							: "text-on-surface-variant hover:text-on-surface"
					}`}
				>
					All ( {products.length} )
				</button>
				<button
					onClick={() => {
						setFilterFavorites(true);
						setCurrentPage(1);
					}}
					className={`px-6 py-2 rounded-full transition-all flex items-center gap-2 ${
						filterFavorites
							? "bg-primary text-white shadow-sm"
							: "text-on-surface-variant hover:text-on-surface"
					}`}
				>
					Favorites ({favorites.length})
				</button>
			</div>

			{/* Pagination */}
			<div className="flex items-center justify-center gap-6 mb-10 font-body">
				<button
					onClick={() => setCurrentPage(currentPage - 1)}
					disabled={currentPage === 1}
					className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-high text-on-surface hover:bg-primary hover:text-white disabled:opacity-30 disabled:hover:bg-surface-container-high disabled:hover:text-on-surface disabled:cursor-not-allowed transition-colors"
					aria-label="Previous page"
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
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</button>

				<span className="text-sm font-semibold tracking-widest text-tertiary">
					PAGE　{currentPage}　of　{totalPages}
				</span>

				<button
					onClick={() => setCurrentPage(currentPage + 1)}
					disabled={currentPage === totalPages}
					className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-high text-on-surface hover:bg-primary hover:text-white disabled:opacity-30 disabled:hover:bg-surface-container-high disabled:hover:text-on-surface disabled:cursor-not-allowed transition-colors"
					aria-label="Next page"
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
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</button>
			</div>

			{/* Items */}
			<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
				{currentItems.map((p) => {
					const favoriteStatus = isFavorite(p.id);
					return (
						<li key={p.id} className="group relative">
							<button
								onClick={(e) => {
									e.preventDefault();
									toggleFavorite(p);
								}}
								className="absolute top-3 right-3 z-20 p-2.5 rounded-full bg-white/80 backdrop-blur-md shadow-md text-error transition-transform hover:scale-110 active:scale-95"
								aria-label="Toggle favorite"
							>
								<svg
									className="w-5 h-5"
									fill={favoriteStatus ? "currentColor" : "none"}
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
									/>
								</svg>
							</button>
							<Link
								to={`/items/${p.id}`}
								className="block bg-surface-container-lowest rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-glow"
							>
								<div className="overflow-hidden aspect-4/3">
									<img
										src={p.photo}
										alt={p.name}
										className="w-full h-full object-cover transition-transform duration-500 "
									/>
								</div>

								<div className="p-5 flex flex-col gap-1">
									<h2 className="font-display text-xl text-on-surface leading-snug">
										{p.name}
									</h2>
									<p className="font-body font-semibold text-primary">
										${p.price.toFixed(2)}
									</p>
								</div>
							</Link>
						</li>
					);
				})}
			</ul>

			{/* Pagination (prev / next) */}
			{totalPages > 1 && (
				<div className="flex items-center justify-center gap-6 mt-16 font-body">
					<button
						onClick={() => setCurrentPage(currentPage - 1)}
						disabled={currentPage === 1}
						className="text-sm font-semibold tracking-wider text-on-surface-variant hover:text-primary disabled:opacity-30 transition-colors"
					>
						← PREV
					</button>
					<button
						onClick={() => setCurrentPage(currentPage + 1)}
						disabled={currentPage === totalPages}
						className="text-sm font-semibold tracking-wider text-on-surface-variant hover:text-primary disabled:opacity-30 transition-colors"
					>
						NEXT →
					</button>
				</div>
			)}
		</div>
	);
};

export default Items;

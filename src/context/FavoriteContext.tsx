import {
	useState,
	createContext,
	useContext,
	type ReactNode,
	useEffect,
} from "react";
import { type Product } from "../types/productTypes";

type FavoriteContextType = {
	favorites: Product[];
	isFavorite: (id: number) => boolean;
	toggleFavorite: (product: Product) => void;
};

const FavoriteContext = createContext<FavoriteContextType | undefined>(
	undefined,
);

export function FavoriteProvider({ children }: { children: ReactNode }) {
	const [favorites, setFavorites] = useState<Product[]>(() => {
		const savedFavorites = localStorage.getItem("cafe_favorites");
		return savedFavorites ? JSON.parse(savedFavorites) : [];
	});

	useEffect(() => {
		localStorage.setItem("cafe_favorites", JSON.stringify(favorites));
	}, [favorites]);

	const isFavorite = (id: number) => {
		return favorites.some((item) => item.id === id);
	};

	const toggleFavorite = (product: Product) => {
		setFavorites((prev) =>{
      const exists = prev.some((item)=> item.id === product.id);

      if (exists){
        return prev.filter((item)=> item.id !== product.id)
      } else {
        return [...prev, product]
      }
    })
	};

	return (
		<FavoriteContext.Provider
			value={{
				favorites,
				isFavorite,
				toggleFavorite,
			}}
		>
			{children}
		</FavoriteContext.Provider>
	);
}

export const useFavorite = () => {
	const context = useContext(FavoriteContext);
	if (!context) {
		throw new Error("useFavorite must be used within a FavoriteProvider");
	}
	return context;
};

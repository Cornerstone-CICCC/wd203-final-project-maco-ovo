import {
	useState,
	createContext,
	useContext,
	type ReactNode,
	useEffect,
} from "react";
import { type CartItem, type Product } from "../types/productTypes";

type CartContextType = {
	cart: CartItem[];
	addToCart: (product: Product) => void;
	removeFromCart: (id: number) => void;
	clearCart: () => void;
	taxAmount: number;
	totalPrice: number;
	finalTotal: number;
	isShown: boolean;
	toggleSidebar: () => void;
	updateQuantity: (id: number, quantity: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
	const [cart, setCart] = useState<CartItem[]>(() => {
		const savedCart = localStorage.getItem("cafe_cart");
		return savedCart ? JSON.parse(savedCart) : [];
	});

	useEffect(() => {
		localStorage.setItem("cafe_cart", JSON.stringify(cart));
	}, [cart]);

	const [isShown, setIsShown] = useState(false);
	const toggleSidebar = () => {
		setIsShown((prev) => !prev);
	};

	// Add
	const addToCart = (product: Product) => {
		setCart((prev) => {
			const addedItem = prev.find((item) => item.id === product.id);
			if (addedItem) {
				return prev.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item,
				);
			}
			return [...prev, { ...product, quantity: 1 }];
		});
	};

	// remove
	const removeFromCart = (id: number) => {
		setCart((prev) => prev.filter((item) => item.id !== id));
	};

	// clear
	const clearCart = () => {
		setCart([]);
	};

	// total / tax
	const totalPrice = cart.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0,
	);
	const taxRate = 0.085;
	const taxAmount = totalPrice * taxRate;
	const finalTotal = totalPrice + taxAmount;

	// update quantity
	const updateQuantity = (id: number, quantity: number) => {
		if (quantity < 1) return;
		setCart((prev) =>
			prev.map((item) => (item.id === id ? { ...item, quantity } : item)),
		);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				clearCart,
				totalPrice,
				taxAmount,
				finalTotal,
				isShown,
				toggleSidebar,
				updateQuantity,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
export const useCart = () => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
};

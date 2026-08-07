import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./layout/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Items from "./pages/Items";
import ItemDetail from "./pages/ItemDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./context/CartContext";
import { FavoriteProvider } from "./context/FavoriteContext";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <NotFound />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "items", element: <Items /> },
			{ path: "items/:id", element: <ItemDetail /> },
			{ path: "cart", element: <Cart /> },
			{ path: "checkout", element: <Checkout /> },
		],
	},
]);

createRoot(document.getElementById("root")!).render(
	<CartProvider>
		<FavoriteProvider>
			<RouterProvider router={router} />
		</FavoriteProvider>
	</CartProvider>,
);

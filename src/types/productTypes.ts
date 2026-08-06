export type RawProduct = {
	id: number;
	name: string;
	desc: string;
	photo: string;
	price: string;
};

export type Product = {
	id: number;
	name: string;
	desc: string;
	photo: string;
	price: number;
};

export type CartItem = Product & {
	quantity: number;
};

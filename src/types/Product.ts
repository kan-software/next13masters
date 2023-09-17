export type Product = {
	id: string;
	name: string;
	price: number;
	category: string;
	description: string;
	image: {
		src: string;
		alt: string;
	};
};

export const products: Product[] = [
	{
		id: "1",
		name: "Jacket",
		category: "Clothing",
		price: 100,
		image: {
			src: "/images/jacket.png",
			alt: "Jacket",
		},
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		id: "2",
		name: "Mug",
		category: "Accessories",
		price: 50,
		image: {
			src: "/images/mug.png",
			alt: "Mug",
		},
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},

	{
		id: "3",
		name: "Snapback",
		category: "Clothing",
		price: 60,
		image: {
			src: "/images/snapback.png",
			alt: "Snapback",
		},
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},

	{
		id: "4",
		name: "T-shirt",
		category: "Clothing",
		price: 150,
		image: {
			src: "/images/t-shirt.png",
			alt: "T-shirt",
		},
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
];

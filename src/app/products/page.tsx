import { type Product } from "@/types/Product";
import { ProductsList } from "@/ui/organisms/ProductsList";

const products: Product[] = [
	{
		id: "1",
		name: "Jacket",
		category: "Clothing",
		price: 100,
		image: {
			src: "/images/jacket.png",
			alt: "Jacket",
		},
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
	},
];

export default function Products() {
	return (
		<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
			<ProductsList products={products} />
		</section>
	);
}

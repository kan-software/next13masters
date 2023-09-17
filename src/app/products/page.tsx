import { getProducts } from "@/api/products";
import { ProductsList } from "@/ui/organisms/ProductsList";

export default async function Products() {
	const products = await getProducts();

	return (
		<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
			<ProductsList products={products} />
		</section>
	);
}

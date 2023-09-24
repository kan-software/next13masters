import { ProductsList } from "@/ui/organisms/ProductsList";
import { searchProducts } from "@/api/products";
import { ProductsSection } from "@/ui/atoms/ProductsSection";
import { SearchTextResult } from "@/ui/atoms/SearchTextResult";

export default async function SearchPage({
	searchParams: { query },
}: {
	searchParams: { query: string };
}) {
	const products = await searchProducts(query);

	return (
		<>
			<SearchTextResult productsCount={products.length} query={query} />
			<ProductsSection>
				<ProductsList products={products} />
			</ProductsSection>
		</>
	);
}

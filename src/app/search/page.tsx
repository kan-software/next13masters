import { ProductsList } from "@/ui/organisms/ProductsList";
import { searchProducts } from "@/api/products";
import { ProductsSection } from "@/ui/atoms/ProductsSection";
import { PageHeading } from "@/ui/atoms/PageHeading";

export default async function SearchPage({
	searchParams: { query },
}: {
	searchParams: { query: string };
}) {
	const products = await searchProducts(query);

	return (
		<>
			<PageHeading>
				Found {products.length} products for phrase: {query}
			</PageHeading>
			<ProductsSection>
				<ProductsList products={products} />
			</ProductsSection>
		</>
	);
}

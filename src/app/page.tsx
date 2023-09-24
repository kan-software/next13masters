import { getCollectionsList } from "@/api/collections";
import { getProductsList } from "@/api/products";
import { ProductsSection } from "@/ui/atoms/ProductsSection";
import { CollectionsList } from "@/ui/organisms/CollectionsList";
import { ProductsList } from "@/ui/organisms/ProductsList";

export default async function Home() {
	const { products } = await getProductsList({ pageNo: 1 });
	const collections = await getCollectionsList();
	return (
		<>
			<CollectionsList collections={collections} />
			<ProductsSection>
				<ProductsList products={products} />
			</ProductsSection>
		</>
	);
}

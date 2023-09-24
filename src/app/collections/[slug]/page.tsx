import { notFound } from "next/navigation";
import { ProductsList } from "@/ui/organisms/ProductsList";
import { getProductsListByCollection } from "@/api/products";
import { ProductsSection } from "@/ui/atoms/ProductsSection";
import { PageHeading } from "@/ui/atoms/PageHeading";

export default async function CollectionsPage({ params }: { params: { slug: string } }) {
	const products = await getProductsListByCollection(params.slug);

	if (products.length === 0) {
		return notFound();
	}

	const [collection] = products[0].collections;

	return (
		<>
			<PageHeading>
				<h1 className="text-3xl font-bold tracking-tight text-slate-900">{collection.name}</h1>
				<p className="mt-4 max-w-2xl text-base text-slate-700">{collection.description}</p>
			</PageHeading>
			<ProductsSection>
				<ProductsList products={products} />
			</ProductsSection>
		</>
	);
}

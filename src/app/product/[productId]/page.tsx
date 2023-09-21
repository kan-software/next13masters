import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/ui/molecules/ProductDetail";
import { executeGraphql } from "@/api/client";
import { ProductGetByIdDocument } from "@/gql/graphql";

type ProductPageProps = {
	params: { productId: string };
};

export const generateMetadata = async ({ params }: ProductPageProps): Promise<Metadata> => {
	const { product } = await executeGraphql(ProductGetByIdDocument, { id: params.productId });
	return {
		title: product ? product.name : "Product not found",
	};
};

export default async function ProductPage({ params }: ProductPageProps) {
	const { product } = await executeGraphql(ProductGetByIdDocument, { id: params.productId });

	if (!product) {
		return notFound();
	}

	return (
		<section className="mx-auto grid max-w-7xl p-8">
			<ProductDetail product={product} />
		</section>
	);
}

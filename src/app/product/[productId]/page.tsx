import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/ui/molecules/ProductDetail";
import { getProductById, getProductsList } from "@/api/products";
import { RelatedProducts } from "@/ui/organisms/RelatedProducts";

type ProductPageProps = {
	params: { productId: string };
};

export const generateMetadata = async ({ params }: ProductPageProps): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: product ? product.name : "Product not found",
	};
};

export default async function ProductPage({ params }: ProductPageProps) {
	const product = await getProductById(params.productId);
	const { products: relatedProducts } = await getProductsList({ pageNo: 1 });

	if (!product) {
		return notFound();
	}

	return (
		<section className="mx-auto grid max-w-7xl p-8">
			<ProductDetail product={product} />
			<RelatedProducts products={relatedProducts} />
		</section>
	);
}

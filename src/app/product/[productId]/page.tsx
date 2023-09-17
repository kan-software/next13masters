import { type Metadata } from "next";
import { getProduct } from "@/api/products";
import { ProductDetail } from "@/ui/molecules/ProductDetail";

type ProductPageProps = {
	params: { productId: string };
};

export const generateMetadata = async ({ params }: ProductPageProps): Promise<Metadata> => {
	const { productId } = params;
	const product = await getProduct(productId);
	return {
		title: product.title,
	};
};

export default async function ProductPage({ params }: ProductPageProps) {
	const { productId } = params;
	const product = await getProduct(productId);
	return (
		<section className="mx-auto grid max-w-7xl p-8">
			<ProductDetail product={product} />
		</section>
	);
}

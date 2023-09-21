import { ProductItemImage } from "../atoms/ProductItemImage";
import { ProductDetailDescription } from "../atoms/ProductDetailDescription";
import { type ProductDetailFragment } from "@/gql/graphql";

export type ProductDetailProps = {
	product: ProductDetailFragment;
};

export function ProductDetail({ product }: ProductDetailProps) {
	const [image] = product.images;

	return (
		<article>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<ProductItemImage src={image.url} alt={product.name} />
				<div className="px-6">
					<ProductDetailDescription product={product} />
				</div>
			</div>
		</article>
	);
}

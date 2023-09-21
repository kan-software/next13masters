import Link from "next/link";
import { ProductItemImage } from "@/ui/atoms/ProductItemImage";
import { ProductItemDescription } from "@/ui/atoms/ProductItemDescription";
import { type ProductListItemFragment } from "@/gql/graphql";

export type ProductItemProps = {
	product: ProductListItemFragment;
};

export function ProductItem({ product }: ProductItemProps) {
	const [image] = product.images;
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<ProductItemImage src={image.url} alt={product.name} />
				<div className="mt-2">
					<ProductItemDescription product={product} />
				</div>
			</Link>
		</li>
	);
}

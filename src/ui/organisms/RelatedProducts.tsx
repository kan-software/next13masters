import { ProductsList } from "./ProductsList";
import { type ProductListItemFragment } from "@/gql/graphql";

export function RelatedProducts({ products }: { products: ProductListItemFragment[] }) {
	return (
		<aside data-testid="related-products">
			<div className="py-16">
				<h2 className="py-8 text-xl font-semibold leading-7">Similar products</h2>
				<ProductsList products={products} />
			</div>
		</aside>
	);
}

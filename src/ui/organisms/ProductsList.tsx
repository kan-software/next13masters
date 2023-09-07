import { type Product } from "@/types/Product";
import { ProductItem } from "@/ui/molecules/ProductItem";

export type ProductsListProps = { products: Product[] };

export function ProductsList({ products }: ProductsListProps) {
	return (
		<ul
			data-testid="products-list"
			className="mb-8 mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
		>
			{products.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</ul>
	);
}

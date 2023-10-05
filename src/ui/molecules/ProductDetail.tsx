import { ProductItemImage } from "../atoms/ProductItemImage";
import { ProductDetailDescription } from "../atoms/ProductDetailDescription";
import { AddToCardButton } from "../atoms/AddToCartButton";
import { type ProductDetailFragment } from "@/gql/graphql";
import { addProductToCart, getOrCreateCart } from "@/api/cart";

export type ProductDetailProps = {
	product: ProductDetailFragment;
	productId: string;
};

export function ProductDetail({ product, productId }: ProductDetailProps) {
	const [image] = product.images;

	async function addProductToCartAction() {
		"use server";
		const cart = await getOrCreateCart();
		await addProductToCart(cart.id, productId);
	}

	return (
		<article>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<ProductItemImage src={image.url} alt={product.name} />
				<div className="px-6">
					<ProductDetailDescription product={product} />
					<form action={addProductToCartAction} className="mt-8">
						<AddToCardButton />
					</form>
				</div>
			</div>
		</article>
	);
}

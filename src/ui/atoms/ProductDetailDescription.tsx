import { type ProductDetailFragment } from "@/gql/graphql";
import { formatPrice } from "@/utils";

export type ProductDetailDescriptionProps = {
	product: ProductDetailFragment;
};

export function ProductDetailDescription({ product }: ProductDetailDescriptionProps) {
	return (
		<>
			<h1 className="flex-auto text-3xl font-bold tracking-tight text-slate-900">
				{product.name.trim()}
			</h1>
			<div className="mt-4 flex items-center">
				<div className="font-base small-caps text-lg text-slate-800">
					{formatPrice(product.price)}
				</div>
			</div>
			<div className="mt-4 space-y-6">
				<p className="font-sans text-base text-slate-500">{product.description}</p>
			</div>
		</>
	);
}

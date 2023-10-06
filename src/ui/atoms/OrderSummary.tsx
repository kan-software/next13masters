import { type CartGetByIdQuery } from "@/gql/graphql";
import { formatPrice } from "@/utils";

export function OrderSummary({ cart }: { cart: CartGetByIdQuery["order"] }) {
	const total = cart!.orderItems.reduce((acc, item) => acc + (item.product?.price ?? 0), 0);

	return (
		<div className="rounded-lg bg-gray-50 p-4">
			<h2 className="sr-only">Order summary</h2>
			<div className="-my-4 divide-y divide-gray-200 text-sm">
				<div className="flex items-center justify-between py-4">
					<div>
						<div className="text-slate-900">Order total</div>
						<p className="mt-1 text-sm text-slate-500">
							Shipping and taxes will be calculated at the next step
						</p>
					</div>
					<div className="small-caps font-medium text-slate-900">{formatPrice(total)}</div>
				</div>
			</div>
		</div>
	);
}

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { getCart } from "@/api/cart";

export async function CartNavbarLink() {
	const cart = await getCart();
	const itemsCount = cart?.orderItems.length ?? 0;

	return (
		<Link
			href="/cart"
			className="flex h-full w-16 items-center justify-center border-b-2 border-transparent px-2 text-center text-sm font-medium text-slate-500 hover:border-gray-300 hover:text-slate-700"
		>
			<ShoppingBag className="h-6 w-6 flex-shrink-0" />
			<div className="w-4">
				<span className="ml-2 text-sm font-medium">{itemsCount}</span>
				<span className="sr-only">items in cart, view bag</span>
			</div>
		</Link>
	);
}

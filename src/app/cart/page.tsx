import { redirect } from "next/navigation";
import Link from "next/link";
import { ShoppingList } from "@/ui/organisms/ShoppingList";
import { OrderSummary } from "@/ui/atoms/OrderSummary";
import { CheckoutButton } from "@/ui/atoms/CheckoutButton";
import { getCart } from "@/api/cart";

export default async function CartPage() {
	const cart = await getCart();

	if (!cart) {
		redirect("/");
	}

	return (
		<section className="mx-auto w-full max-w-7xl p-8">
			<h1 className="text-3xl font-bold tracking-tight text-slate-900">Your Shopping Cart</h1>
			<form className="mt-12">
				<ShoppingList cart={cart} />
				<div className="mt-8">
					<OrderSummary cart={cart} />
					<div className="mt-10 grid grid-cols-2">
						<div></div>
						<CheckoutButton />
					</div>
					<div className="mt-4 text-center">
						<Link
							href="/products"
							className="text-sm font-medium text-blue-600 hover:text-blue-500"
						>
							Continue Shopping
						</Link>
					</div>
				</div>
			</form>
		</section>
	);
}

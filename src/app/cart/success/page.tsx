import Stripe from "stripe";
import Link from "next/link";
import { PageHeading } from "@/ui/atoms/PageHeading";

export default async function CartSuccess({
	searchParams,
}: {
	searchParams: { session_id: string };
}) {
	if (!process.env.STRIPE_SECRET_KEY) {
		return null;
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-08-16",
		typescript: true,
	});

	const stripeCheckoutSession = await stripe.checkout.sessions.retrieve(searchParams.session_id);

	return (
		<PageHeading>
			<div className="text-center">
				<h1>Payment status: {stripeCheckoutSession.payment_status}</h1>
				<div className="mt-4">
					<Link href="/products" className="text-sm font-medium text-blue-600 hover:text-blue-500">
						Continue Shopping
					</Link>
				</div>
			</div>
		</PageHeading>
	);
}

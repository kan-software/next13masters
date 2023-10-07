"use server";

import { revalidateTag } from "next/cache";
import Stripe from "stripe";
import { redirect } from "next/navigation";
import { changeItemQuantity, getCart, removeItem } from "@/api/cart";

export async function changeItemQuantityAction(itemId: string, quantity: number) {
	return changeItemQuantity(itemId, quantity);
}

export async function removeItemAction(itemId: string) {
	await removeItem(itemId);
	revalidateTag("cart");
}

export async function handleStripePaymentAction() {
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing STRIPE_SECRET_KEY env variable");
	}

	if (!process.env.APP_URL) {
		throw new Error("Missing APP_URL env variable");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-08-16",
		typescript: true,
	});

	const cart = await getCart();
	if (!cart) {
		return;
	}

	const session = await stripe.checkout.sessions.create({
		metadata: {
			cartId: cart.id,
		},
		line_items: cart.orderItems
			.filter((item) => item.product)
			.map((item) => ({
				price_data: {
					currency: "usd",
					product_data: {
						name: item.product!.name,
						images: item.product!.images.map((i) => i.url),
					},
					unit_amount: item.product!.price,
				},
				quantity: item.quantity,
			})),
		mode: "payment",
		success_url: `${process.env.APP_URL}/cart/success?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `${process.env.APP_URL}/cart/canceled`,
	});

	if (session.url) {
		redirect(session.url);
	}
}

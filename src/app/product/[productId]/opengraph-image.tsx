/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/server";
import { getProductById } from "@/api/products";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Product item";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({ params: { productId } }: { params: { productId: string } }) {
	const product = await getProductById(productId);

	return new ImageResponse(
		(
			<div
				style={{
					background: "white",
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<img src={product?.images[0].url} alt={product?.name} width="512" height="512" />
			</div>
		),
		size,
	);
}

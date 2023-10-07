import Link from "next/link";
import { PageHeading } from "@/ui/atoms/PageHeading";

export default function CartCanceled() {
	return (
		<PageHeading>
			<div className="text-center">
				<h1>Payment canceled</h1>
				<div className="mt-4">
					<Link href="/products" className="text-sm font-medium text-blue-600 hover:text-blue-500">
						Continue Shopping
					</Link>
				</div>
			</div>
		</PageHeading>
	);
}

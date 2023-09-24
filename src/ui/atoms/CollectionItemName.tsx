import { type Route } from "next";
import Link from "next/link";

export function CollectionItemName({ name, slug }: { name: string; slug: string }) {
	return (
		<h3 className="mt-2 font-bold text-slate-700">
			<Link href={`/collections/${slug}` as Route}>
				<span className="absolute inset-0"></span>
				{name}
			</Link>
		</h3>
	);
}

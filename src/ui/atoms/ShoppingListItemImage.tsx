import Image from "next/image";

export function ShoppingListItemImage({ src, alt }: { src: string; alt: string }) {
	return (
		<div className="flex-shrink-0 rounded-md border bg-slate-50">
			<Image
				src={src}
				alt={alt}
				width={200}
				height={200}
				className="h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32"
			/>
		</div>
	);
}

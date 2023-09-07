import Image from "next/image";

export type ProductItemImageProps = {
	src: string;
	alt: string;
};

export function ProductItemImage({ src, alt }: ProductItemImageProps) {
	return (
		<div className="rounded-md border bg-slate-50 hover:bg-slate-100">
			<Image
				width={320}
				height={320}
				src={src}
				alt={alt}
				className="w-full object-contain object-center p-4 transition-transform hover:scale-105"
			/>
		</div>
	);
}

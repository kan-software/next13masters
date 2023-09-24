import { type PropsWithChildren } from "react";

export function ProductsSection({ children }: PropsWithChildren) {
	return (
		<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
			{children}
		</section>
	);
}

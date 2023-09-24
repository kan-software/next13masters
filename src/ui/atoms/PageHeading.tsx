import { type PropsWithChildren } from "react";

export function PageHeading({ children }: PropsWithChildren) {
	return (
		<div className="bg-gray-100">
			<div className="mx-auto max-w-7xl px-8">
				<div className="mx-auto py-8">{children}</div>
			</div>
		</div>
	);
}

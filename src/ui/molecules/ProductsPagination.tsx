import { ActiveLink, type ActiveLinkProps } from "../atoms/ActiveLink";

export type ProductsPaginationProps = {
	numberOfPages: number;
};

export function ProductsPagination({ numberOfPages }: ProductsPaginationProps) {
	const pageNumbers = [...Array(numberOfPages).keys()].map((index) => index + 1);

	return (
		<nav
			className="mt-auto flex items-center justify-center border-t border-slate-200 px-4"
			role="navigation"
			aria-label="Pagination Navigation"
		>
			<ul className="-mt-px flex">
				{pageNumbers.map((pageNo) => (
					<li key={pageNo}>
						<ActiveLink
							href={`/products/${pageNo.toString()}` as ActiveLinkProps["href"]}
							className="inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium"
							activeClassName="border-blue-500 text-blue-600"
						>
							{pageNo}
						</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
}

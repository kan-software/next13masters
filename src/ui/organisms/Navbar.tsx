import { type PropsWithChildren } from "react";
import { ActiveLink, type ActiveLinkProps } from "../atoms/ActiveLink";

function NavbarItem({ children }: PropsWithChildren) {
	return <li className="first:pl-4 last:pr-4 lg:px-0">{children}</li>;
}

export type NavbarActiveLinkProps = PropsWithChildren<{ href: ActiveLinkProps["href"] }>;

function NavbarActiveLink({ children, href }: NavbarActiveLinkProps) {
	return (
		<ActiveLink
			className="flex h-full w-full min-w-[3rem] items-center justify-center border-b-2 border-transparent px-1 pt-1 text-center text-sm font-medium text-slate-500 hover:border-gray-300 hover:text-slate-700"
			activeClassName="border-blue-500"
			href={href}
		>
			{children}
		</ActiveLink>
	);
}

export function Navbar({ children }: PropsWithChildren) {
	return (
		<header className="sticky top-0 z-20 border-b bg-white bg-opacity-60 backdrop-blur-lg">
			<div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
				<div className="flex flex-col justify-between gap-y-4 pb-4 lg:flex-row lg:items-center lg:pb-0">
					<nav className="scrolling-touch scroll-shadows -mx-2 flex overflow-x-scroll lg:mx-0 lg:h-16 lg:overflow-x-auto">
						<div className="hidden flex-shrink-0 items-center lg:flex" />
						<ul className="flex h-16 max-w-full space-x-8 whitespace-nowrap lg:px-8">{children}</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}

Navbar.Item = NavbarItem;
Navbar.ActiveLink = NavbarActiveLink;

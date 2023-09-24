"use client";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export type ActiveLinkProps = LinkProps<string> & { activeClassName: string; exact?: boolean };
export function ActiveLink({ activeClassName, exact = true, ...props }: ActiveLinkProps) {
	const pathname = usePathname();
	const href = typeof props.href === "string" ? props.href : props.href.pathname;
	const isActive = href && (exact ? pathname === href : pathname.startsWith(href));

	return (
		<Link
			{...props}
			{...(isActive && { "aria-current": "page" })}
			className={twMerge(props.className, isActive && activeClassName)}
		/>
	);
}

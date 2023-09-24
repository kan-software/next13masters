"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const debounce = <T,>(func: (...args: T[]) => void, wait: number) => {
	let timeout: ReturnType<typeof setTimeout>;

	return (...args: T[]) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => func(...args), wait);
	};
};

export function SearchInput() {
	const router = useRouter();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const handleSearch = useCallback(
		debounce((e: React.ChangeEvent<HTMLInputElement>) => {
			if (e.target.value) {
				router.push(`/search?query=${e.target.value}`);
			}
		}, 500),
		[],
	);

	return (
		<div className="w-full max-w-lg lg:max-w-xs">
			<label htmlFor="search" className="sr-only">
				Search
			</label>
			<div className="relative">
				<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<Search className="h-5 w-5 text-slate-300" />
				</div>
				<input
					className="w-full rounded-md border-0 bg-slate-50 py-2 pl-11 pr-4 text-sm text-slate-800 ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-400"
					placeholder="Search"
					type="search"
					name="search"
					onChange={handleSearch}
				/>
			</div>
		</div>
	);
}

export function SearchTextResult({
	productsCount,
	query,
}: {
	productsCount: number;
	query: string;
}) {
	return (
		<div className="bg-gray-100">
			<div className="mx-auto max-w-7xl px-8">
				<div className="mx-auto py-8">
					Found {productsCount} products for phrase: {query}
				</div>
			</div>
		</div>
	);
}

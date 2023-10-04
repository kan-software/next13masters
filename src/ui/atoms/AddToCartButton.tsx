export function AddToCardButton() {
	return (
		<button
			type="submit"
			className="inline-flex h-14 w-full items-center justify-center rounded-md from-[#1e4b65] from-20% via-[#010315] to-[#0b237d] to-80% px-6 text-base font-medium leading-6 text-white shadow transition duration-150 ease-in-out enabled:bg-gradient-to-r hover:enabled:brightness-125 disabled:cursor-wait disabled:bg-gray-300"
			data-testid="add-to-cart-button"
		>
			Add to cart
		</button>
	);
}

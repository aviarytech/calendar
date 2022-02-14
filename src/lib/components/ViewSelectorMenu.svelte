<script>
	import { viewSelectorOpen } from '$lib/stores/ui';
</script>

<div
	class="focus:outline-none absolute right-0 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
	class:hidden={!$viewSelectorOpen}
	role="menu"
	aria-orientation="vertical"
	aria-labelledby="menu-button"
	tabindex="-1"
>
	<div class="py-1" role="none">
		<!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
		<a
			href="/next"
			class="text-gray-700 block px-4 py-2 text-sm"
			role="menuitem"
			tabindex="-1"
			id="menu-item-3">Up Next</a
		>
		<a
			href="/daily"
			class="text-gray-700 block px-4 py-2 text-sm"
			role="menuitem"
			tabindex="-1"
			id="menu-item-0">Daily</a
		>
		<a
			href="/weekly"
			class="text-gray-700 block px-4 py-2 text-sm"
			role="menuitem"
			tabindex="-1"
			id="menu-item-1">Weekly</a
		>
		<a
			href="/monthly"
			class="text-gray-700 block px-4 py-2 text-sm"
			role="menuitem"
			tabindex="-1"
			id="menu-item-2">Monthly</a
		>
		<a
			href="/yearly"
			class="text-gray-700 block px-4 py-2 text-sm"
			role="menuitem"
			tabindex="-1"
			id="menu-item-3">Yearly</a
		>
	</div>
</div>

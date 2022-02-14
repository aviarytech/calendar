<script>
	import { selectedView, viewSelectorOpen } from '$lib/stores/ui';
</script>

<button
	type="button"
	class="flex items-center flex-row-reverse justify-between capitalize rounded-md border w-28 border-gray-300 bg-white py-2 pl-3 pr-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
	id="menu-button"
	aria-expanded="false"
	aria-haspopup="true"
	on:click={() => viewSelectorOpen.update((v) => !v)}
>
	<!-- Heroicon name: solid/chevron-down -->
	<svg
		class="ml-2 h-5 w-5 text-gray-400"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		fill="currentColor"
		aria-hidden="true"
	>
		<path
			fill-rule="evenodd"
			d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
			clip-rule="evenodd"
		/>
	</svg>
	{$selectedView === 'next' ? 'Up Next' : $selectedView ?? ''}
</button>

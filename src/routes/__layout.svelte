<script lang="ts">
	import { page } from '$app/stores';

	import Sidebar from '$lib/components/Sidebar.svelte';
	import { selectedView, viewSelectorOpen } from '$lib/stores/ui';

	import '$lib/styles/tailwind-output.css';
	import { onMount } from 'svelte';

	let pageLog: string = $page.url.pathname;

	$: if (pageLog !== $page.url.pathname) {
		console.log('go ', $page.url.pathname);
		viewSelectorOpen.set(false);
		pageLog = $page.url.pathname;
		selectedView.set($page.url.pathname.slice(1));
	}

	onMount(() => {
		viewSelectorOpen.set(false);
		selectedView.set($page.url.pathname.slice(1));
	});
</script>

<div class="">
	<slot />
</div>

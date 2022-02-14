<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';

	import '$lib/styles/tailwind-output.css';
</script>

<Sidebar />
<div class="ml-[295px] wrap m-5 overflow-clip">
	<slot />
</div>

<script lang="ts">
	import Portal from '../src/lib/Portal.svelte';

	let target = $state<HTMLDivElement | null>(null);

	$effect(() => {
		target = document.querySelector('#target');
	});
</script>

{#if target}
	<Portal {target}>
		<div id="renderedInTargetElement"></div>
	</Portal>
{/if}

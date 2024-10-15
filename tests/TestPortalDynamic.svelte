<script lang="ts">
	import Portal from '../src/lib/Portal.svelte';

	let target = $state<string>('body');
</script>

<button onclick={() => (target = '#target')}>Replace target</button>

<Portal {target}>
	<div id="renderedInTargetElement"></div>
</Portal>

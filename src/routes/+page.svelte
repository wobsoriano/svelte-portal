<script lang="ts">
	import { Portal } from '$lib/index.js';
	import Count from '../components/Count.svelte';

	let target = $state('#target');

	// $effect(() => {
	// 	target = document.querySelector('#target');

	// 	setTimeout(() => {
	// 	  target = document.querySelector('#other');
	// 	}, 3000)
	// });

	let open = $state(false);
</script>

<button onclick={() => (open = true)}>Open Modal</button>

{#if target}
	<Portal {target}>
		<Count />
	</Portal>
{/if}

<Portal target="body">
	{#if open}
		<div class="modal">
			<p>Hello from the modal!</p>
			<button onclick={() => (open = false)}>Close</button>
		</div>
	{/if}
</Portal>

<style>
	.modal {
		position: fixed;
		z-index: 999;
		top: 20%;
		left: 50%;
		width: 300px;
		margin-left: -150px;
	}
</style>

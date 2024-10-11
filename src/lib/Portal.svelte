<script lang="ts">
	import { mount, unmount, type Snippet } from 'svelte';
	import Wormhole from './Wormhole.svelte';

	const { children, target } = $props<{
		children: Snippet;
		target: string | Element;
	}>();

	$effect(() => {
		let app: Record<string, unknown>;

		let element: Element | null;

		if (!target) {
		    console.warn(`[svelte-portal] Invalid Portal target: ${target}`)
			return;
		}

		if (typeof target === 'string') {
			element = document.querySelector(target);
		} else {
			element = target;
		}

		if (element) {
			app = mount(Wormhole, {
				target: element,
				props: {
					children
				}
			});
		}

		return () => {
			if (app) {
				unmount(app);
			}
		};
	});
</script>

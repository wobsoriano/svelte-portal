<script lang="ts">
	import { mount, unmount, type Snippet } from 'svelte';
	import Wormhole from './Wormhole.svelte';

	const { children, target } = $props<{
		children: Snippet;
		// We accept a null value if the target is not available yet (e.g. SSR)
		target: string | Element | null;
	}>();

	$effect(() => {
		let app: Record<string, unknown>;

		let element: Element | null;

		if (target === null) {
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

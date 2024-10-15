import { describe, it, beforeEach, expect, afterEach } from 'vitest';
import TestPortalSelector from './TestPortalSelector.svelte';
import TestPortalElement from './TestPortalElement.svelte';
import { mount, tick } from 'svelte';

describe('<Portal />', () => {
	let target: HTMLDivElement;

	beforeEach(() => {
		target = document.createElement('div');
		target.id = 'target';
		document.body.appendChild(target);
	});

	afterEach(() => {
		document.body.removeChild(target);
	});

	it('should be rendered in a specific HTML element using selector', async () => {
		mount(TestPortalSelector, { target });

		await tick();

		const renderedInTargetSelector = target.querySelector('#renderedInTargetSelector');

		expect(renderedInTargetSelector).not.toBe(null);
	});

	it('should be rendered in a specific HTML element using element', async () => {
		mount(TestPortalElement, { target });

		await tick();

		const renderedInTargetElement = target.querySelector('#renderedInTargetElement');

		expect(renderedInTargetElement).not.toBe(null);
	});
});

import { describe, it, beforeEach, expect, afterEach } from 'vitest';
import TestPortalSelector from './TestPortalSelector.svelte';
import TestPortalElement from './TestPortalElement.svelte';
import { mount, flushSync } from 'svelte';

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

	it('should be rendered in a specific HTML element using selector', () => {
		mount(TestPortalSelector, { target });

		flushSync();

		const renderedInTargetSelector = target.querySelector('#renderedInTargetSelector');

		expect(renderedInTargetSelector).not.toBe(null);
	});

	it('should be rendered in a specific HTML element using element', () => {
		mount(TestPortalElement, { target });

		flushSync();

		const renderedInTargetElement = target.querySelector('#renderedInTargetElement');

		expect(renderedInTargetElement).not.toBe(null);
	});
});

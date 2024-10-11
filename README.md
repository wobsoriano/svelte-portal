# svelte-portal

A component that lets you render some children into a different part of the DOM.

## Installation

```bash
npm install @jsrob/svelte-portal
```

## Basic Usage

To create a portal, use the `<Portal>` component and pass in a target and children:

```svelte
<script>
import { Portal } from '@jsrob/svelte-portal'
</script>

<Portal target="body">
   <p>This child is placed in the document body.</p>
</Portal>
```

Another example, a modal that is rendered into the body when a button is clicked:

```svelte
<script>
import { Portal } from '@jsrob/svelte-portal'

let open = $state(false)
</script>

<button onclick={() => open = true}>Open Modal</button>

<Portal target="body">
    {#if open}
        <div class="modal">
            <p>Hello from the modal!</p>
            <button onclick={() => open = false}>Close</button>
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
```

You can also pass components as children:

```svelte
<script>
import { Portal } from '@jsrob/svelte-portal'
import Component from './Component.svelte'
</script>

<Portal target="#element">
    <Component />
</Portal>
```

## License

MIT

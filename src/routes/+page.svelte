<script lang="ts">
import { Portal } from '$lib/index.js'
import Count from '../components/Count.svelte'

let target = $state<HTMLDivElement | null>(null)

$effect(() => {
  target = document.querySelector('#target')
})

let open = $state(false)
</script>

<button onclick={() => open = true}>Open Modal</button>

<Portal target={target}>
    <Count />
</Portal>

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

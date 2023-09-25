<script>
	import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { theme } from '$lib/store';
</script>

{#if $theme === 'light'}
	<button on:click={() => ($theme = 'dark')}>
		<Fa icon={faMoon} size="2x" fw />
	</button>
{:else}
	<button on:click={() => ($theme = 'light')}>
		<Fa icon={faSun} size="2x" fw />
	</button>
{/if}

<style>
	button {
		background-color: transparent;
		border: none;
		border-radius: 4px;
		padding: 0.5rem;
		text-transform: uppercase;
		cursor: pointer;
		color: inherit;
	}
</style>

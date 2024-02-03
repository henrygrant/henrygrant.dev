<script>
	import ThemeToggleButton from '../components/ThemeToggleButton.svelte';
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import Map from '../components/Map.svelte';
	import { theme } from '$lib/store';
	import { browser } from '$app/environment';

	export let data;

	onNavigate((navigation) => {
		// @ts-ignore
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			// @ts-ignore
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<meta name="color-scheme" content={$theme == 'system' ? 'light dark' : $theme} />
	<link rel="stylesheet" href={`/theme/${$theme}.css`} />
	<link rel="stylesheet" href={`/app.css`} />
</svelte:head>

<div class="container">
	{#if browser}
		<Map activities={data.activities} />
	{/if}

	<div class="tint" />
	<header>
		<nav>
			<ul>
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a href="/" class={$page.url.pathname === '/' ? 'selected' : undefined}>Home</a>
				</li>
				<li aria-current={$page.url.pathname.startsWith('/photography') ? 'page' : undefined}>
					<a
						href="/photography"
						class={$page.url.pathname.startsWith('/photography') ? 'selected' : undefined}
						>Photography</a
					>
				</li>
				<li aria-current={$page.url.pathname.startsWith('/blog') ? 'page' : undefined}>
					<a href="/blog" class={$page.url.pathname.startsWith('/blog') ? 'selected' : undefined}
						>Blog</a
					>
				</li>
				<li aria-current={$page.url.pathname.startsWith('/about') ? 'page' : undefined}>
					<a href="/about" class={$page.url.pathname.startsWith('/about') ? 'selected' : undefined}
						>About</a
					>
				</li>
			</ul>
		</nav>
		<ThemeToggleButton />
	</header>
	<main>
		<slot />
	</main>
</div>

<style>
	.container {
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	header {
		display: flex;
		justify-content: space-between;
	}
	header nav ul {
		margin: 1rem;
		display: flex;
		gap: 1rem;
	}
	header nav ul li a {
		text-decoration: none;
	}
	.tint {
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: -1;
		background-color: var(--tint-color);
	}
	main {
		height: 100%;
		overflow-y: auto;
		padding: 0 1rem;
	}
	.selected {
		font-weight: bold;
		text-decoration: underline;
	}
</style>

<script>
	import '../app.css';
	import ThemeToggleButton from '../components/ThemeToggleButton.svelte';
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import Map from '../components/Map.svelte';

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

<div class="container">
	<Map activities={data.activities} theme="dark" />
	<header>
		<nav>
			<ul>
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a href="/">Home</a>
				</li>
				<li aria-current={$page.url.pathname.startsWith('/about') ? 'page' : undefined}>
					<a href="/about">About</a>
				</li>
				<li aria-current={$page.url.pathname.startsWith('/contact') ? 'page' : undefined}>
					<a href="/contact">Contact</a>
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
		color: inherit;
	}
	main {
		height: 100%;
	}
</style>

<script lang="ts">
	import { dateFormat } from '$lib/dateFormat';
	import type { PageData } from './$types';

	export let data: PageData;
	const { blogPosts } = data;
</script>

<svelte:head>
	<title>Blog Posts | henrygrant.dev</title>

	<meta property="og:site_name" content="henrygrant.dev" />
	<meta property="og:title" content="Blog Posts" />
	<meta property="og:description" content="Blog posts written by Henry Grant" />
</svelte:head>

<div class="container">
	<h1>Blog</h1>
	{#each blogPosts as post, i}
		<a href={`/blog/${post.slug}`}>
			<article>
				<div class="title">{post.title}</div>
				<div class="date">{dateFormat(post.published)}</div>
			</article>
		</a>
		{#if i + 1 < blogPosts.length}<hr />{/if}
	{/each}
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		max-width: 400px;
		overflow-y: auto;
		margin: 0 auto 5rem;
	}
	a {
		width: 100%;
		text-decoration: none;
	}
	article {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		width: 100%;
		padding: 0.5rem 0;
	}
	.title {
		text-align: left;
	}
	hr {
		width: 15px;
	}
</style>

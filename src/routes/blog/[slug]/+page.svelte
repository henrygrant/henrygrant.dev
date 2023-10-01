<script lang="ts">
	import { dateFormat } from '$lib/dateFormat';
	import type { PageData } from './$types';
	import type { SvelteComponent } from 'svelte';

	export let data: PageData;
	const siteTitle = 'henrygrant.dev';
	const postTitle = data.frontmatter.title;
	const postDescription = data.frontmatter.description;
	const postDate = data.frontmatter.published;
	const formattedTitle = postTitle ? `${postTitle} | ${siteTitle}` : siteTitle;

	type C = $$Generic<typeof SvelteComponent<any, any, any>>;
	$: component = data.component as unknown as C;
</script>

<svelte:head>
	<title>{formattedTitle}</title>

	<meta property="og:site_name" content={siteTitle} />
	<meta property="og:title" content={postTitle} />
	<meta property="og:description" content={postDescription} />
</svelte:head>

<div class="container">
	<h1 class="title">{postTitle}</h1>
	<div>{dateFormat(postDate)}</div>
	<svelte:component this={component} />
</div>

<style>
	.title {
		margin-bottom: 0.5rem;
	}
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		max-width: 800px;
		overflow-y: auto;
		margin: 0 auto 5rem;
	}
</style>

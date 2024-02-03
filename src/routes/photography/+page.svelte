<script lang="ts">
	import onesevenzero from '$lib/assets/photography/_MG_0170.jpg';
	import twotwoseven from '$lib/assets/photography/_MG_0227.jpg';
	import twofourthree from '$lib/assets/photography/_MG_0243.jpg';
	import twofoursix from '$lib/assets/photography/_MG_0246.jpg';
	import twofivefive from '$lib/assets/photography/_MG_0255.jpg';
	import threefour from '$lib/assets/photography/IMG_0034.jpg';
	import threesix from '$lib/assets/photography/IMG_0036.jpg';
	import fourthree from '$lib/assets/photography/IMG_0043.jpg';
	import eightsix from '$lib/assets/photography/IMG_0086.jpg';
	import onetwoeight from '$lib/assets/photography/IMG_0128.jpg';
	import fivefivefoureight from '$lib/assets/photography/IMG_5548.jpg';
	import ninesixtwoseven from '$lib/assets/photography/IMG_9627.CR2.jpg';

	const picArr = [
		twofourthree,
		twofoursix,
		onesevenzero,
		twofivefive,
		twotwoseven,
		threefour,
		threesix,
		fourthree,
		eightsix,
		onetwoeight,
		fivefivefoureight,
		ninesixtwoseven
	];
</script>

<svelte:head>
	<title>Photography | henrygrant.dev</title>

	<meta property="og:site_name" content="henrygrant.dev" />
	<meta property="og:title" content="About" />
	<meta property="og:description" content="About Henry Grant" />
</svelte:head>

<div class="container">
	<h1>Photography</h1>
	<section>
		{#each picArr as pic, i}
			<div class="pic">
				<img alt="" src={pic} />
			</div>
		{/each}
	</section>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		text-align: justify;
		max-width: 1500px;
		overflow-y: auto;
		margin: 0 auto 5rem;
	}
	.pic {
		margin-bottom: 2rem;
		height: fit-content;
	}
	section:not(:last-child) {
		margin-bottom: 1rem;
	}
</style>

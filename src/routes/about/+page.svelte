<svelte:head>
	<title>About | henrygrant.dev</title>

	<meta property="og:site_name" content="henrygrant.dev" />
	<meta property="og:title" content="About" />
	<meta property="og:description" content="About Henry Grant" />
</svelte:head>

<div class="container">
	<h1>About</h1>
	<section>
		<p>
			I moved to New York City in 2022 and currently reside in Greenpoint. I'm into riding bikes,
			running, woodworking, gardening, and building software.
		</p>
		<p>
			I love building things and I love hanging out with other people who love building things. If
			you're in the NYC area, <a href="mailto:me@henrygrant.dev">drop me a line</a>. I'd love to
			hear about what you're working on.
		</p>
	</section>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		text-align: justify;
		max-width: 800px;
		overflow-y: auto;
		margin: 0 auto 5rem;
	}
	h2 {
		margin: 0;
	}
	.timeline {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	section:not(:last-child) {
		margin-bottom: 1rem;
	}
</style>

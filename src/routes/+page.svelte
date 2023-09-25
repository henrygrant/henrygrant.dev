<script>
	import Fa from 'svelte-fa';
	import {
		faLinkedin,
		faStrava,
		faInstagram,
		faTwitter,
		faGithub
	} from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="container">
	<h1>Henry Grant</h1>
	<div class="links">
		<a href="https://www.instagram.com/henry_grant_/" target="_blank" rel="noreferrer">
			<Fa icon={faInstagram} size="3x" />
		</a>
		<a href="https://www.twitter.com/henry_grant_/" target="_blank" rel="noreferrer">
			<Fa icon={faTwitter} size="3x" />
		</a>
		<a href="https://www.strava.com/athletes/1542509" target="_blank" rel="noreferrer">
			<Fa icon={faStrava} size="3x" />
		</a>
		<a href="https://github.com/henrygrant" target="_blank" rel="noreferrer">
			<Fa icon={faGithub} size="3x" />
		</a>
		<a href="https://www.linkedin.com/in/henry-grant-662227169/" target="_blank" rel="noreferrer">
			<Fa icon={faLinkedin} size="3x" />
		</a>
		<a href="mailto:me@henrygrant.dev" target="_blank" rel="noreferrer">
			<Fa icon={faEnvelope} size="3x" />
		</a>
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 100%;
	}
	h1 {
		margin: 1rem;
		font-size: 32px;
	}
	.links {
		display: flex;
		gap: 2rem;
	}
	.links a {
		color: inherit;
	}
	@media only screen and (max-width: 750px) {
		.links a {
			font-size: 0.7rem;
		}
	}
</style>

<script lang="ts">
	import { goto } from '$app/navigation';

	let counter = 6;
	let showMessage1 = false;
	let showMessage2 = false;
	let showMessage3 = false;

	function countDown() {
		if (counter > 1) {
			counter--;
			setTimeout(countDown, 1000);
		} else {
			goto('/');
		}
	}

	setTimeout(() => {
		showMessage1 = true;
	}, 1000);
	setTimeout(() => {
		showMessage2 = true;
	}, 4000);
	setTimeout(() => {
		showMessage3 = true;
		countDown();
	}, 7000);
</script>

<div class="container">
	<div class={`message ${showMessage1 ? 'fadeIn' : 'invisible'}`}>
		Didn't you see the contact icons on the home page?
	</div>
	<div class={`message ${showMessage2 ? 'fadeIn' : 'invisible'}`}>
		They're really big. Just go look at them there.
	</div>
	<div class={`message ${showMessage3 ? 'fadeIn' : 'invisible'}`}>
		Taking you back in {counter}
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 100%;
		font-size: 24px;
		text-align: center;
	}
	.message {
		margin-bottom: 1rem;
	}
</style>

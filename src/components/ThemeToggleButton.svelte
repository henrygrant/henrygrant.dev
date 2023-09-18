<script>
	import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
    import {browser} from "$app/environment"

    let darkMode = true

    // function toggle() {
    //     window.document.body.classList.toggle('dark-theme')
    // }

    function toggle() {
        darkMode = !darkMode;
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
        darkMode
			? window.document.body.classList.add('dark-theme')
			: window.document.body.classList.remove('dark-theme');
        if (browser) {
            if (
                localStorage.theme === 'dark' ||
                (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
            ) {
                window.document.body.classList.add('dark-theme');
                darkMode = true;
                console.log('beep')
            } else {
                window.document.body.classList.remove('dark-theme');
                darkMode = false;
                console.log('boop')
            }
        }
    }


</script>
<button on:click={toggle}>
    {#if darkMode}
        <Fa icon={faSun} size="2x" fw/>
    {:else}
        <Fa icon={faMoon} size="2x" fw/>
    {/if}
</button>
<style>
    button {
        background-color: transparent;
        border: none;
        border-radius: 4px;
        padding: 0.5rem;
        text-transform: uppercase;
        cursor: pointer;
    }
    :global(body.dark-theme) button {
        color: #d4d6db;
    }
</style>
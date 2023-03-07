<script>
	import Header from './Header.svelte';
	import './styles.css';
	import { page } from '$app/stores'
</script>

{#if $page.url.pathname === '/'}
<slot />
{:else}
<div class="app">
	<Header/>
	<main>
		<slot />
	</main>
</div>
{/if}

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

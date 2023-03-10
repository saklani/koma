<script>
	import Header from "../lib/components/common/Header.svelte";
	import "./styles.css";
	import { page } from "$app/stores";
	import { Modals, closeModal } from "svelte-modals";
</script>

{#if $page.url.pathname === "/"}
	<slot />
{:else}
	<div class="app">
		<Header />
		<main>
			<slot />
		</main>
	</div>
{/if}
<Modals>
	<div
		slot="backdrop"
		class="backdrop"
		on:click={closeModal}
		on:keypress={closeModal}
	/>
</Modals>

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
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.backdrop {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: rgba(150, 150, 150, 0.1);
		backdrop-filter: blur(2px);
	}
</style>

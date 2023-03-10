<script>
	import Hero from "../lib/components/index/Hero.svelte";
</script>

<svelte:head>
	<title>Koma</title>
	<meta name="description" content="The NFT Marketplace for Comics" />
</svelte:head>

<section>
	<Hero />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}
</style>

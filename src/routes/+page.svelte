<script>
	import Header from "./Header.svelte";
</script>

<svelte:head>
	<title>Koma</title>
	<meta name="description" content="The NFT Marketplace for Comics" />
</svelte:head>

<section class="hero">
	<Header />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		height: 100vh;
	}

	.hero {
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-image: url("https://ik.imagekit.io/saklani/greet-final-battle-alone-illustration.jpg");
	}
</style>

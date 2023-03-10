<script>
	import logo from "$lib/images/logo_name_black.svg";
	import Connect from "./connect/Connect.svelte";
</script>

<header>
	<div class="corner">
		<a href="https://onkoma.com">
			<img src={logo} alt="Koma" />
		</a>
	</div>
	<Connect />
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-inline: 24px;
		height: 10vh;
	}

	img {
		width: 100px;
		height: 42px;
		object-fit: contain;
	}
</style>

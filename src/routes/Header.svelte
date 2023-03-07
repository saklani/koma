<script>
	import logo from '$lib/images/logo_name_white.svg';
</script>

<header>
	<div class="corner">
		<a href="https://onkoma.com">
			<img src={logo} alt="Koma" />
		</a>
	</div>

</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-inline: 16px;
		height: 64px;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner img {
		width: 100px;
		height: 48px;
		object-fit: contain;
	}

</style>

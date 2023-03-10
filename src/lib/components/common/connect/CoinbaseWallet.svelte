<script>
    import logo from "$lib/images/coinbase_wallet.svg";
    import { signIn } from "./Client";
</script>

<button class="options" on:click={signIn}>
    <div class="expanded-row">
        <img src={logo} alt="Coinbase Wallet" />Coinbase Wallet
    </div>
</button>

<style>
    img {
        width: 24px;
        height: 24px;
    }
</style>

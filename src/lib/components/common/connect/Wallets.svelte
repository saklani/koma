<script lang="ts">
    import CoinbaseWallet from "./CoinbaseWallet.svelte";
    import Detect from "./Detect.svelte";
    import Metamask from "./Metamask.svelte";
    import WalletConnect from "./WalletConnect.svelte";
    export let isOpen: Boolean = false;
</script>

{#if isOpen}
    <div role="dialog" class="modal">
        <div class="contents">
            <h2>Connect a Wallet</h2>
            <Detect />
            <Metamask />
            <CoinbaseWallet />
            <WalletConnect />
        </div>
    </div>
{/if}

<script lang="ts">
    import { browser } from "$app/environment";

    export let detected = false;
    if (browser && window.ethereum !== undefined) {
        detected = true;
    }
</script>

{#if detected}
    <p>Wallet detected.</p>
{:else}
    <p>No wallet detected.</p>
{/if}

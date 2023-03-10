<script lang="ts">
    import logo from "$lib/images/metamask.svg";
    import { signIn } from "./Client";
</script>

<button class="options" on:click={signIn}>
    <div class="expanded-row">
        <img src={logo} alt="Metamask" />Metamask
    </div>
</button>

<style>
    img {
        width: 24px;
        height: 24px;
    }
</style>

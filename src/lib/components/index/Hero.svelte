<script lang="ts">
    import Header from "../common/HeaderWhite.svelte";
    import Explore from "./hero/Explore.svelte";
    import ImageCredit from "./hero/ImageCredit.svelte";
    import Sell from "./hero/Sell.svelte";
</script>

<div class="hero">
    <Header />
    <div class="page">
        <card>
            <h1>The NFT Marketplace for Comics</h1>
            <div class="row">
                <Sell />
                <Explore />
            </div>
        </card>
    </div>
    <div class="credit">
        <ImageCredit />
    </div>
</div>

<style>
    card {
        height: 400px;
        width: 300px;
    }
    h1 {
        font-size: 45px;
        font-weight: bold;
        text-align: left;
    }
    .page {
        display: flex;
        height: 82vh;
        padding-left: 24px;
        align-items: center;
    }
    .credit {
        display: flex;
        height: 8vh;
        padding-right: 24px;
        align-items: center;
        justify-content: end;
    }
    .hero {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url("https://ik.imagekit.io/saklani/greet-final-battle-alone-illustration.jpg?updatedAt=1678455968543&tr=w-3146,h-1886,fo-custom,cm-extract");
    }
    div {
        color: white;
    }
</style>

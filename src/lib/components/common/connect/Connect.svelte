<script lang="ts">
    import { openModal } from "svelte-modals";
    import Wallets from "./Wallets.svelte";

    const handleClick = () => openModal(Wallets);
</script>

<button class="rainbow" on:click={handleClick}> CONNECT </button>

<style>
    button.rainbow {
        width: 148px;
        height: 42px;
        color: #fff;
        position: relative;
        z-index: 0;
    }

    button.rainbow:before {
        content: "";
        background: linear-gradient(
            45deg,
            darkred,
            darkorange,
            darkgreen,
            darkseagreen,
            midnightblue,
            indigo,
            darkviolet,
            darkred
        );
        filter: blur(8px);
        border-radius: 8px;

        position: absolute;
        top: -2px;
        left: -2px;
        z-index: -1;

        background-size: 400%;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        animation: glowing 20s linear infinite;
        transition: opacity 0.3s ease-in-out;

        opacity: 0;
    }

    button.rainbow:hover:before {
        opacity: 1;
    }

    button.rainbow:active:after {
        background-color: rgba(0, 0, 0, 0.25);
    }

    button.rainbow:after {
        z-index: -1;
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(25, 25, 25, 1);
        left: 0;
        top: 0;
        border-radius: 8px;
    }

    @keyframes glowing {
        0% {
            background-position: 0 0;
        }
        50% {
            background-position: 400% 0;
        }
        100% {
            background-position: 0 0;
        }
    }
</style>

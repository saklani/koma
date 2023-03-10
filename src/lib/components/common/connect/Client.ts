import { getContext, setContext } from "svelte";
import { createWalletClient, custom, getAccount } from "viem";
import type { WalletClient } from "viem";
import { browser } from "$app/environment";
let client: WalletClient | undefined;


async function requestAccess() {
    try {
        if (browser) {
            if (client === undefined) {
                client = createWalletClient({
                    transport: custom(window.ethereum),
                });
            }
            const address = (await client.getAddresses())[0];
            const account = getAccount(address);
            const response = client.signMessage({ account, data: "Sign In to Koma" });


        }
    } catch (e) {
        console.error(e);
    }
}

async function signMessage() {
    try {
        if (browser) {
            if (client === undefined) {
                client = createWalletClient({
                    transport: custom(window.ethereum),
                });
            }
            const address = (await client.getAddresses())[0];
            const account = getAccount(address);
            const response = await client.signMessage({ account, data: "Sign In to Koma" });
            await  verifyMessage(response, address)
        }
    } catch (e) {
        console.error(e);
    }
}

async function verifyMessage(message: String, address: String) {
 // TODO
}


async function signIn() {
    await requestAccess()
    await signMessage()
}
export { signIn }
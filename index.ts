import { ApiPromise, WsProvider } from '@polkadot/api';
import * as apps from '@polkadot/apps-config/api';

const main = async () => {
    const api = await ApiPromise.create({
        provider: new WsProvider('wss://mainnet.edgewa.re'),
        typesBundle: apps.typesBundle,
        typesChain: apps.typesChain
    })

    await api.rpc.system.peers()
}

main().finally(() => process.exit(1))
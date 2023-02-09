import { ethers } from 'ethers'
import { INFURA_ID } from 'react-native-dotenv'

const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`)

const getBalance = async (wallet) => {
    let balance = await provider.getBalance(wallet);
    return balance;
}

const sendTransaction = async (prvKey, reicever, amount) => {
    const wallet = new ethers.Wallet(prvKey, provider);
    await wallet.sendTransaction({
        to: reicever,
        value: ethers.utils.parseEther(amount)
    })
}
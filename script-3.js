async function loadWalletInfo() {
    if (typeof window.ethereum !== 'undefined') {
        web3 = new Web3(window.ethereum);
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        userAccount = accounts[0];

        const balanceWei = await web3.eth.getBalance(userAccount);
        const balance = web3.utils.fromWei(balanceWei, 'ether');

        const infoText = `Кошелек: ${userAccount.slice(0, 6)}...${userAccount.slice(-4)} | Баланс: ${parseFloat(balance).toFixed(4)} ETH`;
        document.getElementById('walletInfo').innerText = infoText;
    }
}
window.addEventListener('load', loadWalletInfo);

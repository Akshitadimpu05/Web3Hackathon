const express = require('express');
const { ethers } = require('ethers');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for frontend communication

const PORT = process.env.PORT || 5000;

// Initialize the provider and wallet
const provider = new ethers.providers.JsonRpcProvider('https://sepolia.infura.io/v3/8a5cd096fdd24746ab257a3891be60e2');
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// Route to handle deposit
app.post('/deposit', async (req, res) => {
    const { toAddress, amount } = req.body;
    try {
        const tx = await wallet.sendTransaction({
            to: toAddress,
            value: ethers.utils.parseEther(amount.toString()),
        });
        await tx.wait(); // Wait for the transaction to be mined
        res.json({ txHash: tx.hash });
    } catch (error) {
        console.error('Deposit failed:', error);
        res.status(500).json({ message: 'Transaction failed', error: error.message });
    }
});

// Route to handle withdrawal
app.post('/withdraw', async (req, res) => {
    const { toAddress, amount } = req.body;
    try {
        const tx = await wallet.sendTransaction({
            to: toAddress,
            value: ethers.utils.parseEther(amount.toString()),
        });
        await tx.wait(); // Wait for the transaction to be mined
        res.json({ txHash: tx.hash });
    } catch (error) {
        console.error('Withdrawal failed:', error);
        res.status(500).json({ message: 'Transaction failed', error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

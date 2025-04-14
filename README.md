

### 🪙 RAJA Token (RTC) – Custom ERC20 Token on Sepolia

RAJA Token (RTC) is a beginner-friendly custom ERC20 token built using Solidity and deployed on the Sepolia testnet. This project demonstrates how to write, deploy, and interact with your own cryptocurrency without relying on OpenZeppelin contracts.

---

### 🔧 Features

- Custom ERC20 Token contract (`RAJA`)
- Token Symbol: `RTC`
- Total Supply: Initially transfered to the owner.
- Basic ERC20 functionality:
  - `transfer`
  - `approve`
  - `transferFrom`
  - `balanceOf`
  - `allowance`
- Deployed to Sepolia testnet
- Integration-ready with MetaMask

---
### Screenshots for MetaMask
- A sample where I tranfered 10000 RTC from account1(owner) to account2

![image](https://github.com/user-attachments/assets/add00363-ed2b-4b3a-bbb3-05b4cddafa6f)
![image](https://github.com/user-attachments/assets/d8b05096-56aa-40c8-bf04-7cf3fe298dc0)
![image](https://github.com/user-attachments/assets/3a3e9546-37e6-4e1a-918b-4d17e42cc61a)





### 🧪 Tech Stack

- **Solidity**
- **Hardhat**
- **Node.js**
- **Ethers.js**
- **Sepolia (Ethereum Testnet)**

---

### 🚀 How to Run

```bash
npm install
npx hardhat compile
npx hardhat run scripts/deploy.js --network sepolia
```

> Make sure to configure your `.env` with `SEPOLIA_RPC_URL` and `PRIVATE_KEY`

---

### 🦊 Add to MetaMask

1. Network: Sepolia
2. Token Contract Address: `0xa31395f648999610Ec65c06a8D972ACf069B6A9A`
3. Token Symbol: `RTC`
4. Decimals: `18`

---

### 📜 License

MIT

---

Let me know if you also want a `README.md` file for this with formatting.

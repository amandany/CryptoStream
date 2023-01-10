import { SecretNetworkClient } from "secretjs";

const ConnectWallet = async () => {
  //   const CHAIN_ID = process.env.REACT_APP_CHAIN_ID;
  const CHAIN_ID = "secret-4";
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  while (
    !window.keplr ||
    !window.getEnigmaUtils ||
    !window.getOfflineSignerOnlyAmino
  ) {
    await sleep(100);
  }

  console.log("start");
  await window.keplr.enable(CHAIN_ID);

  let keplrOfflineSigner = window.keplr.getOfflineSignerOnlyAmino(CHAIN_ID);
  console.log("keplrOfflineSigner", keplrOfflineSigner);

  const accounts = await keplrOfflineSigner.getAccounts();
  const myAddress = accounts[0].address;
  console.log("accounts", accounts);

  //   const grpcWebUrl = "https://secret-4.api.trivium.network:26657";
  //   const grpcWebUrl = "https://secret-4.api.trivium.network:9091";
  const grpcWebUrl = "https://grpc.secret.forbole.com/";

  //   const secretjs = await SecretNetworkClient.create({
  //     grpcWebUrl,
  //     chainId: CHAIN_ID,
  //     wallet: keplrOfflineSigner,
  //     walletAddress: accounts[0].address,
  //     encryptionUtils: window.getEnigmaUtils(CHAIN_ID),
  //   });

  const secretjs = new SecretNetworkClient({
    grpcWebUrl,
    chainId: CHAIN_ID,
    wallet: keplrOfflineSigner,
    // walletAddress: accounts[0].address,
    walletAddress: myAddress,
    encryptionUtils: window.keplr.getEnigmaUtils(CHAIN_ID),
  });

  console.log("secretjs", secretjs);

  const {
    balance: { amount },
  } = await secretjs.query.bank.balance(
    {
      address: "secret1ap26qrlp8mcq2pg6r47w43l0y8zkqm8a450s03",
      denom: "uscrt",
    } /*,
    // optional: query at a specific height (using an archive node) 
    new grpc.Metadata({"x-cosmos-block-height": "2000000"})
    */,
  );
  
  console.log(`I have ${Number(amount) / 1e6} SCRT!`);
  
  return await secretjs;

  // const balance = await secretjs.query.bank.balance({
  //   address: accounts[0].address,
  //   denom: "uscrt",
  // });
  //   const balance = await secretjs.query.bank.allBalances({
  //     address: accounts[0].address,
  //   });

  //   console.log("balance", balance);

  //   const sSCRT = "secret1k0jntykt7e4g3y88ltc60czgjuqdy4c9e8fzek";
  //   // Get codeHash using `secretcli q compute contract-hash secret1k0jntykt7e4g3y88ltc60czgjuqdy4c9e8fzek`
  //   const sScrtCodeHash =
  //     "af74387e276be8874f07bec3a87023ee49b0e7ebe08178c49d0a49c3c98ed60e";

  //   const { token_info } = await secretjs.query.compute.queryContract({
  //     contractAddress: sSCRT,
  //     codeHash: sScrtCodeHash, // optional but way faster
  //     query: { token_info: {} },
  //   });

  //   console.log("token_info", token_info);
};

export default ConnectWallet;

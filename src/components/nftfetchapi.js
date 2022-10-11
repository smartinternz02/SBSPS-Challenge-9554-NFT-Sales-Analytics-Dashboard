const ethers = require("ethers");
(async () => {
  const provider = new ethers.providers.JsonRpcProvider("https://smart-withered-arm.discover.quiknode.pro/b61fceb5ab48c1f1df04a06c8adccc72583597b9/");
  provider.connection.headers = { "x-qn-api-version": 1 };
  const heads = await provider.send("qn_fetchNFTs", {
    omitFields: ["provenance", "traits"],
    page: 1,
    perPage: 10,
    contracts: [
      "0x60E4d786628Fea6478F785A6d7e704777c86a7c6",
      "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
    ],
  });
  console.log(heads);
})();

import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import { NextApiRequest, NextApiResponse } from "next";

Moralis.start({
    apiKey: "xUjjoJk7hKv7FJnlrllgUDag7U95SzumhU3pjQrmRoMDQeJcYysATyaO9Qvkailz"
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const tokenId = await req.body.tokenId

  const address = "0xa436f0934a28cA21B537ebfc7911384036C7c63b";

  const chain = EvmChain.MUMBAI;

  const response = await Moralis.EvmApi.nft.getNFTMetadata({
    address,
    chain,
    tokenId,
  });

  console.log(response)

  return res.json(response?.toJSON());
}
export default handler

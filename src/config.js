import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x3FC25a2D51bdC87A4f3362f5e781A1366C604793";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/dT2zeIwemQxyEqTEc8jhMFvj2Z0xGhzy",
  },
};

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CowSwapTest, CowSwapTestInterface } from "../CowSwapTest";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "orderUid",
        type: "bytes",
      },
    ],
    name: "preSign",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405163095ea7b360e01b815273c92e8bdf79f0507f65a392b0ab4667716bfe011060048201526000196024820152735592ec0cfb4dbc12d3ab100b257153436a1f0fea9063095ea7b390604401602060405180830381600087803b15801561007957600080fd5b505af115801561008d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100b191906100b7565b506100e0565b6000602082840312156100c957600080fd5b815180151581146100d957600080fd5b9392505050565b6101d1806100ef6000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063ca57bae214610030575b600080fd5b61004361003e3660046100d0565b610045565b005b6040517fec6cb13f000000000000000000000000000000000000000000000000000000008152739008d19f58aabd9ed0d60971565aa8510560ab419063ec6cb13f9061009a9085908590600190600401610142565b600060405180830381600087803b1580156100b457600080fd5b505af11580156100c8573d6000803e3d6000fd5b505050505050565b600080602083850312156100e357600080fd5b823567ffffffffffffffff808211156100fb57600080fd5b818501915085601f83011261010f57600080fd5b81358181111561011e57600080fd5b86602082850101111561013057600080fd5b60209290920196919550909350505050565b6040815282604082015282846060830137600060608483010152600060607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601168301019050821515602083015294935050505056fea2646970667358221220a0e7ff203c54d1f3f6144c07edb61ae6823157619064c7b6798e5373c945928964736f6c63430008090033";

type CowSwapTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CowSwapTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CowSwapTest__factory extends ContractFactory {
  constructor(...args: CowSwapTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CowSwapTest> {
    return super.deploy(overrides || {}) as Promise<CowSwapTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CowSwapTest {
    return super.attach(address) as CowSwapTest;
  }
  connect(signer: Signer): CowSwapTest__factory {
    return super.connect(signer) as CowSwapTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CowSwapTestInterface {
    return new utils.Interface(_abi) as CowSwapTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CowSwapTest {
    return new Contract(address, _abi, signerOrProvider) as CowSwapTest;
  }
}
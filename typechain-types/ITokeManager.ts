/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ITokeManagerInterface extends utils.Interface {
  functions: {
    "getCurrentCycle()": FunctionFragment;
    "getCurrentCycleIndex()": FunctionFragment;
    "getCycleDuration()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getCurrentCycle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentCycleIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCycleDuration",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getCurrentCycle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentCycleIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCycleDuration",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ITokeManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ITokeManagerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getCurrentCycle(overrides?: CallOverrides): Promise<[BigNumber]>;

    getCurrentCycleIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    getCycleDuration(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  getCurrentCycle(overrides?: CallOverrides): Promise<BigNumber>;

  getCurrentCycleIndex(overrides?: CallOverrides): Promise<BigNumber>;

  getCycleDuration(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    getCurrentCycle(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentCycleIndex(overrides?: CallOverrides): Promise<BigNumber>;

    getCycleDuration(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getCurrentCycle(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentCycleIndex(overrides?: CallOverrides): Promise<BigNumber>;

    getCycleDuration(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getCurrentCycle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCurrentCycleIndex(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCycleDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
"use client";

import { useCallback } from "react";
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";

import { toast } from "sonner";
import { isSupportedChain } from "@/lib/constants/chain";
import { getProvider } from "@/lib/constants/provider";
import { getAutoMobileContract } from "@/lib/constants/contract";

type ErrorWithReason = {
  reason?: string;
  message?: string;
};

const useGeneratePremium = () => {
  const { chainId } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

        //  uint256 driverAge,
        // uint256 accidents,
        // uint256 violations,
        // string memory vehicleCategory,
        // uint256 vehicleAge,
        // uint256 mileage,
        // string[] memory safetyFeatures,
        // string memory coverageType,
        // uint256 vehicleValue,
        // string memory imageUrl
  return useCallback(
    async(driverAge:number, accidents:number, violations:number, vehicleCategory:string, vehicleAge:number, mileage: string, safetyFeatures: string[], coverageType:string,vehicleValue: number,imageUrl:string) => {
      if (!isSupportedChain(chainId)) return toast.warning("wrong network | Connect your wallet");
      const readWriteProvider = getProvider(walletProvider);
      const signer = await readWriteProvider.getSigner();

      const contract = getAutoMobileContract(signer);

      try {
        const transaction = await contract.generatePremium(driverAge,accidents,violations,vehicleCategory,vehicleAge,mileage,safetyFeatures,coverageType,vehicleValue,imageUrl);
        const receipt = await transaction.wait();

        if (receipt.status) {
          return toast.success("premium generated!");
        }

        toast.error("failed!");
      } catch (error: unknown) {
        // console.log(error);
        const err = error as ErrorWithReason;
        let errorText: string;

        if (err?.reason === "") {
          errorText = "generate premium failed!";
        }
        else {
            // console.log(err?.message);
            
          errorText ="generate premium failed!!";
        }

        toast.warning(`Error: ${errorText}`);
      }
    },
    [chainId, walletProvider]
  );
};

export default useGeneratePremium;

import { ethers } from "ethers";
import auto from "./abi/AutoMobile.json";
import propt from './abi/Property.json'
import multicallAbi from './abi/multicallAbi.json'
import { envVars } from "./env";


export const getAutoMobileContract = (providerOrSigner: ethers.Provider | ethers.Signer) =>
    new ethers.Contract(
        envVars.autoMobileContract || "",
        auto,
        providerOrSigner
    );

export const getPropertyContract = (providerOrSigner: ethers.Provider | ethers.Signer) =>
    new ethers.Contract(
        envVars.propertyContract || "",
        propt,
        providerOrSigner
    );



export const getMulticallContract = (providerOrSigner: ethers.Provider | ethers.Signer) =>
new ethers.Contract(
    envVars.multicallContract || "",
    multicallAbi,
    providerOrSigner
);

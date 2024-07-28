"use client";

import React, { useContext, useEffect, useState } from "react";
import Input from "../Input/Input";
import Radio from "../Radio/Radio";
import DropZone from "../DropZone/DropZone";
// import { InsureFiContext } from "@/context/InsureFiContext";
import Button from "../Button/Button";
import { LoaderSpinner } from "../LoaderSpinner/LoaderSpinner";

interface AutomobileApplicationProps {}

const AutomobileApplication: React.FC<AutomobileApplicationProps> = ({}) => {
  const [price, setPrice] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [value, setValue] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [driverAge, setDriverAge] = useState<string>("");
  const [driverId, setDriverId] = useState<string>("");
  const [accident, setAccident] = useState<string>("");
  const [violation, setViolation] = useState<string>("");
  const [carAge, setCarAge] = useState<string>("");
  const [mileage, setMileage] = useState<string>("");
  const [plateNumber, setPlateNumber] = useState<string>("");
  const [priceAmount, setPriceAmount] = useState<string>("");
  const [coverageType, setCoverageType] = useState<string>("");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);

  const handleCoverageTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setCoverageType(event.target.value);
  };

 const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setSelectedCheckboxes((prevSelectedCheckboxes) => {
      if (prevSelectedCheckboxes.includes(value)) {
        return prevSelectedCheckboxes.filter((checkbox) => checkbox !== value);
      } else {
        return [...prevSelectedCheckboxes, value];
      }
    });
  };

  useEffect(() => {
    console.log("selected checkboxes", selectedCheckboxes);
  }, [selectedCheckboxes]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClear = () => {
    setValue("");
  };

  return (
    <>
      <LoaderSpinner />
      <div className="w-full">
        <div className="flex justify-between w-full gap-12">
          <div className="w-1/2">
            <div className="pt-3">
              <h3 className="font-semibold text-lg">Personal Information</h3>
              {/* <Input
                name="Name"
                placeholder="Full Name"
                type="text"
                value={value}
                handleChange={handleChange}
                handleClear={handleClear}
              /> */}
              <div className="flex gap-4">
                <Input
                  value={driverAge}
                  handleChange={(event:any) => setDriverAge(event.target.value)}
                  handleClear={() => setDriverAge("")}
                  name="Drivers Age"
                  placeholder="0"
                  type="number"
                />
                <Input
                  value={driverId}
                  handleChange={(event:any) => setDriverId(event.target.value)}
                  handleClear={() => setDriverId("")}
                  name="Drivers ID"
                  placeholder="0"
                  type="number"
                />
              </div>
            </div>
            <div className="pt-4">
              <h3 className="font-semibold text-lg">Driving History</h3>
              <div className="flex gap-4">
                <Input
                  value={accident}
                  handleChange={(event:any) => setAccident(event.target.value)}
                  handleClear={() => setAccident("")}
                  name="Accidents"
                  placeholder="0"
                  type="number"
                />
                <Input
                  value={violation}
                  handleChange={(event:any) => setViolation(event.target.value)}
                  handleClear={() => setViolation("")}
                  name="Violations"
                  placeholder="0"
                  type="number"
                />
              </div>
            </div>
          </div>
          <div className="pt-4 w-1/2">
            <div>
              <h3 className="font-semibold text-lg">Vehicle Category</h3>
              <div className="flex justify-between">
                <Radio
                  options={["Commercial", "Economy", "Mid-Range"]}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                />
                <Radio
                  options={["Luxury", "Sports", "SUV"]}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                />
              </div>
              <div className="flex gap-6 pl-4">
                <Input
                  value={carAge}
                  handleChange={(event:any) => setCarAge(event.target.value)}
                  handleClear={() => setCarAge("")}
                  name="Car Age"
                  placeholder="0"
                  type="number"
                />
                <Input
                  value={mileage}
                  handleChange={(event:any) => setMileage(event.target.value)}
                  handleClear={() => setMileage("")}
                  name="Mileage"
                  placeholder="0"
                  type="number"
                />
              </div>
              <div className="flex  gap-6 pl-4">
                <Input
                  value={plateNumber}
                  handleChange={(event:any) => setPlateNumber(event.target.value)}
                  handleClear={() => setPlateNumber("")}
                  name="Plate No."
                  placeholder="0"
                  type="number"
                />
                <Input
                  value={priceAmount}
                  handleChange={(event:any) => setPriceAmount(event.target.value)}
                  handleClear={() => setPriceAmount("")}
                  name="Price Amount"
                  placeholder="0"
                  type="number"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <fieldset>
            <h3 className="font-semibold text-lg py-4">Coverage Type</h3>
            <legend className="sr-only">Coverage Type</legend>
            <div className="flex gap-8">
              <div className="flex items-center mb-4 cursor-pointer">
                <input
                  id="coverage-type-1"
                  type="radio"
                  name="coverage-type"
                  value="ct1"
                  className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                  onChange={handleCoverageTypeChange}
                />
                <label
                  htmlFor="coverage-type-1"
                  className="block ms-2  text-base font-medium text-[#333333] cursor-pointer "
                >
                  Comprehensive Insurance
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  id="coverage-type-2"
                  type="radio"
                  name="coverage-type"
                  value="ct2"
                  onChange={handleCoverageTypeChange}
                  className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="coverage-type-2"
                  className="block ms-2 text-base font-medium text-[#333333] cursor-pointer"
                >
                  Collision Insurance
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  id="coverage-type-3"
                  type="radio"
                  name="coverage-type"
                  value="ct3"
                  onChange={handleCoverageTypeChange}
                  className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="coverage-type-3"
                  className="block ms-2 text-base font-medium text-[#333333] cursor-pointer "
                >
                  Liability Insurance
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  id="coverage-type-4"
                  type="radio"
                  name="coverage-type"
                  value="ct4"
                  onChange={handleCoverageTypeChange}
                  className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="coverage-type-4"
                  className="block ms-2 text-base font-medium text-[#333333] cursor-pointer "
                >
                  Personal Injuries Protection
                </label>
              </div>
            </div>
          </fieldset>
        </div>
        <h3 className="font-semibold text-lg ">Safety Features</h3>
        <div className="flex gap-8 items-center py-4">
          <div className="flex items-center">
            <input
              id="default-checkbox-1"
              type="checkbox"
              value="sf1"
             onChange={(e)=>{handleCheckboxChange(e)}}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 checkbox"
            />
            <label
              htmlFor="default-checkbox-1"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Advanced safety features
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="default-checkbox-2"
              type="checkbox"
              value="sf2"
              onChange={(e)=>{handleCheckboxChange(e)}}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 checkbox"
            />
            <label
              htmlFor="default-checkbox-2"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Anti-theft system
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="default-checkbox-3"
              type="checkbox"
              value="sf3"
             onChange={(e)=>{handleCheckboxChange(e)}}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 checkbox"
            />
            <label
              htmlFor="default-checkbox-3"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Parking sensors
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="default-checkbox-4"
              type="checkbox"
              value="sf4"
              onChange={(e)=>{handleCheckboxChange(e)}}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 checkbox"
            />
            <label
              htmlFor="default-checkbox-4"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Blind spot monitoring
            </label>
          </div>
        </div>
        <div className="w-full">
          <DropZone
            title="Supported htmlFormates: JPEG, PNG"
            heading="Drag & drop file or browse"
            subHeading="or Browse"
            uploadToIPFS={()=>{}}
            setImageUrl={setImageUrl}
          />
        </div>
      </div>
    </>
  );
};

export default AutomobileApplication;

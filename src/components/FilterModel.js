import React from "react";
import Arrow from '../assets/arrow_img.svg';

const FilterModel = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-[950px] h-auto bg-[#FFFFFF] border-2 mt-8 flex flex-col p-4">
                <div className=" mb-4">
                    <p className="font-medium text-xl">Apply Filters</p>
                </div>
                <form className="flex flex-col space-y-4">
                    <div className="flex flex-col">
                        <label className="text-sm font-normal text-[#4D4D4D]">Size</label>
                        <div className="relative mt-2">
                            <input
                                type="text"
                                placeholder="AirBus A220 - 100"
                                className="placeholder:text-[#BDBEBF] placeholder:pl-8 border-[#DEDEDE] border h-[40px] pr-10 pl-2 w-full text-xs"
                            />
                            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                                <img src={Arrow} width={16} alt="Dropdown Arrow" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-[#4D4D4D] text-sm font-normal">Term</label>
                        <div className="flex flex-wrap gap-4 mt-2">
                            <label className="flex items-center">
                                <input type="radio" name="term" className="border-[#B3B4BA] mr-2" />
                                <span className="text-[#BDBEBF] text-sm font-normal">All</span>
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="term" className="border-[#B3B4BA] mr-2" />
                                <span className="text-[#BDBEBF] text-sm font-normal">Nightly</span>
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="term" className="border-[#B3B4BA] mr-2" />
                                <span className="text-[#BDBEBF] text-sm font-normal">Monthly</span>
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="term" className="border-[#B3B4BA] mr-2" />
                                <span className="text-[#BDBEBF] text-sm font-normal">For Sale</span>
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-[#4D4D4D] text-sm font-normal">Date</label>
                        <input type="text" placeholder="02 Sep 2024" className="placeholder:text-[#BDBEBF] placeholder:text-sm placeholder:font-normal placeholder:pl-3 w-full h-[30px] border-[#DEDEDE] border mt-2" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-[#4D4D4D] text-sm font-normal">Price</label>
                        <input
                            type="range"
                            className="w-full h-[10px] bg-[#BDBEBF] mt-2 rounded-lg cursor-pointer"
                        />
                        <div className="flex justify-between mt-2">
                            <span className="text-[#BDBEBF] text-sm font-medium">$50k</span>
                            <span className="text-[#BDBEBF] text-sm font-medium">$100k</span>
                            <span className="text-[#BDBEBF] text-sm font-medium">$500k</span>
                            <span className="text-[#BDBEBF] text-sm font-medium">$800k</span>
                            <span className="text-[#BDBEBF] text-sm font-medium">$5M</span>
                            <span className="text-[#BDBEBF] text-sm font-medium">$10M</span>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-[#4D4D4D] text-sm font-normal">Radius</label>
                        <input
                            type="range"
                            className="w-full h-[10px] bg-[#BDBEBF] mt-2 rounded-lg cursor-pointer"
                        />
                        <div className="flex justify-between mt-2">
                            <span className="text-[#BDBEBF] text-sm font-medium">200 Miles</span>
                            <span className="text-[#BDBEBF] text-sm font-medium">3500 Miles</span>
                        </div>
                    </div>

                    <div className="flex justify-end mt-4 space-x-2">
                        <button className="w-[100px] h-[40px] rounded-3xl border border-[#00AEEF] text-[#00AEEF] text-lg font-semibold">
                            Cancel
                        </button>
                        <button className="w-[100px] h-[40px] bg-[#00AEEF] rounded-3xl border border-[#00AEEF] text-[#FFFFFF] text-lg font-semibold">
                            Apply
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FilterModel;

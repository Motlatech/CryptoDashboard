import React from "react";
import Heading from "../Header/Country";
import Maincharts from "../middle/charts/MainChart.js";
import PieChart from "../Footer/PieChart";
import CoinExchange from "../Footer/coinExchange";
import CryptoDropdown from "../sideBar/CryptoDropdown";
import SearchOption from "../Header/Search";


const Main = () => {
  return (
    <div className="bg-gray-300">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 mx-3 py-3">
        <div className="grid gap-2 lg:col-span-3">
          {/*They are two components in this div which we have placed in the heading folder*/}
          <div className="grid gap-2 grid-cols-8 grid-rows-1 md:mr-1">
            <div className="col-span-1">
              <Heading />
            </div>
            <div className="w-full grid col-span-7">
              <SearchOption />
            </div>
          </div>
          {/*Maincharts is a component placed in the charts folder*/}
          <div className="bg-white rounded-lg overflow-hidden shadow-md md:mr-1">
            <Maincharts /> 
          </div>
          {/*They are two components in this div which we have placed in the bottom folder*/}
          <div className="grid md:grid-cols-2 gap-3 md:mr-1">
            <div className="md:col-span-1">
              <PieChart />
            </div>
            <div className="md:col-span-1">
              <CoinExchange />
            </div>
          </div>
        </div>
        {/*CryptoDropdown is a component placed in the sidebar folder*/}
        <div className="lg:col-span-1">
          <CryptoDropdown />
        </div>
      </div>
    </div>
  );
};

export default Main;
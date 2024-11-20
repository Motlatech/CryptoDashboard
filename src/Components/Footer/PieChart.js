import {Chart as ChartJs, ArcElement,Tooltip,Legend} from "chart.js";
import React from "react";
import { Pie } from "react-chartjs-2";

ChartJs.register(ArcElement, Tooltip, Legend);

const PieChart = ()=>{
    const data ={
        lables:['Bitcoin','Ethereum','Dogecoin'],
        datasets:[{
            lable: '$',
            data:[300,300,400],
            backgroundColor:['green','red','blue'],
            borderWidth: 1,
            hoverOffset:8,
        },
      ],
    };

    const options={
        aspectRatio: 2,
        plugins:{
            legend:{
            position: "right",
            fulWidth: false,
            labels:{
                color:"#5c5c5c",
                padding:12,
                usePointStyle: true,
                font:{
                    size:13,
                    weight:"bold",
                },
            },
            },
            datalabels:{
                align:"center",
                color: "#FFF",
                font: {
                    size: 25,
                    weight:"bold",
                },
            },
        },
    };

    return (
        <div className="bg-white w-full rounded-md p-7 pb-5">
          <div>
            <div className="flex justify-around mt-1 font-bold">
              <h1>Portfolio</h1>
              <h1>Total Value: $1000</h1>
            </div>
            <div className="w-[240px] ml-[100px] mt-[30px]">
              <Pie data={data} options={options}></Pie>
            </div>
          </div>
        </div>
      );
    };
   
    export default PieChart;
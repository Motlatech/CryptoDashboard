import React,{useRef} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {setSelectionCoin} from "../../Redux/slice/selectedCoinSlice";

const CoinDropdown =()=> {
  const dispatch = useDispatch();
  const ref = useRef();
  const coin = useSelector((state)=> state.coinReducer.currencies);
  const currentCoin = useSelector((state)=>state.selectCoinReducer.coin);


  function coinHandler(e){
    e.preventDefault();
    const val = ref.current.value;
    dispatch(setSelectionCoin(val));
  }

  return(
    <div className="mt-2 ">
    <select
      onChange={coinHandler}
      ref={ref}
      value={currentCoin}
      className="bg-gray-300 p-1 rounded-md focus:outline-none"
    >
      {coin.map((item, index) => {
        return (
          <option key={index} value={item.id}>
            {item.name}
          </option>
        );
      })}
    </select>
  </div>
  );
};

export default CoinDropdown;
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import upicon from "../../image/UpArrow.png";
import downicon from "../../image/DownArrow.png";
import { fetchData } from "../../Redux/apiSlice/coinSlice";
import { Hourglass } from "react-loader-spinner";

// CryptoDropdown contains all crypto details like coin name, currency symbol, Coin image, market cap, and 24h price change
const CryptoDropdown = () => {
  const coin = useSelector((state) => state.coinReducer.currencies);
  const symbol = useSelector((state) => state.symbolReducer.symbol);
  const id = useSelector((state) => state.currencyReducer.setCurrency);
  const loading = useSelector((state) => state.coinReducer.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData(id));
  }, [dispatch, id]);

  // This function returns compact value
  const numbersFormatter = (number) => {
    const formatter = new Intl.NumberFormat("en-us", {
      notation: "compact",
    });

    return formatter.format(number);
  };

  if (loading) {
    return (
      <div className="bg-white h-full flex justify-center items-center rounded-lg">
        <Hourglass
          visible={true}
          height="50"
          width="50"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-2">
      <p className="font-bold mb-2">Cryptocurrency by Market Cap</p>
      <div>
        {coin.map((item, index) => (
          <div key={index} className="flex justify-between items-center p-1">
            <div className="flex flex-col justify-center gap-1">
              <div className="flex items-center gap-1">
                <img src={item.image} alt={item.name} width="26px" />
                <p className="font-semibold">{item.name}</p>
              </div>
              <div className="flex gap-1 text-xs">
                <span className="font-semibold">Mkt.Cap:</span>
                <span>{symbol}</span>
                <p>{numbersFormatter(item.market_cap)}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {item.price_change_percentage_24h > 0 ? (
                <img src={upicon} alt="up" width="20px" />
              ) : (
                <img src={downicon} alt="down" width="20px" />
              )}
              <span
                className={
                  item.price_change_percentage_24h > 0
                    ? "text-lime-400"
                    : "text-red-400"
                }
              >{`${item.price_change_percentage_24h.toFixed(3)}%`}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoDropdown;
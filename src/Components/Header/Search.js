import React,{useState} from 'react'
import {useSelector} from 'react-redux';

const Search= ()=>{
  const [input,setInput]= useState("");
  const [result,setResult]= useState([]);
  const coin= useSelector((state)=>state.coinReducer.currencies);


  function coinSearch(value) {
   setInput(value);
   const coinFilter = coin.filter((item)=>{
   return(
    value && item && item.name && item.name.toLowerCase().includes(value.toLowerCase())
   );
   });
  setResult(coinFilter);
  }
  

  function coinSelect(name){
   setInput(name);
   setResult([]);
  }
    return (
      <div className='flex '>
          <button className=' w-[40px] h-10 bg-white items-center p-1 rounded-l-md' >
              <img src='https://i2.wp.com/www.thinkafrica.fi/wp-content/uploads/2019/04/search-icon.png?resize=1024%2C1024&ssl=1' alt='img' />
          </button>
          <div></div>
  
    <input  className='w-full h-10 p-1 rounded-r-md' 
    onChange={(e)=>coinSearch(e.target.value)} 
    value={input} 
     type='search' 
     placeholder='Search by Coin name' />


   {result.length> 0 && (
    <div className="absolute w-[62%] bg-white rounded-md shadow-lg ml-8 mt-11">
     {result.map((item, id) => (
            <div
              className="flex items-center p-2 cursor-pointer hover:bg-gray-200"
              key={id}
              onClick={() => coinSelect(item.name)}
            >
              <img
                className="w-[50px] h-[50px] p-2 ml-4"
                src={item.image}
                alt={item.name}
              />
              <p className="p-2">{item.name}</p>
            </div>
      ))}

    </div>
  )}
      </div>
    );
  
  
};


export default Search

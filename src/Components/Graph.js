import React,{useState} from 'react'


function Graph() {

    const [selectedOption,setSelectedOption]= useState('');

    const handleChange=(event)=>{
      setSelectedOption(event.target.value);
    } 
    
  return (
    <div>
      <div className='  container grid grid-flow-row grid-cols-8 w-full h-[14px] grid-rows-1 place-items-center mx-10 mt-8'>
        <div>
            <button className='bg-slate-200 w-[60px] h-[29px] rounded-md font-semibold' onClick=''>1D</button>
        </div>
        <div>
             <button className='bg-slate-200 w-[60px] h-[29px] rounded-md font-semibold' onClick=''>1W</button>
        </div>
        <div> 
            <button className='bg-slate-200 w-[60px] h-[29px] rounded-md font-semibold' onClick=''>1M</button>
        </div>
        <div> 
            <button className='bg-slate-200 w-[60px] h-[29px] rounded-md font-semibold' onClick=''>6M</button>
        </div>
        <div>
            <button className='bg-slate-200 w-[60px] h-[29px] rounded-md font-semibold' onClick=''>1Y</button>
        </div>
        {/*  //CryptoCurrency */}
        <div>
<div className='  font font-semibold'> 
  <select  className='dropdown w-[150px] h-[29px] bg-slate-200 ' value={selectedOption} onChange={handleChange}>
<option value="" selected>CryptoCurrency</option>
<option value="1"><input type='search' placeholder='search cryptoCurrency'/></option>
<option value="2">RUS</option>

</select>
</div>
</div> 
        <div >
        <div className='font font-semibold '> 
  <select  className='dropdown w-[130px] h-[29px] ml-8 bg-slate-200' value={selectedOption} onChange={handleChange}>
<option value="" selected>Chart Type</option>
<option value="1">IND</option>
<option value="2">RUS</option>

</select>
</div>
        </div>
      </div>

   <div>
    {/* <Chart/> */}
   </div>
    </div>
  )
}

export default Graph

import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import {baseapi} from "./data";

//Chart API Fetch with the help for Redux-thunk
export const fetchChart = createAsyncThunk("chart/api",async(args)=>{
    const{coin,currency,day} = args;
    const response = await baseapi.get(`coins/${coin}/market_chart?vs_currency=${currency}&days=${day}&interval=daily`
  );
  return response.data.prices;
});

// createslice 
 const chartSlice= createSlice({
    name:"chartSlice",
    initialState:{
        chart:[],
        loading:false,
        error:null
    },
    extraReducers: function(builder){
        builder
        .addCase(fetchChart.pending,(state,action)=>{
          state.loading= true;
        })
        .addCase(fetchChart.fulfilled,(state,action)=>{
            state.loading= false;
            state.chart=action.payload;

        })
        .addCase(fetchChart.rejected,(state,action)=>{
            state.error=action.error.message;
        });

    },

 });

 export default chartSlice.reducer;

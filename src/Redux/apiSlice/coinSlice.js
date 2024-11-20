import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseapi } from "./data";

// coin api fetch by redux thunk
export const fetchData= createAsyncThunk("currency/api", async(id)=>{
    const response = await baseapi.get(
        `coins/markets?vs_currency=${id}&order=market_cap_desc&per_page=11&page=1&sparkline=false&locale=en`
      );
      return response.data;
});

// create slice
const coinSlice = createSlice({
    name:"coinSlice",
    initialState:{
        currencies:[],
        loading:false,
        error:null,
    },
    extraReducers: function(bulider){
        bulider
        .addCase(fetchData.pending, (state, action) => {
            state.loading = true;
          })
          .addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.currencies = action.payload;
          })
          .addCase(fetchData.rejected, (state, action) => {
            state.error = action.error.message;
          });
    }
});

export default coinSlice.reducer;
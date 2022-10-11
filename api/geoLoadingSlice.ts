import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface geoLoadingState {
  isLoading: boolean
}

const initialState: geoLoadingState = {
  isLoading: false,
};

const geoLoadingSlice = createSlice({
  name: "geoLoading",
  initialState,
  reducers: {
    getIsGeoLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { getIsGeoLoading } = geoLoadingSlice.actions;
export default geoLoadingSlice.reducer;
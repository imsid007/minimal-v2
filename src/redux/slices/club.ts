import { createSlice } from '@reduxjs/toolkit';
import axiosInstance from 'src/utils/axios';
import { store } from '../store';

const { dispatch } = store;


const initialState = {
    isLoading: false,
    error: false,
    clubs: []
}
  
  const slice = createSlice({
    name: 'club',
    initialState,
    reducers: {
      // START LOADING
      startLoading(state) {
        state.isLoading = true;
      },
  
      // HAS ERROR
      hasError(state, action) {
        state.isLoading = false;
        state.error = action.payload;
      },
  
      // GET PRODUCTS
      getClubs(state, action) {
        state.isLoading = false;
        state.clubs = action.payload;
      }
    }
  });
  
  export default slice.reducer;
  
  export function getClubs() {
    return async () => {
      dispatch(slice.actions.startLoading());
      try {
        const response = await axiosInstance.get('/clubs');
        dispatch(slice.actions.getClubs(response.data.data));
      } catch (error) {
        dispatch(slice.actions.hasError(error));
      }
    };
  }
  
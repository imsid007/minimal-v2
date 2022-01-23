import { createSlice } from '@reduxjs/toolkit';
import axiosInstance from 'src/utils/axios';
import { store } from '../store';

const { dispatch } = store;


const initialState = {
    isLoading: false,
    error: false,
    categories: []
}
  
  const slice = createSlice({
    name: 'category',
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
      getClubCategories(state, action) {
        state.isLoading = false;
        state.categories = action.payload;
      }
    }
  });
  
  export default slice.reducer;
  
  export function getCategories() {
    return async () => {
      dispatch(slice.actions.startLoading());
      try {
        const response = await axiosInstance.get('/clubs/categories');
        dispatch(slice.actions.getClubCategories(response.data.data));
      } catch (error) {
        dispatch(slice.actions.hasError(error));
      }
    };
  }
  
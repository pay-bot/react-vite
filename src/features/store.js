import { configureStore } from '@reduxjs/toolkit';
import { Api } from '../features/api/apiSlice';
import modal from '../features/modal/modalSlice';


export const store = configureStore({
  reducer: {
    [Api.reducerPath]: Api.reducer,
    modal
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
    
});



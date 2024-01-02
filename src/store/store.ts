import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import reducer from './reducers';


export const store = configureStore({ reducer });


/* Typing the redux toolkit */
/*----------------------------------------------------------------------------*/
export type RootState = ReturnType<typeof store.getState>;
export type TypedDispatch = typeof store.dispatch;
export type TypedThunk<ReturnType = void> =
  ThunkAction<ReturnType, RootState, unknown, Action<string>>;


export default store;

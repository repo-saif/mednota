import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { ReactNode } from 'react';
// import { ReactNode } from 'react';
// import { Provider, useDispatch, useSelector } from 'react-redux'
import { Provider, useSelector } from 'react-redux'
import { initialState } from './initial';

interface StoreProviderProps {
  children: ReactNode;
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      // increment: state => {
      //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
      //   // doesn't actually mutate the state because it uses the Immer library,
      //   // which detects changes to a "draft state" and produces a brand new
      //   // immutable state based off those changes
      //   state.value += 1
      // },
      // decrement: state => {
      //   state.value -= 1
      // },
      // incrementByAmount: (state, action) => {
      //   state.value += action.payload
      // }
    }
  })
  
  
  // const { increment } = counterSlice.actions;

export const useStore = () => {
    const appstore = useSelector((state: any) => state.counter)
    // const dispatch = useDispatch();
    return {
      appstore
     
    }
}

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})


export function StoreProvider ({ children }: StoreProviderProps) {
    return <Provider store={store}>{children}</Provider>
}
import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IInnitialState } from '@/types';






// let cachedData = Cookies.get("user")

// const cachedInnitialState = cachedData? JSON.parse(cachedData) as unknown as IInnitialState: null
// // needs to know the location of this slice in the state


const initialState: IInnitialState = {
  token: "",
  email: "",
  credits: 0,
  userId: "",
  isLoggedIn: false,
  fullName: ""
};

const userSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, data: PayloadAction<IInnitialState>) => {
      state = { ...data.payload, isLoggedIn: true };
      return state
    },

    logout: (state) => {
      state = { ...state, isLoggedIn: false }
      return state
    },

    userUpdate: (state, data: PayloadAction<{ fullName: string }>) => {
      state.fullName = data.payload.fullName
      return state
    },

    updateUserCreditBalance: (state, data: PayloadAction<{ credits: number }>) => {
      state.credits = data.payload.credits
      return state
    }
  },
});

export const { login, userUpdate, logout, updateUserCreditBalance } = userSlice.actions;

export default userSlice.reducer;

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { JwtPayload } from 'jwt-decode';

interface InitialState {
  token: null | string;
}


interface IUser extends JwtPayload {
  id: number;
  email: string;
}

const initialState: InitialState = {
  token: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedInUser: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
    logoutUser: (state) => {
      state.token = null;
    }
  }
});

export const { setLoggedInUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;

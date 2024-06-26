import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { JwtPayload, jwtDecode } from 'jwt-decode';

interface InitialState {
  user: null | IUser;
  token: null | string;
}


interface IUser extends JwtPayload {
  id: number;
  email: string;
  name: string;
  username: string;
  role: 'ADMIN' | 'USER';
}

const initialState: InitialState = {
  user: null,
  token: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedInUser: (state, action: PayloadAction<string>) => {
      const user = jwtDecode(action.payload) as IUser;

      state.token = action.payload
      state.user = user
    },
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
    }
  }
});

export const { setLoggedInUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;

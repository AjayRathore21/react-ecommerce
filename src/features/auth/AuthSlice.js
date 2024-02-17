import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkUser, createUser, signOut } from "./AuthAPI";
import { updateUser } from "../user/userAPI";

const initialState = {
  loggedInUser: null,
  status: "idle",
  error: null,
};

export const createUserAsync = createAsyncThunk(
  "user/createUser",
  async (amount) => {
    const response = await createUser(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const updateUserAsync = createAsyncThunk(
  "user/updateUser",
  async (update) => {
    const response = await updateUser(update);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const checkUserAsync = createAsyncThunk(
  "user/checkUser",
  async (userId) => {
    const response = await checkUser(userId);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const SignOutAsync = createAsyncThunk(
  "user/signOut",
  async (loginInfo) => {
    const response = await signOut(loginInfo);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        console.log(action.payload, "inside extrareducer!!");
        state.loggedInUser = action.payload;
        state.status = "succeeded";
      })
      .addCase(createUserAsync.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.loggedInUser = action.payload;
        state.status = "succeeded";
      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.loggedInUser = action.payload;
        state.status = "idle";
      })
      .addCase(updateUserAsync.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(SignOutAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(SignOutAsync.fulfilled, (state, action) => {
        state.loggedInUser = null;
        state.status = "idle";
      });
  },
});

export const { increment } = userSlice.actions;

export const selectLoggedInUser = (state) => state.auth.loggedInUser;
export const selectError = (state) => state.auth.error;

export default userSlice.reducer;

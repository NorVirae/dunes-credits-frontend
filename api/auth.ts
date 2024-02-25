import { login, userUpdate } from "@/redux/slices/userSlice";
import { RootState } from "@/redux/store";
import { IAuthInterface, ILoginResult, IUserUpdateData } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";

let nodeServerMicroServiceURL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_DEV_NODE_SERVER2_HOST
    : process.env.NEXT_PUBLIC_PROD_NODE_SERVER2_HOST;

export const handleLogin = createAsyncThunk(
  "users/login",
  async (userData: IAuthInterface, { rejectWithValue, dispatch }) => {
    const { email, password } = userData;
    const headers = {
      headers: { "content-type": "application/json" },
    };

    try {
      const url = `${nodeServerMicroServiceURL}/auth/login`;
      const result: AxiosResponse<ILoginResult, any> = await axios.post(
        url,
        { email, password },
        headers
      );

      dispatch(login(result.data));
      toast("Login was successful", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        type: "success",
        progress: undefined,
        theme: "light",
      });
      return result.data;
    } catch (error: any) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      if (error.response && error.response.data) {
        const data = error.response.data;

        toast(error.response.data?.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          type: "error",
          progress: undefined,
          theme: "light",
        });

        rejectWithValue(data);
        // do something with data
      }
    }
  }
);

export const handleRegister = createAsyncThunk(
  "users/register",
  async (userData: IAuthInterface, { rejectWithValue, dispatch }) => {
    const { email, password, name } = userData;
    const headers = {
      headers: { "content-type": "application/json" },
    };

    try {
      const url = `${nodeServerMicroServiceURL}/auth/register`;
      const result: AxiosResponse<ILoginResult, any> = await axios.post(
        url,
        { email, password, name },
        headers
      );

      dispatch(login(result.data));
      toast("Login was successful", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        type: "success",
        progress: undefined,
        theme: "light",
      });
      return result.data;
    } catch (error: any) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      if (error.response && error.response.data) {
        const data = error.response.data;

        toast(error.response.data?.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          type: "error",
          progress: undefined,
          theme: "light",
        });

        rejectWithValue(data);
        // do something with data
      }
    }
  }
);

export const updateUser = createAsyncThunk(
  "users/update",
  async (
    userData: IUserUpdateData,
    { rejectWithValue, dispatch, getState }
  ) => {
    const state = getState() as RootState;
    const { fullName } = userData;
    const headers = {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${state.user.token}`,
      },
    };

    try {
      const url = `${nodeServerMicroServiceURL}/users/upsert`;
      const result: AxiosResponse<ILoginResult, any> = await axios.put(
        url,
        {
          fullName,
          token: state.user.token,
        },
        headers
      );

      dispatch(
        userUpdate({
          fullName,
        })
      );
      toast("Update was successful", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        type: "success",
        progress: undefined,
        theme: "light",
      });
      return result.data;
    } catch (error: any) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      if (error.response && error.response.data) {
        const data = error.response.data;

        toast(error.response.data?.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          type: "error",
          progress: undefined,
          theme: "light",
        });

        rejectWithValue(data);
        // do something with data
      }
    }
  }
);

import { updateUserCreditBalance } from "@/redux/slices/userSlice";
import { RootState } from "@/redux/store";
import { ICreditsResult, ITransferFunds, ITransferFundsResult } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";

let nodeServerMicroServiceURL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_DEV_NODE_SERVER2_HOST
    : process.env.NEXT_PUBLIC_PROD_NODE_SERVER2_HOST;

export const fetchUserbalance = createAsyncThunk(
  "credits/update",
  async (_, { rejectWithValue, dispatch, getState }) => {
    const state = getState() as RootState;
    // const { userName,
    //     gameCat,
    //     about,
    //     fullName } = userData
    const headers = {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${state.user.token}`,
      },
    };

    try {
      const url = `${nodeServerMicroServiceURL}/credits/balance`;
      const result: AxiosResponse<ICreditsResult, any> = await axios.post(
        url,
        {
          token: state.user.token,
        },
        headers
      );

      dispatch(
        updateUserCreditBalance({
          credits: result.data.credits,
        })
      );

      return result.data;
    } catch (error: any) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      if (error.response && error.response.data) {
        const data = error.response.data;

        rejectWithValue(data);
        // do something with data
      }
    }
  }
);

export const transferFunds = createAsyncThunk(
  "wallet/transfer/funds",
  async (txData: ITransferFunds, { rejectWithValue, dispatch, getState }) => {
    const state = getState() as RootState;

    const headers = {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${state.user.token}`,
      },
    };

    try {
      const url = `${nodeServerMicroServiceURL}/credits/transfer`;
      const urlBalance = `${nodeServerMicroServiceURL}/credits/transfer`;
      const result: AxiosResponse<ITransferFundsResult, any> = await axios.post(
        url,
        {
          amount: txData.amount,
          recipientEmail: txData.recipientEmail,
        },
        headers
      );

      const resultBalance: AxiosResponse<ITransferFundsResult, any> =
        await axios.post(
          urlBalance,
          {
            token: state.user.token,
          },
          headers
        );

      dispatch(
        updateUserCreditBalance({
          credits: resultBalance.data.credits,
        })
      );

      toast("Funds Transfer was successful", {
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

        toast(error.response.data.message, {
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

import "@/styles/globals.css";
import "@/styles/login.css";
import "@/styles/home.css";
import "@/styles/layouts.css";



import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { NextUIProvider } from "@nextui-org/react";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
import store, { persistor } from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer />
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </PersistGate>
    </Provider>
  );
}

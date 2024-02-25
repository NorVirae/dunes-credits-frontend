import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ILayouts {
  children: ReactNode;
}

export interface ITransferModal {
  creditsAmount: number;
  setCreditsAmount: Dispatch<SetStateAction<number>>;
  recipient: string;
  setRecipient: Dispatch<SetStateAction<string>>;
  transferCredits: () => void;
  closeTransferModal: () => void;
}

export interface ICreditsResult {
  credits: number;
}

export interface IInnitialState {
  token: string;
  email: string;
  credits: number;
  userId: string;
  isLoggedIn: boolean;
  fullName?: string;
}

export interface ITransferFunds {
  amount: number;
  recipientEmail: string;
}

export interface ITransferFundsResult {
  credits: number;
  email: string;
}

export interface IAuthInterface {
  email: string;
  password: string;
  name?: string
}
export interface ILoginResult {
  token: string;
  email: string;
  credits: number;
  userId: string;
  isLoggedIn: boolean;
  fullName?: string;
}
export interface IUserUpdateData {
  fullName: string;
}

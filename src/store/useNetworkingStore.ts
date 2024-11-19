import {create} from 'zustand';

export interface Networking {
  errorMsgAndShowup: {errorMsg: string; showError: boolean};
  setErrorMsgAndShowup: (error: string, show: boolean) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useNetworkingStore = create<Networking>((set, get) => ({
  errorMsgAndShowup: {errorMsg: '', showError: false},
  setErrorMsgAndShowup: (error: string, show: boolean) => {
    set({errorMsgAndShowup: {errorMsg: error, showError: show}});
  },
  loading: false,
  setLoading: (loading: boolean) => {
    set({loading});
  },
}));

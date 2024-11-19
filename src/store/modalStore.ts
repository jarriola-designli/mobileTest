import {create} from 'zustand';

interface ModalState {
  isVisible: boolean;
  content: JSX.Element | null;
  showModal: (content: JSX.Element) => void;
  hideModal: () => void;
}

export const useModalStore = create<ModalState>(set => ({
  isVisible: false,
  content: null,
  showModal: content => set({isVisible: true, content}),
  hideModal: () => set({isVisible: false, content: null}),
}));

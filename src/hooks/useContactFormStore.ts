import { create } from "zustand";

interface ContactFormState {
  contactFormOpen: boolean;
  setContactFormOpen: (isOpen: boolean) => void;
}

export const useContactFormStore = create<ContactFormState>((set) => ({
  contactFormOpen: false,
  setContactFormOpen: (isOpen) => set({ contactFormOpen: isOpen }),
}));

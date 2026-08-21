import type { ReactNode } from 'react';
import { create } from 'zustand';

interface OpenSheetProps {
  title?: string;
  subtitle?: string;
  altCloseFn?: () => void;
  content: ReactNode;
}

interface SheetState {
  open: boolean;
  title?: string;
  subtitle?: string;
  content?: ReactNode;
  closeSheet: () => void;
  altCloseFn?: () => void;
  openSheet: (props: OpenSheetProps) => void;
}

export const useSheetStore = create<SheetState>((set) => ({
  open: false,
  title: undefined,
  subtitle: undefined,
  content: undefined,
  openSheet: ({ content, title, subtitle, altCloseFn }) =>
    set({ open: true, content, title, subtitle, altCloseFn }),
  closeSheet: () =>
    set({
      open: false,
      content: undefined,
      title: undefined,
      subtitle: undefined,
      altCloseFn: undefined,
    }),
}));

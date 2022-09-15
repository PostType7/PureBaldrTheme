import create from "zustand";
import produce from "immer";
import { deepSet } from "helpers/P7StateForm";

export const useThemeStore = create((set) => ({
  theme: {
    colorMode: "light",
    currentUser: {
      id: null,
      username: null,
    },
  },
  setAttr: (_in: { path: string; value: any }) =>
    set(
      produce((_) => {
        deepSet(_, _in.path, _in.value);
      })
    ),
}));

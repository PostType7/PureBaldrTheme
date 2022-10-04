import create from "zustand";
import produce from "immer";
import { deepSet, deepGet } from "helpers/P7StateForm";

export const useThemeStore = create((set) => ({
  theme: {
    colorMode: "light",
    message: {
      text: "",
      status: "success",
    },
    modal:{
      open:false,
      body:{}
    },
    currentUser: {
      id: null,
      username: null,
    },
    dropdown:false,
  },
  setAttr: (_in: { path: string; value: any }) =>
    set(
      produce((_) => {
        deepSet(_, _in.path, _in.value);
      })
    ),
  pushElement: (_in: { path: string; element: any }) =>
    set(
      produce((_) => {
        deepGet(_,_in.path).push(_in.element)
      })
    ),
}));

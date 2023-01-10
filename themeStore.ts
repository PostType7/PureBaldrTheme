import create from "zustand";
import produce from "immer";
import { deepSet, deepGet } from "helpers/P7StateForm";

export const useThemeStore = create((set) => ({
  theme: {
    refreshAppState:0,
    colorMode: "light",
    globalMessage: {
      text: "",
      status: "success",
    },
    formMessage: {
      text: "",
      status: "success",
    },
    modal: {
      bodyTarget: "",
    },
    toaster: {
      message: "",
      type:"success"
    },
    right: {
      bodyTarget: "",
    },
    currentUser: {
      id: null,
      username: null,
    },
    dropdown: false,
    customData: {
      selectedCompany: null,
      companies: [
        {
          name: "Kruger und sohns",
          tin: "DE5423210047",
          mainscoring: {
            first: 50,
            second: 20,
            third: 34,
            fourth: 24,
          },
          onBlacklist: false,
          verificationstatus: 0,
          merchantlimit: 300,
          sugestlimit: 30000,
          vatstatus: true,
          marketactivity: false,
          address: {
            street: "UL. JANA HENRYKA KOBROWSKIEGO 28",
            postal: "45-872",
            city: "BIAŁYSTOK",
            country: "DE",
          },
        },
      ],
      verifiedCompaniesIndex: [],
      blacklistedCompaniesIndex: [],
    },
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
        deepGet(_, _in.path).push(_in.element);
      })
    ),
  removeElement: (_in: { path: string; index: string }) =>
    set(
      produce((_) => {
        deepGet(_, _in.path).splice(_in.index, 1);
      })
    ),
}));

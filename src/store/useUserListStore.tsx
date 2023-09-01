import { create } from "zustand";
import { ItemListT } from "../types";

interface userListStoreT {
  itemList: ItemListT[];
  setItemList: (items: ItemListT[]) => void;
}

const initialState: ItemListT[] = [];

export const useUserListStore = create<userListStoreT>((set) => ({
  itemList: initialState,
  setItemList: (items) => {
    set((state) => ({ ...state, itemList: items }));
  },
}));

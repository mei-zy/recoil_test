import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

import type { ItemListT } from "../types";

type Props = {
  children: React.ReactNode;
};

type APIType = {
  list: ItemListT[];
  updateList: (items: ItemListT[]) => void;
};

const APIContext = createContext<APIType | null>(null);

const APIContextProvider = ({ children }: Props) => {
  const [list, setList] = useState<ItemListT[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      setList(data);
    };

    fetchData();
  }, []);

  const updateList = (items: ItemListT[]) => {
    setList(items);
  };

  return (
    <APIContext.Provider value={{ list, updateList }}>
      {children}
    </APIContext.Provider>
  );
};

export default APIContextProvider;

export function useAPI() {
  const context = useContext(APIContext);
  if (context === null) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}

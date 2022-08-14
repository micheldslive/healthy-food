import { IChildren, IHealthyFoodContext, IOptions } from "@/core/types";
import { createContext, useContext, useState } from "react";

const defaultOptionValues: IOptions = {
  menu: false, modal: false, loading: false, data: {}
}

const defaultHealthyFood: IHealthyFoodContext = {
  option: defaultOptionValues,
  setOption: () => {},
};

const HealthyFoodContext = createContext(defaultHealthyFood);

export const useHealthyFood = () => useContext(HealthyFoodContext);

export const HealthyFoodProvider = ({ children }: IChildren) => {
  const [option, setOption] = useState<IOptions>(defaultOptionValues);

  return (
    <HealthyFoodContext.Provider
      value={{
        option,
        setOption
      }}
    >
      {children}
    </HealthyFoodContext.Provider>
  );
};

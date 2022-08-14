import { IChildren, IHealthyFoodContext, IModalRegister } from "@/core/types";
import { createContext, useContext, useState } from "react";

const defaultOptionValues: IModalRegister = {
  menu: false, modal: false, loading: false, data: {}
}

const defaultHealthyFood: IHealthyFoodContext = {
  option: defaultOptionValues,
  setOption: () => {},
};

const HealthyFoodContext = createContext(defaultHealthyFood);

export const useHealthyFood = () => useContext(HealthyFoodContext);

export const HealthyFoodProvider = ({ children }: IChildren) => {
  const [option, setOption] = useState<IModalRegister>(defaultOptionValues);

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

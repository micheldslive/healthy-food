import { IChildren, IHealthyFoodContext, IModalRegister } from "@/core/types";
import { createContext, useContext, useState } from "react";

const defaultModalValues: IModalRegister = {
  menu: false, modal: false, data: {}
}

const defaultHealthyFood: IHealthyFoodContext = {
  option: defaultModalValues,
  setOption: () => {},
};

const HealthyFoodContext = createContext(defaultHealthyFood);

export const useHealthyFood = () => useContext(HealthyFoodContext);

export const HealthyFoodProvider = ({ children }: IChildren) => {
  const [option, setOption] = useState<IModalRegister>(defaultModalValues);

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

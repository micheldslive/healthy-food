import { IChildren, IHealthyFoodContext, IOptions, IRegister } from "@/core/types";
import { createContext, useContext, useState } from "react";

const defaultDataValues: IRegister = {
  name: "",
  cpf: "",
  birthday: "",
  cep: "",
  number: "",
  logradouro: "",
  complemento: "",
  bairro: "",
  localidade: "",
  uf: ""
}

const defaultOptionValues: IOptions = {
  menu: false, modal: false, loading: false, data: defaultDataValues
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

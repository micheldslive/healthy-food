import { IChildren, IHealthyFoodContext } from '@/core/types'
import { createContext, useContext, useState } from 'react'

const defaultHealthyFood: IHealthyFoodContext = {
  open: false,
  setOpen: () => false,
}

const HealthyFoodContext = createContext(defaultHealthyFood)

export const useHealthyFood = () => useContext(HealthyFoodContext)

export const HealthyFoodProvider = ({ children }: IChildren) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <HealthyFoodContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </HealthyFoodContext.Provider>
  )
}

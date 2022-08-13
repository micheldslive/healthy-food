import React from 'react'

export interface IChildren {
  children: React.ReactNode
}

export interface IHealthyFoodContext {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IStyledHeader {
  scroll?: boolean
  open?: boolean
}

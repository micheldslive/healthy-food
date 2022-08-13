import React from 'react'

export interface IChildren {
  children: React.ReactNode
}

export interface IHealthyFoodContext {
  option: IModalRegister
  setOption: React.Dispatch<React.SetStateAction<IModalRegister>>
}
export interface IModalRegister {
  menu: boolean
  modal: boolean
  data: IRegister
}

export interface IStyledHeader {
  scroll?: boolean
  open?: boolean
}

export interface ISlickArrow {
  currentSlide?: boolean
  slideCount?: boolean
  props?: ISlickProps
}

export interface ISlickProps {
  className: string
  style: {
    [key: string]: React.CSSProperties
  }
}

export interface IRegister {
  [key: string]: string
}

export interface IErrorHandler {
  errorHandler(promise: Promise<unknown>): Promise<unknown>
}
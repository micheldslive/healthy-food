import React from 'react'

export interface IChildren {
  children: React.ReactNode
}

export interface IHealthyFoodContext {
  option: IOptions
  setOption: React.Dispatch<React.SetStateAction<IOptions>>
}
export interface IOptions {
  menu: boolean
  modal: boolean
  loading: boolean
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

export interface ILocalStorage {
  get(key: string): IRegister | null
  set(key: string, data: string): void
}
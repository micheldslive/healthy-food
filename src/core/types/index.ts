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
import { useCallback, useEffect, useState } from "react"
import { data } from "@/mocks/data"
import { Hamburguer } from "@/components/hamburguer"
import * as C from "./styled"
import { useHealthyFood } from "@/context"
import { Menu } from "@/components/menu"

export const Header = () => {
  const [scroll, setScroll] = useState<boolean>(false)
  const { option, setOption } = useHealthyFood()
  const { header } = data

  const handleScroll = useCallback(() => {
    setScroll(window.scrollY > 90)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  return (
    <C.HeaderFull scroll={scroll}>
      <C.HeaderContainer>
        <C.Anchor
          onClick={() => setOption({ ...option, menu: false })}
          to="root"
          spy
          smooth
        >
          <C.HealthyLogo scroll={scroll} open={option.menu}>
            {header.logo}
          </C.HealthyLogo>
        </C.Anchor>
        <Menu />
        <Hamburguer />
      </C.HeaderContainer>
    </C.HeaderFull>
  )
}

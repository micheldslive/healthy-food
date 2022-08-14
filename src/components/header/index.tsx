import { useCallback, useEffect, useState } from "react"
import { data } from "@/mocks/data"
import { Hamburguer } from "@/components/hamburguer"
import * as C from "./styled"
import { useHealthyFood } from "@/context"

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
        <C.Nav>
          <C.UnlistContent open={option.menu}>
            <C.UnList>
              {header.menu.map(({ id, go, title }) => (
                <C.List key={id.toString()}>
                  <C.Anchor
                    onClick={() => setOption({ ...option, menu: !option.menu })}
                    to={go}
                    spy
                    smooth
                  >
                    {title}
                  </C.Anchor>
                </C.List>
              ))}
              <C.List>
                <C.RegisterAnchor
                  onClick={() =>
                    setOption({ ...option, menu: false, modal: true })
                  }
                >
                  {header.register}
                </C.RegisterAnchor>
              </C.List>
            </C.UnList>
          </C.UnlistContent>
        </C.Nav>
        <Hamburguer />
      </C.HeaderContainer>
    </C.HeaderFull>
  )
}

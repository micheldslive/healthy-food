import { useCallback, useEffect, useState } from 'react'
import { data } from 'src/mocks/data'
import { Hamburguer } from 'src/components/hamburguer'
import * as C from './styled'
import { useHealthyFood } from 'src/context'

export const Header = () => {
  const [scroll, setScroll] = useState<boolean>(false)
  const { open, setOpen } = useHealthyFood()
  const { header } = data

  const handleScroll = useCallback(() => {
    setScroll(window.scrollY > 90)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <C.HeaderFull scroll={scroll}>
      <C.HeaderContainer>
        <C.Anchor onClick={() => setOpen(false)} to='root' spy smooth>
          <C.HealthyLogo scroll={scroll} open={open}>{header.logo}</C.HealthyLogo>
        </C.Anchor>
        <C.Nav>
          <C.UnlistContent open={open}>
            <C.UnList>
              {header.menu.map(({ id, go, title }) => (
                <C.List key={id}>
                  <C.Anchor onClick={() => setOpen(!open)} to={go} spy smooth>
                    {title}
                  </C.Anchor>
                </C.List>
              ))}
              <C.List>
                <C.Anchor to='/register'>
                  <C.RegisterAnchor>{header.register}</C.RegisterAnchor>
                </C.Anchor>
              </C.List>
            </C.UnList>
          </C.UnlistContent>
        </C.Nav>
        <Hamburguer />
      </C.HeaderContainer>
    </C.HeaderFull>
  )
}

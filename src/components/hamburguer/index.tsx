import { useHealthyFood } from 'src/context'
import { Burguer, Bullet } from './styled'

export const Hamburguer = () => {
  const { open, setOpen } = useHealthyFood()
  return (
    <>
      <Burguer open={open} onClick={() => setOpen(!open)}>
        <Bullet />
        <Bullet />
        <Bullet />
      </Burguer>
    </>
  )
}

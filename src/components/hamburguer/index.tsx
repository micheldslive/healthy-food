import { useHealthyFood } from 'src/context'
import { Burguer, Bullet } from './styled'

export const Hamburguer = () => {
  const { option, setOption } = useHealthyFood()

  return (
    <>
      <Burguer open={option.menu} onClick={() => setOption({...option, menu: !option.menu})}>
        <Bullet />
        <Bullet />
        <Bullet />
      </Burguer>
    </>
  )
}

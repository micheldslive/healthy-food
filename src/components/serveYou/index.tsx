import { data } from "@/mocks/data"
import { memo } from "react"
import * as C from "./styled"

const ServeYou = () => {
  const { serve } = data

  return (
    <>
      <C.ServeYouFull>
        <C.ServeYouContainer>
          <C.ServeYouContent>
            <C.Content>
              <C.Title>{serve.title}</C.Title>
              {serve.items.map(({ id, text }) => (
                <C.Paragraph key={id.toString()}>{text}</C.Paragraph>
              ))}
              <C.Anchor>{serve.more}</C.Anchor>
            </C.Content>
          </C.ServeYouContent>
        </C.ServeYouContainer>
      </C.ServeYouFull>
    </>
  )
}

export default memo(ServeYou)

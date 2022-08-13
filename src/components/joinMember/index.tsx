import { data } from "@/mocks/data"
import { memo } from "react"
import * as C from "./styled"

const JoinMember = () => {
  const { join } = data

  return (
    <C.JoinMemberFull id="join">
      <C.JoinMemberContainer>
        <C.JoinMemberContent>
          <C.Title>{join.title}</C.Title>
          <C.Div>
            <C.Input placeholder={join.placeholder} />
            <C.Button>{join.button}</C.Button>
          </C.Div>
        </C.JoinMemberContent>
      </C.JoinMemberContainer>
    </C.JoinMemberFull>
  )
}

export default memo(JoinMember)

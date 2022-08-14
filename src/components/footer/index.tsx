import { memo } from "react"
import * as C from "./styled"

const Footer = () => {
  return (
    <C.FooterFull>
      <C.FooterContainer>
        <C.FooterContent>
          <C.Paragraph>Copyrights 2019 Stack. All Rights Reserved.</C.Paragraph>
          <C.Unlist>
            <C.List>
              <C.Anchor>Privacy Policy</C.Anchor>
            </C.List>
            <C.List>
              <C.Anchor>Terms and Conditions</C.Anchor>
            </C.List>
          </C.Unlist>
        </C.FooterContent>
      </C.FooterContainer>
    </C.FooterFull>
  )
}

export default memo(Footer)

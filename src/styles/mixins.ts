import { css } from 'styled-components'

// FlexBox('center', 'space-between', 'row', 'wrap', '5px')
export const FlexBox = (
  align?: string | undefined,
  justify?: string | undefined,
  direction?: string | undefined,
  wrap?: string | undefined,
  gap?: string | undefined,
) => css`
  display: flex;
  align-items: ${align};
  justify-content: ${justify};
  flex-direction: ${direction};
  flex-wrap: ${wrap};
  gap: ${gap};
`

// TextHealthy('color', 'font-family', 'font-size', 'font-wight', 'line-height', 'text-align', 'text-transform', 'letter-spacing')
// TextHealthy('black', 'Mulish', 16, '700', '100%', 'left', 'initial', '100')
export const TextHealthy = (
  color?: string | undefined,
  font?: string | undefined,
  size?: string | undefined,
  weight?: string | undefined,
  height?: string | undefined,
  align?: string | undefined,
  transform?: string | undefined,
  spacing?: string | undefined,
) => css`
  color: ${color};
  font-family: ${font};
  font-size: ${size};
  font-weight: ${weight};
  line-height: ${height};
  text-align: ${align};
  text-transform: ${transform};
  letter-spacing: ${spacing};
`

// Position('absolute', '0', '0', '0', '0')
export const Position = (
  position?: string | undefined,
  top?: string | undefined,
  right?: string | undefined,
  bottom?: string | undefined,
  left?: string | undefined,
) => css`
  position: ${position};
  top: ${top};
  left: ${left};
  right: ${right};
  bottom: ${bottom};
`

// BG('assets/imagem.svg', 'no-repeat', 'top left', 'contain', '45rem', 'relative')
export const BG = (
  url?: string | undefined,
  repeat?: string | undefined,
  bgPosition?: string | undefined,
  size?: string | undefined,
  height?: string | undefined,
  position?: string | undefined,
) => css`
  background: url(${url});
  background-repeat: ${repeat};
  background-position: ${bgPosition};
  background-size: ${size};
  height: ${height};
  position: ${position};
`

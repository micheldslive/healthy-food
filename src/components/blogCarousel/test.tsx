import "@/matchMedia.mock"
import { render } from "@testing-library/react"
import { BlogCarousel } from "./index"

describe("<BlogCarousel />", () => {
  it.each(["cardImage", "userImage"])(
    "should have a %p element",
    (expected) => {
      const { getByRole } = getRenderer()
      expect(getByRole("img", { name: expected })).toBeInTheDocument()
    }
  )
})

function getRenderer() {
  return render(<BlogCarousel />)
}

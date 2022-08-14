import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Header } from "./index"

describe("<Header />", () => {
  it.each(["burguer"])("should have a %p click", (expected) => {
    const { getByLabelText } = getRenderer()

    const button = getByLabelText(expected)

    expect(button).toBeInTheDocument()

    userEvent.click(button)

    expect(getByLabelText("false")).toBeInTheDocument()
  })

  it("should be have a logo and menu", () => {
    const { getByText } = getRenderer()

    expect(getByText("Healthy Food")).toBeInTheDocument()
    expect(getByText("BLOG")).toBeInTheDocument()
    expect(getByText("JOIN")).toBeInTheDocument()
    expect(getByText("REGISTER")).toBeInTheDocument()
  })
})

function getRenderer() {
  return render(<Header />)
}

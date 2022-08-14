import "@/matchMedia.mock"
import { render, screen } from "@testing-library/react"
import { BlogCarousel } from "./index"

describe("<BlogCarousel />", () => {
    it.each(["cardImage", "userImage"])("should have a %p element", (expected) => {
        getRenderer()
        expect(screen.getByRole("img", { name: expected })).toBeInTheDocument()
    })
})

function getRenderer() {
    return render(<BlogCarousel />)
}
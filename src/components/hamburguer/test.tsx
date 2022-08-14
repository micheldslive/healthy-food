import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Hamburguer } from "./index"

describe("<Hamburguer />", () => {
    it.each(["burguer"])("should have a %p click", (expected) => {
        const onClick = jest.fn()
        getRenderer()

        expect(onClick).not.toBeCalled()
     
        const button = screen.getByLabelText(expected)
        expect(button).toBeInTheDocument()
        
        userEvent.click(button)
    })
});

function getRenderer() {
    return render(<Hamburguer />);
}
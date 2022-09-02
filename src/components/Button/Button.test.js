import {render,screen} from "@testing-library/react";
import Button from './Button'
it("Should render the Button",()=>{
    render(<Button />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
});

import {render,screen} from "@testing-library/react";
import SearchBox from './SearchBox'

it("Should render the basic input fields",()=>{
    render(<SearchBox />);
    const inputs = screen.getAllByRole("textbox");
    inputs.forEach((input)=>{
        expect(input).toBeInTheDocument();
    })
})
import React from 'react';
import renderer from 'react-test-renderer';
import  { render, fireEvent } from "@testing-library/react";
import Display from "./Display";

describe("<Display />", () => {

    it("matches snapshot", () => {
        const tree = renderer.create(<Display />);
        expect(tree.toJSON()).toMatchSnapshot(); 
    });
    
});

describe("displays state", () => {
    it("shows unlocked and open", () => {
        const display = render(<Display locked={false} closed={false} />)
        expect(display.getByText(/unlocked/i))
        expect(display.getByText(/open/i))
    });
});
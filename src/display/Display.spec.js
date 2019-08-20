import React from 'react';
import renderer from 'react-test-renderer';
import  { render, fireEvent } from "@testing-library/react";
import Display from "./Display";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom/extend-expect";

//rtl lets us use: afterEach, beforeEach, cleanup 

describe("<Display />", () => {
    it("renders without crashing", () => {
        render(<Display/>);
    });
    
    it("open and unlocked",() => {
        const { getByText } = render(<Display closed={true} locked={false} />);
        getByText(/unlocked/i);
        getByText(/closed/i);
    });
    
    it("matches snapshot", () => {
        const tree = renderer.create(<Display />);
        expect(tree.toJSON()).toMatchSnapshot(); 
    });

});

describe("displays state", () => {
    it("shows unlocked and open", () => {
        const display = render(<Display locked={false} closed={false} />)
    //check that displays show unlocked and open upon page load
        expect(display.getByText(/unlocked/i));
        expect(display.getByText(/open/i));
    
    
    });
    it("has correct classnames", () => {
        const { getByText } = render(<Display closed={true} locked={false} />);
        const unlock = getByText(/unlocked/i);
        //need jest-dom extend-expect for .toHaveClass, but having trouble w/ import here
        expect(unlock).toHaveClass("green-led");

    })

});


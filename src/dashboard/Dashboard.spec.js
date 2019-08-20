import React from 'react';
import renderer from 'react-test-renderer';
import  { render, cleanup, fireEvent } from "@testing-library/react/pure";
import Dashboard from "./Dashboard";
import { id } from 'postcss-selector-parser';


describe("<Dashboard />", () => {   
    beforeEach(cleanup);
    it("renders without crashing", () => {
        render(<Dashboard />);
    });   

});

describe("<Dashboard /> state transitions", () => {

    const { getByText } = render(<Dashboard  />);

    it("default state is open and unlocked", () => {
        //verify open and unlocked, using regular expressions ^, $
        getByText(/^open$/i);
        getByText(/^unlocked$/i);
        getByText(/^lock gate$/i);
        getByText(/^close gate$/i);
    })
    
    it("open and unlocked to closed and unlocked", () => {
        const closeBtn = getByText(/^close gate$/i);
        fireEvent.click(closeBtn);
    //check display updated after click event:
        getByText(/^closed$/i);
        getByText(/^unlocked$/i);

        getByText(/^lock gate$/i);
        getByText(/^open gate$/i);
    })

});




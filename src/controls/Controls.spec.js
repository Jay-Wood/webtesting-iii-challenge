import React from 'react';
import renderer from 'react-test-renderer';
import  { render, fireEvent } from "@testing-library/react";
import Controls from "./Controls";

describe("<Controls />", () => {
    it("renders without crashing", () => {
        render(<Controls />);
    });

    it("matches snapshot", () => {
        const tree = renderer.create(<Controls />);
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it("open and unlocked", () => {
        const closeSpy = jest.fn();
        const lockSpy = jest.fn();

        const { getByText } = render(<Controls closed={false} locked={false} toggleClosed={closeSpy} toggleLocked={lockSpy}/>);
        const closeBtn = getByText(/close gate/i);
        const lockBtn = getByText(/lock gate/i);

        //checking button click events
        fireEvent.click(closeBtn);
        expect(closeSpy).toBeCalled();    

        //in Control.js, buttons are disabled based on closed and locked
        expect(closeBtn.disabled).toBeFalsy();
        expect(lockBtn.disabled).toBeTruthy();
    })
});


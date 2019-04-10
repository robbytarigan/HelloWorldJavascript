import React from 'react';
import {shallow} from 'enzyme';
import ReactModal from 'react-modal';
import Modal from './Modal';
jest.mock('react-modal');

// let ReactModal = require('react-modal');
// const {setAppElement} = jest.requireActual('react-modal');
// (ReactModal.setAppElement as jest.Mock).mockImplementation(() => jest.fn());

test('Div renders', () => {
    expect(shallow(<div>test</div>)).toMatchSnapshot();
});

test('Modal renders', () => {
    expect(shallow(<Modal />)).toMatchSnapshot();
    expect((ReactModal.setAppElement as jest.Mock).mock.calls.length).toBe(1);
});
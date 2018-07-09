import React, {Component} from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import Card from './Card';

test('Button component renders correctly', () => {
  const component = renderer
    .create(<Card/>)
    .toJSON();
  expect(component).toMatchSnapshot()
});

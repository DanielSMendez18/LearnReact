import React from 'react'
import { render } from '@testing-library/react'
import CounterApp from "../src/CounterApp";

describe('@CounterApp', () => {
  test('#should increment the counter by 1', () => {
    const {container} = render(<CounterApp name="nombredemo" value={4}/>);
    expect(container).toMatchSnapshot(); 
  })
})

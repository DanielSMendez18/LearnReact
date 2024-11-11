import React from 'react'
import { render, screen } from '@testing-library/react'
import CounterApp from '../src/CounterApp'

describe('@CounterApp', () => {
  test('#should increment the counter by 1', () => {
    const { container } = render(<CounterApp name="nombredemo" value={4} />)
    expect(container).toMatchSnapshot()
  })

  test('#should render the name in the Value section within the HTML', () => {
    const name = 'Harry Potter y la camara segreta'
    const { container, getByText } = render(
      <CounterApp name={name} value={4} />
    )

    expect(getByText('Item: ' + name)).toBeTruthy()

    const h3 = container.querySelector('#itemText')
    expect(h3.innerHTML).toContain(name)
  })

  test('#should the value selector have the value sent ', () => {
    const value = 5
    const name = 'Harry Potter y la camara segreta'

    const { container, getByTestId } = render(
      <CounterApp name={name} value={value} />
    )

    expect(getByTestId('test-value').innerHTML).toContain(value.toString())
  })
})

// Otra manera de hacer pruebas más simplificadas con SCREEN
describe('@CounterApp 2', () => {
  const name = 'Misión rescate'
  const value = 1

  test('#should to make match with the snapshop', () => {
    //Arrange
    const { container } = render(<CounterApp name={name} value={value} />)
    //Assert
    expect(container).toMatchSnapshot()
  })

  test('#should render the name in the Value section within the HTML', () => {
    //Arrange
    render(<CounterApp name={name} value={value} />)
    //Assert
    expect(screen.getByText('Item: ' + name)).toBeTruthy()
  })

  test('#should the value selector have the value sent ', () => {
    //Arrange
    render(<CounterApp name={name} value={value} />)
    //Assert
    expect(screen.getByTestId('test-value').innerHTML).toContain(
      value.toString()
    )
  })

  test('#should render the name in H4', () => {
    //Arrange
    render(<CounterApp name={name} value={value} />)
    //Assert
    expect(screen.getByRole('heading', { level: 4 }).innerHTML).toContain(name)
  })
})

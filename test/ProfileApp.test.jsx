import { fireEvent, render, screen } from '@testing-library/react'
import ProfileApp from '../src/ProfileApp'

describe('@ProfileApp', () => {
  const name = 'Globant'
  const country = 'ARG'

  test('#should to make match with the snapshop ', () => {
    //Arrange
    const { container } = render(<ProfileApp name={name} country={country} />)
    //Assert
    expect(container).toMatchSnapshot()
  })

  test('#should render the initial value to name in section Compañia', () => {
    //Arrange
    render(<ProfileApp name={name} country={country} />)
    //Assert
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(name)
  })

  test('#should update the name, after clicking "Actualizar nombre"', () => {
    //Arrange
    render(<ProfileApp name={name} country={country} />)
    //Act
    fireEvent.click(screen.getByRole('button', { name: 'update-name' }))
    const nameUpdated = screen.getByRole('heading', {
      name: 'name-user'
    }).innerHTML
    //Assert
    expect(nameUpdated).toContain('Daniel S.M')
  })

  test('#should increment the age value, after clicking "Aumentar Edad" ', () => {
    //Arrange
    render(<ProfileApp name={name} country={country} />)
    //Act
    fireEvent.click(screen.getByTestId('test-increment-year'))
    //Assert
    expect(screen.getByTestId('test-value-year').innerHTML).toContain('19')
  })

  test('#should add new hobby, after cliking "Agregar nuevo hobbie" button', () => {
    //Arrange
    render(<ProfileApp name={name} country={country} />)
    //Act
    const initialListHobbies = screen.getAllByRole('listitem')
    fireEvent.click(screen.getByRole('button', { name: 'add-hobby' }))
    const updatedListHobbies = screen.getAllByRole('listitem')
    //Assert
    expect(updatedListHobbies).toHaveLength(initialListHobbies.length + 1)
  })

  test('#should increment the score value, after clicking "Incrementar Score" ', () => {
    //Arrange
    render(<ProfileApp name={name} country={country} />)
    //Act
    fireEvent.click(screen.getByTestId('test-increase-score'))
    //Assert
    expect(screen.getByTestId('test-value-skill').innerHTML).toContain('1')
  })
})

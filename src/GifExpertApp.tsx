import { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState<string[]>([
    'Dragon Ball',
    'Naruto'
  ])

  console.log(categories)

  const addNewCategory = (newCategory: string) => {
    // setCategories((prevCategories) => [...prevCategories, newCategory])
    setCategories((prevCategories) => [newCategory, ...prevCategories])
  }

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>
      {/* inpu */}
      <AddCategory />

      <button onClick={() => addNewCategory('Diggimon')}>Agregar</button>
      {/* listado de Gif */}
      <ol>
        {categories.map((category, index) => {
          return <li key={index}>{category}</li>
        })}
      </ol>
      {/* Gif Item */}
    </>
  )
}

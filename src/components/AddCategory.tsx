import { ChangeEvent, FormEvent, useState } from 'react'

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState<string>('')

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(inputValue)
  }

  return (
    <>
      <form onSubmit={(event) => onSubmitForm(event)}>
        <input
          type="text"
          placeholder="Buscar gif"
          value={inputValue}
          onChange={(event) => onInputChange(event)}
        />
      </form>
    </>
  )
}

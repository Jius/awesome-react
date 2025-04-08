import { useEffect } from "react"
import { useState } from "react"
import {useJokeContext} from '../contexts/JokeContext'
import {Formik, Form, Field, ErrorMessage, useFormikContext} from 'formik'
import {object, string} from 'yup'
import {Loader} from './Loader'

// https://api.chucknorris.io/jokes/search?query={query}
const MyForm = () => {
  const {addJoke} = useJokeContext()

  const handleSubmit = async (values) => {
    const url = `https://api.chucknorris.io/jokes/search?query=${values.query}`
    const response = await fetch(url)
    const jokes = await response.json()
    if (jokes.result?.[0]) addJoke(jokes.result?.[0])
  }

  const initialValues = {
    query: ""
  }

  const mySchema = object({
    query: string().required().min(3)
  })

  return(
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={mySchema}>
        {({
            isSubmitting
        }) => <Form>
            <label htmlFor="query">Search</label>
            <Field name="query" id="query" />
            <ErrorMessage name="query" component="div" />
            {isSubmitting ? <Loader/> : <button type="submit">Yolo</button>}
        </Form>}
      </Formik>
    </>
  )
}

export {MyForm as Form} 
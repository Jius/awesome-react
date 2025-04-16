import { useEffect } from "react"
import { useState } from "react"
import {useJokeContext} from '../contexts/JokeContext'
import {Formik, Form, Field, ErrorMessage, useFormikContext} from 'formik'
import {object, string} from 'yup'
import {Loader} from './Loader'
import { useQuery } from "@tanstack/react-query"

// https://api.chucknorris.io/jokes/search?query={query}
const MyForm = () => {
  const [query, setQuery] = useState()
  const {addJoke} = useJokeContext()
  
  const {data, isLoading} = useQuery({
    staleTime: 300_000,
    gcTime: 600_000,
    queryKey: ['joke', 'search', query],
    queryFn: async () => {
      const url = `https://api.chucknorris.io/jokes/search?query=${query}`
      const response = await fetch(url)
      const jokes = await response.json()
      if (jokes.result?.[0]) addJoke(jokes.result?.[0])
      return jokes
    },
    enabled: Boolean(query)
  })

  console.log('query', {data, isLoading})

  const handleSubmit = async (values) => {
    setQuery(values.query)

    // if (jokes.result?.[0]) addJoke(jokes.result?.[0])
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
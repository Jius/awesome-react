import { useContext } from 'react'
import reactLogo from '../assets/react.svg'
import {JokeContext, useJokeContext} from '../contexts/JokeContext'

export const Loader = () => {
    const {jokes} = useJokeContext()
    return (
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    )
  }
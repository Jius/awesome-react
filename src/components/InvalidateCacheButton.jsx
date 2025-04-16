import {
    useQueryClient,
  } from '@tanstack/react-query'

export const InvalidateCacheButton = () => {
  const queryClient = useQueryClient()

  const handleClick = () => {
    queryClient.invalidateQueries(['joke', 'search'])
  }

  return (
    <button
      onClick={handleClick}
      className='button is-danger'>
        Invalidate cache
    </button>
  )
}
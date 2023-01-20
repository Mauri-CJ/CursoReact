import React from 'react'
import { memo } from 'react'

export const ShowIncrement = memo(({increment}) => {
  console.log("Render")
  return (
    <button className='btn btn-primary'
            onClick={() => increment(4)}
    >
        Incrementar
    </button>
  )
})

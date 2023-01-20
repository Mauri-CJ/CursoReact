import React, { memo } from 'react'

export const Small = memo(({value}) => {
  console.log('Renderizado')
  return (
    <small>{value}</small>
  )
}
)
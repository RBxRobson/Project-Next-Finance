import { useState } from 'react'

import * as S from './styles'

interface CounterProps {
  primary?: boolean
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  label: string
}

const Counter = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label
}: CounterProps) => {
  const [count, setCount] = useState(0)
  const mode = primary ? 'primary' : 'secondary'

  return (
    <S.Counter
      type="button"
      className={[size, mode].join(' ')}
      style={{ backgroundColor }}
      onClick={() => {
        setCount((count) => count + 1)
      }}
    >
      {label}
      <span data-testid="counter-view"> {count}</span>
    </S.Counter>
  )
}

export default Counter

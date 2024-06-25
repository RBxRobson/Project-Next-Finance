import { motion } from 'framer-motion'

type Props = {
  isOpen: boolean
  onClick: () => void
}

const HamburgerButton = ({ isOpen = false, onClick }: Props) => {
  const variant = isOpen ? 'opened' : 'closed'
  const size = 24
  const color = '#555'
  const strokeWidth = 1

  const top = {
    closed: {
      rotate: 0,
      translateY: 0
    },
    opened: {
      rotate: 210,
      translateY: 2
    }
  }

  const center = {
    closed: {
      opacity: 1,
      rotate: 0,
      translateY: 0
    },
    opened: {
      opacity: 0
    }
  }

  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0
    },
    opened: {
      rotate: -210,
      translateY: -2
    }
  }

  const lineProps = {
    stroke: color,
    strokeWidth: strokeWidth,
    vectorEffect: 'non-scaling-stroke',
    initial: 'closed',
    animate: variant,
    transition: { type: 'spring' }
  }

  return (
    <motion.svg
      viewBox={`0 0 ${size} 10`}
      overflow="hidden"
      preserveAspectRatio="none"
      width={size}
      height={size}
      onClick={onClick}
    >
      <motion.line
        x1="0"
        x2={size}
        y1="2"
        y2="2"
        variants={top}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={size}
        y1="5"
        y2="5"
        variants={center}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={size}
        y1="8"
        y2="8"
        variants={bottom}
        {...lineProps}
      />
    </motion.svg>
  )
}

export default HamburgerButton

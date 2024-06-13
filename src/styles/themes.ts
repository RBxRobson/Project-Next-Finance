export default {
  colors: {
    absoluteColors: {
      white: '#fff',
      black: '#000'
    },
    greenShades: {
      g_60: '#CAFF33',
      g_65: '#D1FF4C'
    },
    whiteShades: {
      w_90: '#E4E4E7',
      W_95: '#F1F1F3'
    },
    darkShades: {
      d_10: '#191919',
      d_11: '#1C1C1C',
      d_15: '#262626',
      d_70: '#b3b3b3'
    }
  },
  spacings: {
    small: '1rem',
    medium: '2rem',
    large: '3rem'
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semi_bold: 600,
    bold: 700
  },
  fontSize: {
    xxs: '16px',
    xs: '18px',
    sm: '20px',
    md: '22px',
    lg: '24px',
    lgmd: '30px',
    xl: '38px',
    xxl: '48px'
  },
  breakpoints: {
    xs: '320px', // Extra small devices (phones)
    sm: '576px', // Small devices (landscape phones)
    md: '768px', // Medium devices (tablets)
    lg: '992px', // Large devices (tablets)
    xl: '1200px', // Extra large devices (large desktops)
    xxl: '1400px' // Extra extra large devices (larger desktops)
  }
}

export const breakpoint = (size: string) => `@media (max-width: ${size})`

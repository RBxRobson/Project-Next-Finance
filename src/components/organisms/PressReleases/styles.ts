import styled, { css } from 'styled-components'

import { breakpoint } from '../../../styles/themes'

export const NotesList = styled.ul`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;

    // Breakpoint Desktop 992px
    ${breakpoint(theme.breakpoints.lg)} {
      grid-template-columns: 1fr;
      max-width: 800px;
      margin: 0 auto;
      text-align: start;
    }
  `}
`

export const Note = styled.li`
  ${({ theme }) => css`
    padding: 30px;
    border-radius: 40px 40px 16px 16px;
    background-color: ${theme.colors.darkShades.d_11};
    border: 1px solid ${theme.colors.darkShades.d_15};

    // Breakpoint Mobile 576px
    ${breakpoint(theme.breakpoints.sm)} {
      padding: 30px 16px;
    }

    img {
      max-width: 100%;
      border-radius: 30px 30px 12px 12px;
      margin-bottom: 50px;

      // Breakpoint Mobile 576px
      ${breakpoint(theme.breakpoints.sm)} {
        margin-bottom: 30px;
      }
    }

    h3 {
      font-size: ${theme.fontSize.lg};
      font-weight: ${theme.fontWeight.regular};
      margin-bottom: 24px;

      // Breakpoint Mobile 576px
      ${breakpoint(theme.breakpoints.sm)} {
        font-size: ${theme.fontSize.md};
      }
    }
  `}
`

export const TagsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;

    // Breakpoint Mobile 576px
    ${breakpoint(theme.breakpoints.sm)} {
      flex-wrap: wrap;
    }

    span {
      border-radius: 68px;
      border: 1px solid ${theme.colors.darkShades.d_15};
      background-color: ${theme.colors.darkShades.d_10};
      padding: 8px 16px;
      color: ${theme.colors.darkShades.d_70};
      font-size: ${theme.fontSize.xs};
      font-weight: ${theme.fontWeight.light};

      // Breakpoint Mobile 576px
      ${breakpoint(theme.breakpoints.sm)} {
        font-size: ${theme.fontSize.xxs};
        padding: 8px;
      }
    }
  `}
`

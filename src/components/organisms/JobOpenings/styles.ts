import styled, { css } from 'styled-components'

import { breakpoint } from '../../../styles/themes'

export const Vacancies = styled.ul`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-top: 80px;

    // Breakpoint Desktop 992px
    ${breakpoint(theme.breakpoints.lg)} {
      grid-template-columns: 1fr;
    }
  `}
`

export const Vacancy = styled.li`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.darkShades.d_11};
    border: 1px solid ${theme.colors.darkShades.d_15};
    border-radius: 16px;
    padding: 50px;
    text-align: start;

    // Breakpoint Desktop 576px
    ${breakpoint(theme.breakpoints.sm)} {
      padding: 24px;
    }

    h3,
    h4 {
      font-size: ${theme.fontSize.lgmd};
      font-weight: ${theme.fontWeight.semi_bold};
      margin-bottom: 22px;
    }

    h3 {
      // Breakpoint Desktop 576px
      ${breakpoint(theme.breakpoints.sm)} {
        text-align: center;
      }
    }

    h4 {
      font-size: ${theme.fontSize.lg};
    }

    button {
      width: fit-content;
      margin-top: auto;

      // Breakpoint Desktop 576px
      ${breakpoint(theme.breakpoints.sm)} {
        width: 90%;
        margin: 0 auto;
      }
    }
  `}
`

export const Description = styled.p`
  margin-bottom: 40px;
`

export const TagsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 50px;

    // Breakpoint Desktop 576px
    ${breakpoint(theme.breakpoints.sm)} {
      flex-direction: column;
    }
  `}
`

export const Tag = styled.span`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkShades.d_11};
    border-radius: 68px;
    border: 1px solid ${theme.colors.darkShades.d_15};
    padding: 8px 16px;
    font-size: ${theme.fontSize.xs};
    font-weight: ${theme.fontWeight.light};
    color: ${theme.colors.darkShades.d_70};
  `}
`

export const Requiriments = styled.div`
  margin-bottom: 30px;
`

export const Requirement = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  img {
    width: 24px;
    height: 24px;
  }
`

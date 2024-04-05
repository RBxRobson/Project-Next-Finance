import type { Meta, StoryObj } from '@storybook/react'

import Counter from '.'

// Mais informações sobre como configurar histórias em: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Counter', // Título da história
  component: Counter, // Componente associado à história
  parameters: {
    // Parâmetro opcional para centralizar o componente no Canvas. Mais informações: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered' // Configuração para centralizar o componente no Canvas
  },
  // Este componente terá uma entrada Autodocs gerada automaticamente: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'], // Tags para a documentação automática
  // Mais sobre argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' } // Definição de controle de cores para o argumento backgroundColor
  }
} satisfies Meta<typeof Counter>

export default meta
type Story = StoryObj<typeof meta>

// Mais sobre escrever histórias com args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true, // Definição de botão primário
    label: 'Contador em' // Rótulo do botão
  }
}

export const Secondary: Story = {
  args: {
    label: 'Contador em' // Rótulo do botão
  }
}

export const Large: Story = {
  args: {
    primary: true,
    size: 'large', // Definição de botão grande
    label: 'Contador em' // Rótulo do botão
  }
}

export const Small: Story = {
  args: {
    primary: true,
    size: 'small', // Definição de botão pequeno
    label: 'Contador em' // Rótulo do botão
  }
}

export const Warning: Story = {
  args: {
    primary: true, // Definição de botão primário
    label: 'Contador em', // Rótulo do botão
    backgroundColor: 'red' // Cor de fundo vermelha
  }
}

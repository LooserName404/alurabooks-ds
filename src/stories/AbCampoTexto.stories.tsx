import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AbCampoTexto, AbCampoTextoProps } from "../componentes/AbCampoTexto";

export default {
  title: 'Componentes/AbCampoTexto',
  component: AbCampoTexto,
  argTypes: {
    label: {
      control: 'text'
    }
  },
  parameters: { actions: { argTypesRegex: '^on.*' }}
} as ComponentMeta<typeof AbCampoTexto>

const Template: ComponentStory<typeof AbCampoTexto> = (args) => <AbCampoTexto {...args} />

export const Primario = Template.bind({})

Primario.args = {
  label: 'E-mail',
  placeholder: 'seuemail@maneiro.com.br',
} as AbCampoTextoProps
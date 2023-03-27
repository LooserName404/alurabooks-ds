import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AbModal, AbModalProps } from "../componentes/AbModal";

export default {
  title: 'Componentes/AbModal',
  component: AbModal
} as ComponentMeta<typeof AbModal>

const Template: ComponentStory<typeof AbModal> = (args) => <AbModal {...args} />

export const Padrao = Template.bind({})

Padrao.args = {
  aberta: true,
  titulo: 'Modal de Exemplo',
  children: <button style={{width: '500px'}}>Foobar</button>,
  onClose: () => {}
} as AbModalProps
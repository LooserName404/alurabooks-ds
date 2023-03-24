import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AbGrupoOpcoes, AbGrupoOpcoesProps } from '../componentes/AbGrupoOpcoes'

export default {
  title: 'Componentes/AbGrupoOpcoes',
  component: AbGrupoOpcoes
} as ComponentMeta<typeof AbGrupoOpcoes>

const Template: ComponentStory<typeof AbGrupoOpcoes> = (args) => <AbGrupoOpcoes {...args}/>

export const Padrao = Template.bind({})

Padrao.args = {
  opcoes: [
    { id: 1, titulo: 'E-book', corpo: 'R$ 00,00', rodape: '.pdf, .epub, .mobi' },
    { id: 2, titulo: 'Impresso', corpo: 'R$ 00,00', rodape: '.pdf, .epub, .mobi' },
    { id: 3, titulo: 'E-book + Impresso', corpo: 'R$ 00,00', rodape: '.pdf, .epub, .mobi' }
  ],
  valorPadrao: null,
  onChange: undefined
} as AbGrupoOpcoesProps

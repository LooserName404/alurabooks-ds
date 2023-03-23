import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AbCard } from "../componentes/AbCard";

export default {
  title: 'Componentes/AbCard',
  component: AbCard
} as ComponentMeta<typeof AbCard>

export const CardComponent = () => {
  return (
    <AbCard>
      <h1>Olá, eu sou um card</h1>
    </AbCard>
  )
}
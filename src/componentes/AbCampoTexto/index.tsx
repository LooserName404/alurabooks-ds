import React, { useState } from "react"
import styled from "styled-components"

export interface AbCampoTextoProps {
  label: string
  value: string
  placeholder: string
  type?: 'text' | 'email' | 'password' | 'date'
  onChange: (value: string) => void
}

const LabelEstilizada = styled.label`
  color: #002f52;
  display: block;
  font-weight: 700;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  margin-left: 16px;
  margin-bottom: 8px;
`

const InputEstilizado = styled.input`
  font-size: 16px;
  line-height: 24px;
  color: #002f52;
  padding: 8px 24px;
  border: 1px solid #002f52;
  border-radius: 45px;
  &:focus {
    outline: none;
  }
  width: 100%;
  box-sizing: border-box;
`

export const AbCampoTexto = ({ label, placeholder, value, type = 'text', onChange }: AbCampoTextoProps) => {
  return (
    <div>
      <LabelEstilizada>{label}</LabelEstilizada>
      <InputEstilizado type={type} onChange={event => onChange(event.target.value)} placeholder={placeholder} value={value} />
    </div>
  )
}
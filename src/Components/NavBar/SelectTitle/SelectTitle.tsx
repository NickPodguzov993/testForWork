import React from 'react'
import style from './SelectTitle.module.scss'
import { SelectIcon } from '../../../assets/SelectIcon'

type SelectType = {
  title: string
}

export const SelectTitle = (props: SelectType) => {
  return (
    <div className={style.selectTitle}>
      <SelectIcon />
      <p className={style.title}>{props.title}</p>
    </div>
  )
}

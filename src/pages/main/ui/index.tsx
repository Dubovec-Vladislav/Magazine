import React, { FC } from 'react'
import style from './index.module.scss'
import { Hello } from '../hello'
import { Header } from 'widgets/header'
import { BrandsLine } from 'shared/ui'
import { ClothRow } from 'features/cloth-row'

export const Main: FC = (props) => {
  return (
    <main className={style.block}>
      <div className={style.body}>
        <Header/>
        <Hello/>
        <BrandsLine/>
        <ClothRow/>
      </div>
    </main>
  );
};
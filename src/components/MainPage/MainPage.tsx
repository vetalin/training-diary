import React from 'react'
import * as S from './MainPage.styled'
import { TrainingProgramList } from 'components/TrainingProgram/TrainingProgramList'

export const MainPage: React.FC = () => {
  return (
    <S.MainPageContainer>
      <TrainingProgramList/>
    </S.MainPageContainer>
  )
}

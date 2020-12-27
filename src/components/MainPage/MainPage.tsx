import React from 'react'
import { CreateTraining } from 'components/CreateTraining/CreateTraining'
import { TrainingList } from 'components/TrainingList/TrainingList'
import * as S from './MainPage.styled'

export const MainPage: React.FC = () => {
  return (
    <S.MainPageContainer>
      <CreateTraining/>
      <TrainingList/>
    </S.MainPageContainer>
  )
}

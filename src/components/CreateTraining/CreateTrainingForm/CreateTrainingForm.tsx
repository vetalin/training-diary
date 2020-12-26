import React from 'react'
import * as Styled from './CreateTrainingForm.styled'
import { useStoreTraining } from 'store/training/store'
import { observer } from 'mobx-react'
import { Button } from '@material-ui/core'

export const CreateTrainingForm = observer(({}) => {
  const storeTraining = useStoreTraining()

  return (
    <Styled.TrainingForm>
      name: {storeTraining.training}
      <Button onClick={() => storeTraining.setTraining('button clicked')}>change training name</Button>
    </Styled.TrainingForm>
  )
})

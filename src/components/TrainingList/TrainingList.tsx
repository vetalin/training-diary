import React from 'react'
import { observer } from 'mobx-react'
import { useStoreTraining } from 'store/training/store'
import { Button } from '@material-ui/core'

export const TrainingList = observer(() => {
  const storeTraining = useStoreTraining()

  return (
    <React.Fragment>
      <div>name: {storeTraining.training}</div>
      <Button onClick={() => storeTraining.setTraining('button clicked')}>Click</Button>
    </React.Fragment>
  )
})

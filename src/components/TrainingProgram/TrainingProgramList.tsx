import React from 'react'
import { observer } from 'mobx-react'
import { useStoreTrainingProgram } from 'store/trainingProgram/store'
import { Button, Card, CardActions, CardContent, Fab, Typography } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { CreateTrainingProgram } from 'components/TrainingProgram/CreateTrainingProgram/CreateTrainingProgram'

export const TrainingProgramList = observer(() => {
  const trainingProgramsStore = useStoreTrainingProgram()

  const [isOpenedCreateModal, setIsOpenedCreateModal] = React.useState(false)

  return (
    <React.Fragment>
      <Typography component={'h1'}>Программы тренировок</Typography>
      {trainingProgramsStore.trainingPrograms.map((trainingProgram, idx) => (
        <Card key={`trainingProgram-${idx}`}>
          <CardContent>
            <Typography>
              {trainingProgram.name}
            </Typography>
            <Typography>
              {trainingProgram.description}
            </Typography>
            {trainingProgram.imageUrl && (<img src={trainingProgram.imageUrl} alt=""/>)}
          </CardContent>
          <CardActions>
            <Button>
              Подробнее
            </Button>
          </CardActions>
        </Card>
      ))}
      <Fab color="primary" onClick={() => setIsOpenedCreateModal(true)}>
        <Add/>
      </Fab>
      <CreateTrainingProgram isOpened={isOpenedCreateModal}/>
    </React.Fragment>
  )
})

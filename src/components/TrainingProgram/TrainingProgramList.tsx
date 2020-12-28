import React from 'react'
import { observer } from 'mobx-react'
import { useStoreTrainingProgram } from 'store/trainingProgram/store'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Fab, Typography } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { CreateTrainingProgram } from 'components/TrainingProgram/CreateTrainingProgram/CreateTrainingProgram'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  media: {
    height: 140
  }
})

export const TrainingProgramList = observer(() => {
  const styles = useStyles()
  const trainingProgramsStore = useStoreTrainingProgram()

  const [isOpenedCreateModal, setIsOpenedCreateModal] = React.useState(false)
  const closeModal = React.useCallback(() => setIsOpenedCreateModal(false), [])

  return (
    <React.Fragment>
      <Typography component={'h1'}>Программы тренировок</Typography>
      {trainingProgramsStore.trainingPrograms.map((trainingProgram, idx) => (
        <Card key={`trainingProgram-${idx}`} color={'good'}>
          <CardActionArea>
            <CardContent>
              {trainingProgram.imageUrl && (<CardMedia image={trainingProgram.imageUrl} className={styles.media}/>)}
              <Typography component={'h4'}>
                {trainingProgram.name}
              </Typography>
              <Typography>
                {trainingProgram.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button>
                Подробнее
              </Button>
            </CardActions>
          </CardActionArea>
        </Card>
      ))}
      <Fab color="primary" onClick={() => setIsOpenedCreateModal(true)}>
        <Add/>
      </Fab>
      <CreateTrainingProgram isOpened={isOpenedCreateModal} closeDialog={closeModal}/>
    </React.Fragment>
  )
})

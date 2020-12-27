import React from 'react'
import { observer } from 'mobx-react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Input,
  InputLabel,
  MenuItem,
  Select
} from '@material-ui/core'
import { useStoreTrainingProgram } from 'store/trainingProgram/store'
import { ITrainingTemplate } from 'types/TrainingTemplate'
import { createTrainingModel } from 'components/TrainingProgram/CreateTrainingProgram/createTrainingModel'
import * as S from './CreatingTraininProgram.styled'

export interface ICreateTrainingProgramProps {
  isOpened: boolean
}

export const CreateTrainingProgram = observer(({ isOpened }: ICreateTrainingProgramProps) => {
  const trainingProgramsStore = useStoreTrainingProgram()

  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [imageUrl, setImageUrl] = React.useState('')
  const [trainings, selectTrainings] = React.useState<Array<ITrainingTemplate>>([])

  const addTrainingProgram = React.useCallback(() => {
    createTrainingModel({
      name,
      description,
      imageUrl,
      trainings
    }, trainingProgramsStore.addTrainingProgram)
  }, [name, description, imageUrl, trainings, trainingProgramsStore])

  const selectTraining = React.useCallback((event: any) => {
    console.log(event.target.value)
  }, [])

  return (
    <React.Fragment>
      <Dialog open={isOpened}>
        <DialogTitle>Создание программы</DialogTitle>
        <DialogContent>
          <S.FormElement>
            <InputLabel>Название программы</InputLabel>
            <Input value={name} onChange={e => setName(e.target.value)}/>
          </S.FormElement>
          <S.FormElement>
            <InputLabel>Описание программы</InputLabel>
            <Input value={description} onChange={e => setDescription(e.target.value)}/>
          </S.FormElement>
          <S.FormElement>
            <InputLabel>Ссылка на картинку для программы</InputLabel>
            <Input value={imageUrl} onChange={e => setImageUrl((e.target.value))}/>
          </S.FormElement>
          <S.FormElement>
            <InputLabel>Выбрать тренировки в программу</InputLabel>
            <Select value={trainings} onChange={e => selectTraining(e)} multiple>
              <MenuItem>+ Создать тренировку</MenuItem>
            </Select>
          </S.FormElement>
        </DialogContent>
        <DialogActions>
          <Button>Отмена</Button>
          <Button color={'primary'} onClick={addTrainingProgram}>Создать</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
})

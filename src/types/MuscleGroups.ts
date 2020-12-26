export enum EArms {
  biceps = 'biceps',
  triceps = 'triceps',
  forearm = 'forearm'
}

export enum EFeet {
  quadriceps = 'quadriceps',
  hipBiceps = 'hipBiceps',
  gastrocnemius = 'gastrocnemius',
  buttock = 'buttock'
}

export enum EShoulders {
  frontDeltoid = 'frontDeltoid',
  backDeltoid = 'backDeltoid',
  middleDeltoid = 'middleDeltoid'
}

export enum EBack {
  trapezoid = 'trapezoid',
  latissimusDorsi = 'latissimusDorsi',
  longBackMuscle = 'longBackMuscle',
  rhomboid = 'rhomboid'
}

export type TMuscleGroup = EArms & EFeet & EShoulders & EBack

const initState = {
  appTest: 'test'
}

export default (state = initState, { type, payload }) => {
  switch (type) {
    case 'SET_APP_TEST': return {
      ...initState,
      appTest: payload
    }
  }
}

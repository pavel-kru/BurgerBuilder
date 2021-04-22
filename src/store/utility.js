export const updateState = (state, updatedProperties) => {
  return {
    ...state,
    ...updatedProperties
  }
}
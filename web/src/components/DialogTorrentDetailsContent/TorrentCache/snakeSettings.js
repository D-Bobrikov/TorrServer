export const readerColor = '#000'
export const rangeColor = '#afa6e3'

export const snakeSettings = {
  default: {
    borderWidth: 1,
    pieceSize: 14,
    gapBetweenPieces: 3,
    backgroundColor: '#fff',
    borderColor: '#dbf2e8',
    completeColor: '#00a572',
    progressColor: '#b3dfc9',
  },
  mini: {
    cacheMaxHeight: 340,
    borderWidth: 2,
    pieceSize: 23,
    gapBetweenPieces: 6,
    backgroundColor: '#dbf2e8',
    borderColor: '#6cc196',
    completeColor: '#4db380',
    progressColor: '#b3dfc9',
  },
}

export const createGradient = (ctx, percentage, snakeType) => {
  const { pieceSize, completeColor, progressColor } = snakeSettings[snakeType]
  const gradient = ctx.createLinearGradient(0, pieceSize, 0, 0)
  gradient.addColorStop(0, completeColor)
  gradient.addColorStop(percentage / 100, completeColor)
  gradient.addColorStop(percentage / 100, progressColor)
  gradient.addColorStop(1, progressColor)

  return gradient
}

export function distance(pointA, pointB) {
  const squaredHypotenuse = Math.pow((pointA[0] - pointB[0]), 2) + Math.pow((pointA[1] - pointB[1]), 2)
  return Math.sqrt(squaredHypotenuse)
}

export function getPointControl(pointA, pointB, CURVATURE = 1.17) {
  const magicNumber = CURVATURE + (distance(pointA, pointB) / 95)

  const getAxisPointControl = (a, b) => ((a + b) / 2) * (magicNumber)
  return [
    getAxisPointControl(pointA[0], pointB[0]),
    getAxisPointControl(pointA[1], pointB[1]),
  ]
}
interface TileCoordinate {
  row: number;
  column: number;
}

const coordinateToString = (coordinate: TileCoordinate) => `${coordinate.row},${coordinate.column}`;

export { coordinateToString };
export { TileCoordinate };

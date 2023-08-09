export type Padding = number | number[];

export type Point = {
  x: number;
  y: number;
  z?: number;
};

export type Bounds = {
  min: [number, number, number];
  max: [number, number, number];
  center: [number, number, number];
  halfExtents: [number, number, number];
};

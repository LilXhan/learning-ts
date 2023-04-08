export type Size = 'M' | 'S' | 'L' | 'XL'

export type Product = {
  title: string,
  createAt: Date, 
  stock: number,
  size?: Size
}
// Buyable.ts

export interface Buyable {
  readonly id: number,
  readonly name: string,
  readonly price: number,
  // getInfo(): void,
  discount?:number,
};
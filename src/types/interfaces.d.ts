export interface IBooksData {
  [key: string]: string
}

export interface IBook {
  title: string
  genre: string
  poster: string
  pages: number
  author: string
  price: number
  releaseDate?: Date | string
  tags?: string[]
  ratings?: number[]
}

export interface IAuthor {
  name: string
  age: number,
  country: string,
  books: IBook[]
}

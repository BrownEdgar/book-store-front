export interface IBooksData {
  [key: string]: string
}
export interface IAuthor {
  name: string
  age: number,
  country: string,
  books: IBook[],
  avatar: any
}

export interface IBook {
  _id: string
  title: string
  genre: string
  pages: number
  poster: string
  author: IAuthor
  price: number
  releaseDate?: Date | string
  tags?: string[]
  ratings?: number[]
}



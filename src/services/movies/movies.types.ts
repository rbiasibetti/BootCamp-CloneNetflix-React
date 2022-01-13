export type MoviesList = {
  page: number,
  limit: number,
  previousPage: number,
  nextPage: number,
  totalItems: number,
  totalPages: number,
  data: [
    {
      _id: string,
      name: string,
      category: string,
      description: string,
      media_type: string,
      poster: string,
      backdrop: string,
      __v: number,
      createdAt: string,
      updatedAt: string
    }]
  }
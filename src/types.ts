export interface Place {
  place_name: string
  description: string
}

export interface ApiResponse<T> {
  message: string
  data: T
}

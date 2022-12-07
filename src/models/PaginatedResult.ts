export interface PaginatedResult<T> {
  page: string;
  results: T;
  total_pages: number;
  total_results: number;
}

export interface MovieListResponse {
    total_pages: number;
    total_results: number;
    page: number;
    results: MovieListItem[]
}

export type MovieListItem = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date?: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export type Genre = {
    id: number;
    name: string
}

export type ProductionCompany = {
    id: number;
    name: string;
    logo_path: string;
    origin_country: string;
}

export type MovieResponse = {
    budget: number;
    genres: Genre[]
    homepage: string;
    id: number;
    imdb_id?: string;
    original_language: string;
    popularity: number;
    poster_path: string;
    tagline: string;
    overview: string;
    production_companies: ProductionCompany[]
    release_date: string;
    title: string;
    revenue: number;
    runtime: number;
    vote_average: number;
    vote_count: number;
}
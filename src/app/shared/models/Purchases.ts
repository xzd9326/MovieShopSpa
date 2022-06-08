export interface Purchases {
    userId: number;
    totalMoviesPurchased: number;
    purchasedMovies: PurchasedMovie[];
}

export interface PurchasedMovie {
    id: number;
    title: string;
    posterUrl: string;
    releaseDate: string;
}


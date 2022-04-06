const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '788e2259f7f2257645cc8a2c9d6cc569',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;
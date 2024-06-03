import { fetchGenres } from '../../services/api.js';

const iconGenres = [
"fas fa-fist-raised",
"fas fa-hiking",
"fas fa-film",
"fas fa-laugh",
"fas fa-bomb",
"fas fa-book",
"fas fa-theater-masks",
"fas fa-users",
"fas fa-dragon",
"fas fa-landmark",
"fas fa-ghost",
"fas fa-music",
"fas fa-search",
"fas fa-heart",
"fas fa-rocket",
"fas fa-tv",
"fas fa-user-secret",
"fas fa-bomb",
"fas fa-hat-cowboy",
]
//crear un constante que agregue en orden el icono en className 

function getGenresIcons(genres){
    return genres.map((genre, index) => {
        return { id: genre.id, name: genre.name, className: iconGenres[index] };
    })
}    




export {getGenresIcons};
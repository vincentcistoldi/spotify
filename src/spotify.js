//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

export const authEndpoint = 'https://accounts.spotify.com/authorize';

//const redirectUri = "https://spotify-like-ef9f5.web.app"; //Pour le deploy Firebase
const redirectUri = "http://localhost:3000/redirect"; //Ajouter callback sinon fonctionne pas, demander au prof 
const clientId = "cbc9d0826c174d3da6efcb9ed07805cc"; //Mon client spotify

//Permissions spotify
const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
    'playlist-modify-public',
    'playlist-modify-private',
    'playlist-read-private',
    'playlist-read-collaborative',
    'user-library-modify',
    'user-library-read'
];


//export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join('%20')}&response_type=token&show_dialog=true`;
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

//Pour récupérer le token de l'URL puis le hacher par sécurité
export const getAccessTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial
        }, {});
};


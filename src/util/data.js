import { isUndefined } from 'util';
const fs = window.require('fs');

const PATH = 'data/playlists.json';

let data = undefined;

// read and save
function reloadData() {
    if (!fs.existsSync(PATH)) {
        data = {
            playlists: []
        };
        fs.writeFileSync(PATH, JSON.stringify(data, null, 4));
    }
    else
        data = JSON.parse(fs.readFileSync(PATH));
}

export function save() {
    fs.writeFileSync(JSON.stringify(data, null, 4));
}

// get and set
export function get() {
    if (isUndefined(data)) reloadData();
    return data;
}

export function set(newData) {
    data = newData;
}

// auxillary functions
export function getPlaylists() {
    return get().playlists;
}

export function addPlaylist(list) {
    if (isUndefined(data)) reloadData();
    data.playlists.push(list);
}

export function makeNewPlaylist() {
    let playlist = {
        name: `New Playlist ${data.playlists.length}`,
        tracks: []
    };

    data.playlists.push(playlist);
    return playlist;
}

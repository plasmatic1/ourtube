import { isUndefined } from 'util';
const fs = window.require('fs');

const PATH = 'data/playlists.json';

let data = undefined;

function reloadData() {
    data = JSON.parse(fs.readFileSync(PATH));
}

export function get() {
    if (isUndefined(data)) reloadData();
    return data;
}

export function set(newData) {
    data = newData;
}

export function save() {
    fs.writeFileSync(JSON.stringify(data, null, 4));
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

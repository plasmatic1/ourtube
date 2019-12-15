import { isUndefined } from 'util';
const fs = window.require('fs');

const CONFIG_PATH = 'config.json';
const REQUIRED_KEYS = ['apiKey'];

let config = undefined;

function checkConfig(config) {
    for (const key of REQUIRED_KEYS) {
        if (isUndefined(config[key]))
            throw new Error(`Missing key ${key} from config!`);
    }
}

export function loadConfig() {
    if (!fs.existsSync(CONFIG_PATH))
        throw new Error(`Config file "${CONFIG_PATH}" does not exist!`);
    else {
        config = JSON.parse(fs.readFileSync(CONFIG_PATH));
        checkConfig(config);
    }
}

export function getConfig() {
    if (isUndefined(config))
        loadConfig();
    return config;
}

import { writable, type Updater, get } from 'svelte/store';
import { browser } from '$app/environment';

export function themeStore(t: Theme) {
    const theme = writable<Theme>(t);
    const { subscribe, set } = theme;
    browser && localStorage.theme && set(localStorage.theme)

    return {
        subscribe,
        set: (value: Theme) => {
            browser && localStorage.setItem('theme', value);
            set(value)
        },
        update: (callback: Updater<Theme>) => {
            const updated = callback(get(theme))
            browser && localStorage.setItem('theme', updated);
            set(updated)
        }
    }
}

const theme = themeStore(browser ? window.localStorage.getItem('theme') as Theme ?? 'system' : 'system')

export { theme };
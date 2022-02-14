import { writable } from 'svelte/store';

export const viewSelectorOpen = writable(false);
export const selectedView = writable(null);

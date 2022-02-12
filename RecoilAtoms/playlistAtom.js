import {
  atom,
} from "recoil";

// An atom represents a piece of state. Atoms can be read from and written to from any component.

// Components that read the value of an atom are implicitly subscribed to that atom, so any atom updates will result in a re-render of all components subscribed to that atom

export const playlistState = atom({
  key: "playlistState", 
  default: null,
});

export const playlistIdState = atom({
  key: "playlistIdState", // unique ID
  default: "1nMEGZCCnPT8pTB9FI5HmE", // default playlist
});

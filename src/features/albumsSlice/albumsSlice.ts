import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface ISortOptions {
  dir: "asc" | "desc";
  key: "id" | "date" | "bandName" | "albumName";
}

export interface IAlbum {
  id: string;
  date: string;
  bandName: string;
  albumName: string;
  isBest?: boolean;
}

export interface IAlbums {
  albums: IAlbum[];
}

const initialState: IAlbums = {
  albums: [],
};

export const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    addAlbum(state, { payload }) {
      state.albums.push(payload);
    },
    removeAlbum(state, { payload }) {
      state.albums = state.albums.filter((album) => album.id !== payload);
    },
    toggleBestStatus(state, { payload }) {
      const albumIndex = state.albums.findIndex(
        (album) => album.id === payload
      );
      state.albums[albumIndex].isBest = !state.albums[albumIndex].isBest;
    },
    sort(state, { payload }: PayloadAction<ISortOptions>) {
      const { dir, key } = payload;
      switch (true) {
        case dir === "asc" && key === "id":
          state.albums = state.albums.sort((a, b) =>
            b.id === a.id ? 0 : b.id > a.id ? -1 : 1
          );
          break;
        case dir === "desc" && key === "id":
          state.albums = state.albums.sort((a, b) =>
            b.id === a.id ? 0 : b.id < a.id ? -1 : 1
          );
          break;
        case dir === "asc" && key === "date":
          state.albums = state.albums.sort((a, b) =>
            b.date === a.date ? 0 : b.date > a.date ? -1 : 1
          );
          break;
        case dir === "desc" && key === "date":
          state.albums = state.albums.sort((a, b) =>
            b.date === a.date ? 0 : b.date < a.date ? -1 : 1
          );
          break;
        case dir === "asc" && key === "bandName":
          state.albums = state.albums.sort((a, b) =>
            b.bandName === a.bandName ? 0 : b.bandName > a.bandName ? -1 : 1
          );
          break;
        case dir === "desc" && key === "bandName":
          state.albums = state.albums.sort((a, b) =>
            b.bandName === a.bandName ? 0 : b.bandName < a.bandName ? -1 : 1
          );
          break;
        case dir === "asc" && key === "albumName":
          state.albums = state.albums.sort((a, b) =>
            b.albumName === a.albumName ? 0 : b.albumName > a.albumName ? -1 : 1
          );
          break;
        case dir === "desc" && key === "albumName":
          state.albums = state.albums.sort((a, b) =>
            b.albumName === a.albumName ? 0 : b.albumName < a.albumName ? -1 : 1
          );
          break;
        default:
          return;
      }
    },
  },
});

export const { addAlbum, removeAlbum, toggleBestStatus, sort } =
  albumsSlice.actions;

export const selectAlbum = (state: RootState) => state.albums;

export default albumsSlice.reducer;

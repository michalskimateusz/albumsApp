import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

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
  layout: "list" | "grid";
}

const initialState: IAlbums = {
  albums: [],
  layout: "list",
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
        case dir === "desc" && key === "id":
          state.albums = state.albums.sort((a, b) =>
            b.id.toLowerCase() === a.id.toLowerCase()
              ? 0
              : b.id.toLowerCase() > a.id.toLowerCase()
              ? -1
              : 1
          );
          break;
        case dir === "asc" && key === "id":
          state.albums = state.albums.sort((a, b) =>
            b.id.toLowerCase() === a.id.toLowerCase()
              ? 0
              : b.id.toLowerCase() < a.id.toLowerCase()
              ? -1
              : 1
          );
          break;
        case dir === "desc" && key === "date":
          state.albums = state.albums.sort((a, b) =>
            b.date.toLowerCase() === a.date.toLowerCase()
              ? 0
              : b.date.toLowerCase() > a.date.toLowerCase()
              ? -1
              : 1
          );
          break;
        case dir === "asc" && key === "date":
          state.albums = state.albums.sort((a, b) =>
            b.date.toLowerCase() === a.date.toLowerCase()
              ? 0
              : b.date.toLowerCase() < a.date.toLowerCase()
              ? -1
              : 1
          );
          break;
        case dir === "desc" && key === "bandName":
          state.albums = state.albums.sort((a, b) =>
            b.bandName.toLowerCase() === a.bandName.toLowerCase()
              ? 0
              : b.bandName.toLowerCase() > a.bandName.toLowerCase()
              ? -1
              : 1
          );
          break;
        case dir === "asc" && key === "bandName":
          state.albums = state.albums.sort((a, b) =>
            b.bandName.toLowerCase() === a.bandName.toLowerCase()
              ? 0
              : b.bandName.toLowerCase() < a.bandName.toLowerCase()
              ? -1
              : 1
          );
          break;
        case dir === "desc" && key === "albumName":
          state.albums = state.albums.sort((a, b) =>
            b.albumName.toLowerCase() === a.albumName.toLowerCase()
              ? 0
              : b.albumName.toLowerCase() > a.albumName.toLowerCase()
              ? -1
              : 1
          );
          break;
        case dir === "asc" && key === "albumName":
          state.albums = state.albums.sort((a, b) =>
            b.albumName.toLowerCase() === a.albumName.toLowerCase()
              ? 0
              : b.albumName.toLowerCase() < a.albumName.toLowerCase()
              ? -1
              : 1
          );
          break;
        default:
          return;
      }
    },
    toggleView(state, { payload }) {
      if (payload === "list") {
        state.layout = "list";
      }
      if (payload === "grid") {
        state.layout = "grid";
      }
    },
  },
});

export const { addAlbum, removeAlbum, toggleBestStatus, sort, toggleView } =
  albumsSlice.actions;

export const selectAlbum = (state: RootState) => state.albums;

export default albumsSlice.reducer;

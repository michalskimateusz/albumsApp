import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface IAlbums {
  albums: [];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: IAlbums = {
  albums:[],
  status: 'idle',
};


export const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
  },

});

export const {  } = albumsSlice.actions;

export const selectAlbum = (state: RootState) => state.albums;


export default albumsSlice.reducer;

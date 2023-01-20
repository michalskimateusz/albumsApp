export interface IAlbum {
  id: string;
  date: string;
  bandName: string;
  albumName: string;
}

export const albums: IAlbum[] = [
  {
    id: "1",
    date: "2023-01-20",
    bandName: "Limp Bizkit",
    albumName: "Three dollar bill yall",
  },
  {
    id: "2",
    date: "2022-01-20",
    bandName: "Korn",
    albumName: "Life is Peachy",
  },
  {
    id: "3",
    date: "2024-01-20",
    bandName: "Karnivool",
    albumName: "Themata",
  },
  {
    id: "4",
    date: "2025-01-20",
    bandName: "Pleymo",
    albumName: "Episode 2: Medicine Cake",
  },
  {
    id: "5",
    date: "2020-01-20",
    bandName: "Gojira",
    albumName: "LEnfant Souvages",
  },
];

export const favAlbums: IAlbum[] = [];

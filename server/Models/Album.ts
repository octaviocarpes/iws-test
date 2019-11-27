export interface Album {
  name: string;
  image: string;
  releasedDate: Date;
  band: string;
  tracks: [
    {
      name: string;
      duration: number;
      id: string;
    },
  ];
  id: string;
}

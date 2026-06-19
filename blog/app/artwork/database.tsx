type Show = {
  title: string;
  location: string;
  date: string;
  pieces: Artwork[];
};
type Artwork = {
  title: string;
  year: string;
  material: string;
  size: string;
  imageURL: string;
};
export const database: { [key: string]: Show } = {
  brass_tax: {
    title: "Brass Tacks",
    location: "Anglim/Trimble, San Francisco",
    date: "June 2022",
    pieces: [
      {
        title: "Dwyer. Constellation of Four, 2024",
        year: "2024",
        material: "Cotton yarn, linen yarn, aluminum, steel",
        size: "14h x 14w x 12d inches",
        imageURL:
          "/images/Rupert/DSC05694.JPG",
      },
            {
        title: "Dwyer. Constellation of Four, 2024",
        year: "2024",
        material: "Cotton yarn, linen yarn, aluminum, steel",
        size: "14h x 14w x 12d inches",
        imageURL:
          "/images/Rupert/DSC05696.JPG",
      },
            {
        title: "Dwyer. Constellation of Four, 2024",
        year: "2024",
        material: "Cotton yarn, linen yarn, aluminum, steel",
        size: "14h x 14w x 12d inches",
        imageURL:
          "/images/Rupert/DSC05698.JPG",
      },      {
        title: "Dwyer. Constellation of Four, 2024",
        year: "2024",
        material: "Cotton yarn, linen yarn, aluminum, steel",
        size: "14h x 14w x 12d inches",
        imageURL:
          "/images/Rupert/DSC05700.JPG",
      },      {
        title: "Dwyer. Constellation of Four, 2024",
        year: "2024",
        material: "Cotton yarn, linen yarn, aluminum, steel",
        size: "14h x 14w x 12d inches",
        imageURL:
          "/images/Rupert/DSC05701.JPG",
      },
    ],
  },
  mobilizing_force: {
    title: "A Mobilizing Force",
    location: "Volume Gallery, Chicago",
    date: "November 2024",
    pieces: [
      {
        title: "Dwyer. Constellation of Four, 2024",
        year: "2024",
        material: "Cotton yarn, linen yarn, aluminum, steel",
        size: "14h x 14w x 12d inches",
        imageURL:
          "/Users/jules/workspace/ricki-website/blog/public/assets/images/MobalizingForce/_DSC0111.jpeg",
      },
    ],
  },
  other: {
    title: "Other",
    location: "",
    date: "",
    pieces: [
      {
        title: "Dwyer. Constellation of Four, 2024",
        year: "2024",
        material: "Cotton yarn, linen yarn, aluminum, steel",
        size: "14h x 14w x 12d inches",
        imageURL:
          "/Users/jules/workspace/ricki-website/blog/public/assets/images/Rupert/DSC05694.JPG",
      },
    ],
  },
};

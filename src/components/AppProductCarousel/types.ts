export type Product = {
  id: string;
  imageSrc: string;
  title: string;
  subtitle: string;
  rating: number;
  price: number;
  backdropImages: {
    left: string;
    right: string;
    bottom: string;
  };
  styles: {
    backgroundColor: string;
  };
};

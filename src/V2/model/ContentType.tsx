export interface ContentType {
  hero: {
    title: string;
    paragraphs: string[];
    bgimage: string | null;
  };
  about: {
    paragraphs: string[];
    listheader: string;
    listitems: string[];
    aboutimage: string | null;
  };
  ourservices: {
    title: string;
    services: {
      title: string;
      listitems: string[];
    }[];
  };
  prices: {
    type: string;
    data: {
      title: string;
      listitems: {
        type: string;
        price: number;
      }[];
    };
  }[];
}

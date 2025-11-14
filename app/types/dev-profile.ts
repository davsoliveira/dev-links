interface ImageProps {
  alt: string | null | undefined;
  copyright: string | null | undefined;
  dimensions: {
    width: number;
    height: number;
  };
  edit: {
    background: string;
    x: number;
    y: number;
    zoom: number;
  };
  id: string;
  url: string;
}

interface LinksProps {
  key: string;
  link_type: string;
  text: string;
  url: string;
}

interface DataProps {
  davi_avatar: ImageProps;
  davi_avatar_dark: ImageProps;

  link_list: LinksProps[];
  social_media: LinksProps[];

  name: string;
  username: string;
}

export interface ProfileSectionProps {
  data: DataProps;
}

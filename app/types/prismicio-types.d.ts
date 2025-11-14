export namespace Content {
  export type AuthorDocumentData = {
    name: prismic.KeyTextField;
    davi_avatar: prismic.ImageField;
    davi_avatar_dark: prismic.ImageField;
    username: prismic.KeyTextField;
    link_list: prismic.LinkField;
    social_media: prismic.LinkField;
  };

  export type AuthorDocument = prismic.PrismicDocumentWithUID<
    AuthorDocumentData,
    "author"
  >;
}

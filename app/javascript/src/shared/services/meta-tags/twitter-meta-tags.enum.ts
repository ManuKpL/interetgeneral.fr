enum TwitterMetaTags {
  CARD        = 'twitter:card',
  TITLE       = 'twitter:title',
  DESCRIPTION = 'twitter:description',
  URL         = 'twitter:url',
  IMAGE       = 'twitter:image',
  SITE        = 'twitter:site',
}

namespace TwitterMetaTags {
  export function values() {
    return [
      TwitterMetaTags.CARD,
      TwitterMetaTags.TITLE,
      TwitterMetaTags.DESCRIPTION,
      TwitterMetaTags.URL,
      TwitterMetaTags.IMAGE,
      TwitterMetaTags.SITE,
    ];
  }
}

export {
  TwitterMetaTags,
};

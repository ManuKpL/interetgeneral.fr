enum OpenGraphMetaTags {
  TYPE        = 'og:type',
  TITLE       = 'og:title',
  DESCRIPTION = 'og:description',
  URL         = 'og:url',
  IMAGE       = 'og:image',
}

namespace OpenGraphMetaTags {
  export function values() {
    return [
      OpenGraphMetaTags.TYPE,
      OpenGraphMetaTags.TITLE,
      OpenGraphMetaTags.DESCRIPTION,
      OpenGraphMetaTags.URL,
      OpenGraphMetaTags.IMAGE,
    ];
  }
}

export {
  OpenGraphMetaTags,
};

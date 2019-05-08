enum OpenGraphMetaTags {
  TITLE       = 'og:title',
  DESCRIPTION = 'og:description',
  URL         = 'og:url',
  IMAGE       = 'og:image',
}

namespace OpenGraphMetaTags {
  export function values() {
    return [
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

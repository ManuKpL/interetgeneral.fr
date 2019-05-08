import { Injectable } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';

import { TwitterMetaTags } from './twitter-meta-tags.enum';
import { OpenGraphMetaTags } from './open-graph-meta-tags.enum';

@Injectable()
export default class MetaTagsService {

  public constructor(private readonly META: Meta) { }

  public setTwitterTags(values: TwitterMetaTagsValues) {
    const twitterMetaDefinitions = this._mapTwitterMetaDefinitions(values);

    twitterMetaDefinitions.forEach((definition) => {
      this.META.addTag(definition);
    });

    return this.clearTwitterTags.bind(this);
  }

  public setOpenGraphTags(values: OpenGraphMetaTagsValues) {
    const openGrapgMetaDefinitions = this._mapOpenGraphMetaDefinitions(values);

    openGrapgMetaDefinitions.forEach((definition) => {
      this.META.addTag(definition);
    });

    return this.clearOpenGraphTags.bind(this);
  }

  public clearTwitterTags(): void {
    TwitterMetaTags.values().forEach(tagName => {
      this.META.removeTag(`name='${tagName}'`);
    });
  }

  public clearOpenGraphTags(): void {
    OpenGraphMetaTags.values().forEach(tagName => {
      this.META.removeTag(`property='${tagName}'`);
    });
  }

  private _mapTwitterMetaDefinitions = (values: TwitterMetaTagsValues): MetaDefinition[] => {
    return [
      {
        name   : TwitterMetaTags.CARD,
        content: values.card,
      },
      {
        name   : TwitterMetaTags.TITLE,
        content: values.title,
      },
      {
        name   : TwitterMetaTags.DESCRIPTION,
        content: values.description,
      },
      {
        name   : TwitterMetaTags.URL,
        content: values.url,
      },
      {
        name   : TwitterMetaTags.IMAGE,
        content: values.image,
      },
      {
        name   : TwitterMetaTags.SITE,
        content: '@InteretGnral',
      }
    ];
  }

  private _mapOpenGraphMetaDefinitions = (values: OpenGraphMetaTagsValues): MetaDefinition[] => {
    return [
      {
        property: OpenGraphMetaTags.TYPE,
        content : values.type,
      },
      {
        property: OpenGraphMetaTags.TITLE,
        content : values.title,
      },
      {
        property: OpenGraphMetaTags.DESCRIPTION,
        content : values.description,
      },
      {
        property: OpenGraphMetaTags.URL,
        content : values.url,
      },
      {
        property: OpenGraphMetaTags.IMAGE,
        content : values.image,
      },
    ];
  }
}

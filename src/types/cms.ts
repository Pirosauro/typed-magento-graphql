import type { GraphQLInt, GraphQLString } from './common';

/** CMS block payload returned by cmsBlocks query. */
export interface CmsBlock {
  /** Raw CMS block content in HTML. */
  content?: GraphQLString;
  /** CMS block identifier value. */
  identifier?: GraphQLString;
  /** CMS block title value. */
  title?: GraphQLString;
}

/** CMS blocks container returned by cmsBlocks query. */
export interface CmsBlocks {
  /** CMS blocks matching the requested identifiers. */
  items?: CmsBlock[];
}

/** CMS page payload returned by cmsPage query. */
export interface CmsPage {
  /** Raw CMS page content in HTML. */
  content?: GraphQLString;
  /** CMS page heading value. */
  content_heading?: GraphQLString;
  /** CMS page identifier value. */
  identifier?: GraphQLString;
  /** CMS page meta description value. */
  meta_description?: GraphQLString;
  /** CMS page meta keywords value. */
  meta_keywords?: GraphQLString;
  /** CMS page meta title value. */
  meta_title?: GraphQLString;
  /** CMS page layout value. */
  page_layout?: GraphQLString;
  /** CMS page redirect code value. */
  redirect_code?: GraphQLInt;
  /** CMS page relative URL value. */
  relative_url?: GraphQLString;
  /** CMS page title value. */
  title?: GraphQLString;
  /** CMS page routed type value. */
  type?: GraphQLString;
  /** CMS page URL key value. */
  url_key?: GraphQLString;
}

/** Response shape for cmsBlocks query. */
export interface CmsBlocksQuery {
  /** CMS blocks payload. */
  cmsBlocks?: CmsBlocks;
}

/** Response shape for cmsPage query. */
export interface CmsPageQuery {
  /** CMS page payload. */
  cmsPage?: CmsPage;
}

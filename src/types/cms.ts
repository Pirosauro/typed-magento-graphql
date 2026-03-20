/**
 * CMS block payload attached to categories.
 */
export interface CmsBlock {
  /** Raw CMS block content in HTML. */
  content?: string;
  /** Indicates whether the CMS block is disabled. */
  disabled?: boolean;
  /** CMS block identifier value. */
  identifier?: string;
  /** CMS block title value. */
  title?: string;
}

/**
 * CMS page payload attached to categories.
 */
export interface CmsPage {
  /** Raw CMS page content in HTML. */
  content?: string;
  /** CMS page heading value. */
  content_heading?: string;
  /** CMS page identifier value. */
  identifier?: string;
  /** CMS page meta description value. */
  meta_description?: string;
  /** CMS page meta keywords value. */
  meta_keywords?: string;
  /** CMS page meta title value. */
  meta_title?: string;
  /** CMS page page layout value. */
  page_layout?: string;
  /** CMS page page width value. */
  page_width?: string;
  /** CMS page redirect code value. */
  redirect_code?: number;
  /** CMS page relative URL value. */
  relative_url?: string;
  /** CMS page title value. */
  title?: string;
  /** CMS page type value. */
  type?: string;
  /** CMS page URL key value. */
  url_key?: string;
}
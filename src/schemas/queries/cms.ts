import { z } from 'zod';

/**
 * Validates variables for the cmsBlocks query.
 */
export const CmsBlocksQueryInputSchema = z
  .object({
    /** CMS block identifiers to query. */
    identifiers: z.array(z.string()).optional()
  })
  .optional();

/**
 * Inferred input type for cmsBlocks query variables.
 */
export type CmsBlocksQueryInput = z.infer<typeof CmsBlocksQueryInputSchema>;

/**
 * Validates variables for the cmsPage query.
 */
export const CmsPageQueryInputSchema = z
  .object({
    /** Numeric CMS page identifier value. */
    id: z.number().int().optional(),
    /** String CMS page identifier value. */
    identifier: z.string().optional()
  })
  .optional();

/**
 * Inferred input type for cmsPage query variables.
 */
export type CmsPageQueryInput = z.infer<typeof CmsPageQueryInputSchema>;

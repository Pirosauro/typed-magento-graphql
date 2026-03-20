import type { GraphQLInt, GraphQLString } from './common';

/**
 * Lightweight routable resource metadata.
 */
export interface RoutableInterface {
  /** Redirect code for requested URL. */
  redirect_code?: GraphQLInt;
  /** Relative URL for routed resource. */
  relative_url?: GraphQLString;
  /** Routed entity type value. */
  type?: GraphQLString;
}

/**
 * Response shape for route query.
 */
export interface RouteQuery {
  /** Routed entity details by URL. */
  route?: RoutableInterface;
}

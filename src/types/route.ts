/**
 * Lightweight routable resource metadata.
 */
export interface RoutableInterface {
  /** Redirect code for requested URL. */
  redirect_code?: number;
  /** Relative URL for routed resource. */
  relative_url?: string;
  /** Routed entity type value. */
  type?: string;
}

/**
 * Response shape for route query.
 */
export interface RouteQuery {
  /** Routed entity details by URL. */
  route?: RoutableInterface;
}

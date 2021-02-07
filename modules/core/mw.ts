import { flow } from 'fp-ts/lib/function'

export interface Middleware<Request, Response> {
  interceptRequest: (request: Request) => Request
  interceptResponse: (response: Response) => Response
}

export type Handler<Request, Response> = (request: Request) => Response

export default Middleware

/**
 * Combines a lambda handler and a single
 * middleware to form a new handler.
 * @param handler Function which maps a reques to a response.
 * @param middleware Function which intercepts requests and responses.
 */
export const middleware = <Request, Response>(
  handler: Handler<Request, Response>,
  middleware: Middleware<Request, Response>
): Handler<Request, Response> =>
  flow(middleware.interceptRequest, handler, middleware.interceptResponse)

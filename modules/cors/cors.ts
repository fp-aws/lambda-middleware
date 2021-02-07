import {
  APIGatewayProxyEventV2,
  APIGatewayProxyStructuredResultV2,
} from 'aws-lambda'
import Middleware from '../core/mw'

export const cors = (
  origin: string
): Middleware<APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2> => {
  let requestOriginHeader: string | undefined
  return {
    interceptRequest: (request) => {
      requestOriginHeader =
        request.headers?.['Origin'] ?? request.headers?.['origin']
      return request
    },
    interceptResponse: (response) => {
      if (requestOriginHeader == origin)
        response.headers = {
          ...response.headers,
          'Access-Control-Allow-Origin': origin,
        }
      return response
    },
  }
}

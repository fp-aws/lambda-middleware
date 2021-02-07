import { APIGatewayProxyMiddlewareV2 } from '@/modules/core/lambda'
import { middleware } from '@/modules/core/mw'
import {
  APIGatewayProxyEventV2,
  APIGatewayProxyStructuredResultV2,
} from 'aws-lambda'
import { identity } from 'fp-ts/lib/function'

describe('Middleware core', () => {
  it('should allow defining simple no-op middleware', () => {
    const lambda = (
      request: APIGatewayProxyEventV2
    ): APIGatewayProxyStructuredResultV2 => ({
      statusCode: 200,
      body: request.body,
    })
    const noOp: APIGatewayProxyMiddlewareV2 = {
      interceptRequest: identity,
      interceptResponse: identity,
    }
    const handler = middleware(lambda, noOp)

    const response = handler(({} as unknown) as APIGatewayProxyEventV2)
  })
})

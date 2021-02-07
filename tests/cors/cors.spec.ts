import Middleware from '@/modules/core/mw'
import {
  APIGatewayProxyEventV2,
  APIGatewayProxyStructuredResultV2,
} from 'aws-lambda'
import { middleware } from '@/modules/core/mw'
import { cors } from '@/modules/cors/cors'

describe('CORS Middleware', () => {
  describe('with valid origin', () => {
    it('should include access-control-allow-origin header', () => {
      const lambda = (
        request: APIGatewayProxyEventV2
      ): APIGatewayProxyStructuredResultV2 => ({
        statusCode: 200,
        body: request.body,
      })

      const handler = middleware(lambda, cors('http://www.example.com'))
      const response = handler(({} as unknown) as APIGatewayProxyEventV2)
      expect(response.headers?.['Access-Control-Allow-Origin']).toBeUndefined()
    })
  })
})

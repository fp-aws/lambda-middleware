import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  APIGatewayProxyEventV2,
  APIGatewayProxyStructuredResultV2,
} from 'aws-lambda'
import Middleware from './mw'

export type APIGatewayProxyMiddleware = Middleware<
  APIGatewayProxyEvent,
  APIGatewayProxyResult
>

export type APIGatewayProxyMiddlewareV2 = Middleware<
  APIGatewayProxyEventV2,
  APIGatewayProxyStructuredResultV2
>

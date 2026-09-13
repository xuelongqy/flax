// Types only: FlaxFetchPlugin installs the HTTP globals.
import type {} from '@flax/core/host';
import type * as Data from './data.js';
import type * as Http from './http.js';
import type { URL as URLType } from '@flax/core/host';
declare global {
  var Headers: typeof Data.Headers;
  var Request: typeof Http.Request;
  var Response: typeof Http.Response;
  type Headers = Data.Headers;
  type Request = Http.Request;
  type Response = Http.Response;
  type RequestInit = Http.RequestInit;
  type ResponseInit = Http.ResponseInit;
  function fetch(
    input: string | URLType | Http.Request,
    init?: Http.RequestInit,
  ): Promise<Http.Response>;
}
export {};

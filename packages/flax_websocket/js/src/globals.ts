import type {
  WebSocket as HostWebSocket,
  WebSocketConstructor,
  CloseEvent as HostCloseEvent,
  CloseEventConstructor,
} from './types.js';
export type * from './index.js';
declare global {
  var WebSocket: WebSocketConstructor;
  var CloseEvent: CloseEventConstructor;
  type WebSocket = HostWebSocket;
  type CloseEvent = HostCloseEvent;
}

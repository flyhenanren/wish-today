export type EventType = "openSpace";

export type Handler = (...args: any[]) => void;

export type EventHandlerList = Array<Handler>;

export type EventHandlerMap = Map<EventType, EventHandlerList>;


export default class Bus {

  bus: EventHandlerMap = new Map();

  on(type: EventType, handler: Handler): void {
    const handlers: Array<Handler> | undefined = this.bus!.get(type);
    if (handlers) {
      handlers.push(handler);
    } else {
      this.bus!.set(type, [handler]);
    }
  }

  off(type: EventType, handler?: Handler): void {
    const handlers: Array<Handler> | undefined = this.bus!.get(type);
    if (handlers) {
      if (handler) {
        handlers.splice(handlers.indexOf(handler) >>> 0, 1);
      } else {
        this.bus!.set(type, []);
      }
    }
  }

  emit(type: EventType, ...args: any[]): void {
    let handlers: Array<Handler> | undefined = this.bus!.get(type);
    if (handlers) {
      handlers.slice().map((handler) => {
        handler(...args);
      });
    }
  }
}


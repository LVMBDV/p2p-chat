import { AsyncOrSync } from "ts-essentials";

export type EventParamMap<T> = Record<keyof T, unknown[]>;

export type EventListener<Args extends unknown[]> = (
  ...args: Args
) => AsyncOrSync<void>;

export class EventDispatcher<M extends EventParamMap<M>> {
  private listeners = new Map<keyof M, Set<EventListener<M[keyof M]>>>();

  private getListenersOf<T extends keyof M>(type: T): Set<EventListener<M[T]>> {
    if (!this.listeners.has(type)) {
      this.listeners.set(type, new Set());
    }

    return this.listeners.get(type)!;
  }

  addListener<T extends keyof M>(type: T, listener: EventListener<M[T]>): void {
    this.getListenersOf(type).add(listener);
  }

  removeListener<T extends keyof M>(
    type: T,
    listener: EventListener<M[T]>,
  ): void {
    this.getListenersOf(type).delete(listener);
  }

  async dispatchEvent<T extends keyof M>(
    type: T,
    ...args: M[T]
  ): Promise<void> {
    await Promise.all(
      Array.from(this.getListenersOf(type)).map((listener) =>
        listener(...args),
      ),
    );
  }
}

import { Mock } from "vitest";

import { EventDispatcher } from "./event-dispatcher";

interface ExampleEventMap {
  event1: [number, number, number];
  event2: [string, boolean];
}

describe("EventDispatcher", () => {
  let eventDispatcher: EventDispatcher<ExampleEventMap>;
  let listener1: Mock<ExampleEventMap["event1"], void>;
  let listener2: Mock<ExampleEventMap["event2"], void>;

  const args1: ExampleEventMap["event1"] = [1, 2, 3];
  const args2: ExampleEventMap["event2"] = ["a", true];

  beforeEach(() => {
    eventDispatcher = new EventDispatcher<ExampleEventMap>();
    listener1 = vi.fn();
    listener2 = vi.fn();
  });

  it("should dispatch events to the correct listeners", async () => {
    eventDispatcher.addListener("event1", listener1);
    eventDispatcher.addListener("event2", listener2);

    await eventDispatcher.dispatchEvent("event1", ...args1);
    await eventDispatcher.dispatchEvent("event2", ...args2);

    expect(listener1).toHaveBeenCalledWith(...args1);
    expect(listener2).toHaveBeenCalledWith(...args2);
  });

  it("should not dispatch events to removed listeners", async () => {
    eventDispatcher.addListener("event1", listener1);
    eventDispatcher.addListener("event2", listener2);

    eventDispatcher.removeListener("event1", listener1);

    await eventDispatcher.dispatchEvent("event1", ...args1);
    await eventDispatcher.dispatchEvent("event2", ...args2);

    expect(listener1).not.toHaveBeenCalled();
    expect(listener2).toHaveBeenCalledWith(...args2);
  });

  it("should handle multiple listeners for the same event", async () => {
    eventDispatcher.addListener("event1", listener1);

    // @ts-expect-error - listener2 does not fit the event1 listener signature
    eventDispatcher.addListener("event1", listener2);

    await eventDispatcher.dispatchEvent("event1", ...args1);

    expect(listener1).toHaveBeenCalledWith(...args1);
    expect(listener2).toHaveBeenCalledWith(...args1);
  });
});

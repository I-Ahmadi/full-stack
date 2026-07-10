# Node.js 6 - Events and Event Loop

This folder teaches Node's event system, timers, and event loop behavior.

## Recommended order

1. `event-emitter.js` - emit events and register listeners
2. `event-driven-architecture.js` - decouple app behavior with events
3. `timers.js` - `setTimeout`, `setInterval`, `setImmediate`, microtasks
4. `event-loop.js` - event loop ordering, I/O, and thread pool callbacks

## How to run

```powershell
cd "3-Node JS/6-events-event-loop"
node event-emitter.js
node event-driven-architecture.js
node timers.js
node event-loop.js
```

## What to remember

- `EventEmitter` lets code announce and react to events.
- `emit()` triggers an event.
- `on()` registers a listener.
- `once()` registers a listener that runs one time.
- The event loop runs async callbacks in phases.
- CPU-heavy synchronous code still blocks Node's main thread.

# Node.js 7 - Streams and Buffers

This folder teaches binary data and stream processing.

## Recommended order

1. `buffers.js` - binary data, encodings, and `Buffer`
2. `streams.js` - read large files in chunks
3. `readable-writable-streams.js` - pipe readable streams into writable streams

## How to run

```powershell
cd "3-Node JS/7-streams-buffers"
node buffers.js
node streams.js
node readable-writable-streams.js
```

`test-file.txt` is intentionally large so stream examples have real data to
process. Running `readable-writable-streams.js` creates
`stream-output-preview.txt`.

## What to remember

- Buffers store raw bytes.
- Streams process data in chunks.
- Streams help avoid loading large files fully into memory.
- `pipe()` connects readable streams to writable streams.
- Backpressure keeps producers from overwhelming consumers.

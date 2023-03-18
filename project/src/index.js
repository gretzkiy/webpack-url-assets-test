console.log('Hello from the main thread!')

const worker = new Worker(new URL('./worker.js', import.meta.url));

console.log(worker);

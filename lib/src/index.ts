export function doWork(): void {
	console.log('Spawning workers from the lib');

	// The workers are loaded from the `/workers/` public path specified in `project`
	// However the goal is to place the output for these files in `dist/workers` dir
	new Worker(new URL('./one.worker', import.meta.url));
	new Worker(new URL('./two.worker', import.meta.url));
}

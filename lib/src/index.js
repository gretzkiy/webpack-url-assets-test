export default function() {
	const
		img = document.createElement('img'),
		src = new URL('./test-image.png', import.meta.url).toString();

	img.setAttribute('src', src);
	document.body.appendChild(img);
}

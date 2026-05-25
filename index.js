const imageFiles = [
	"Groß (0).jpeg",
	"Groß (1).jpeg",
	"Groß (2).jpeg",
	"Groß (3).jpeg",
	"Groß (4).jpeg",
	"Groß (6).jpeg",
	"Groß (7).jpeg",
	"Groß (8).jpeg",
	"Groß (9).jpeg",
	"Groß (10).jpeg",
	"Groß (11).jpeg",
	"Groß (12).jpeg",
	"Groß (13).jpeg",
	"Groß (14).jpeg",
	"Groß (14a).jpeg",
	"Groß (14b).jpeg",
	"Groß (14c).jpeg",
	"Groß (14d).jpeg",
	"Groß (14e).jpeg",
	"Groß (14f).jpeg",
	"Groß (14g).jpeg",
	"Groß (14h).jpeg",
	"Groß (14i).jpeg",
	"Groß (14j).jpeg",
	"Groß (14k).jpeg",
	"Groß (14l).jpeg",
	"Groß (14m).jpeg",
	"Groß (14n).jpeg",
	"Groß (14o).jpeg",
	"Groß (16).jpeg",
	"Groß (17).jpeg",
	"Groß (18).jpeg",
	"Groß (19).jpeg",
	"Groß (20).jpeg",
	"Groß (21).jpeg",
	"Groß (22).jpeg",
	"Groß (23).jpeg",
	"Groß (24).jpeg",
	"Groß (25).jpeg",
	"Groß (26).jpeg",
	"Groß (27).jpeg",
	"Groß (28).jpeg",
	"Groß (29).jpeg",
	"Groß (30).jpeg",
	"Groß (31).jpeg",
	"Groß (32).jpeg",
	"Groß (33).jpeg",
	"Groß (34).jpeg",
	"Groß (35).jpeg",
	"Groß (36).jpeg",
	"Groß (37).jpeg",
	"Groß (38).jpeg",
	"Groß (39).jpeg",
	"Groß (40).jpeg",
	"Groß (41).jpeg",
	"Groß (42).jpeg",
	"Groß (43).jpeg",
	"Groß (44).jpeg",
	"Groß (45).jpeg",
	"Groß (46).jpeg",
	"Groß (47).jpeg",
	"Groß (48).jpeg",
	"Groß (49).jpeg",
	"Groß (50).jpeg",
	"Groß (51).jpeg",
	"Groß (52).jpeg",
	"Groß (53).jpeg",
	"Groß (54).jpeg",
	"Groß (55).jpeg",
	"Groß (56).jpeg",
	"Groß (57).jpeg",
	"Groß (58).jpeg",
	"Groß (59).jpeg",
	"Groß (60).jpeg",
	"Groß (61).jpeg",
	"Groß (62).jpeg",
];

let currentImageIndex = 0;

function setViewerImage(imageFile) {
	const viewer = document.getElementById("viewer");
	viewer.src = imageFile;
}

function preloadImages() {
	for (const imageFile of imageFiles) {
		const image = new Image();
		image.src = imageFile;
	}
}

document.addEventListener("DOMContentLoaded", () => {
	preloadImages();
	const viewer = document.getElementById("viewer");
	viewer.addEventListener("click", () => {
		currentImageIndex = (currentImageIndex + 1) % imageFiles.length;
		setViewerImage(imageFiles[currentImageIndex]);
	});

	setViewerImage(imageFiles[currentImageIndex]);

	document.addEventListener("keydown", (event) => {
		if (event.key === "ArrowRight") {
			event.preventDefault();
			currentImageIndex = (currentImageIndex + 1) % imageFiles.length;
			setViewerImage(imageFiles[currentImageIndex]);
		} else if (event.key === "ArrowLeft") {
			event.preventDefault();
			currentImageIndex = (currentImageIndex - 1 + imageFiles.length) % imageFiles.length;
			setViewerImage(imageFiles[currentImageIndex]);
		}
	});
});

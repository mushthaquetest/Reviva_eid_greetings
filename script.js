var image = new Image();
image.src = "greetingimage.png";
image.onload = function () {
    var canvas = document.getElementById("greetingCanvas");
    var ctx = canvas.getContext("2d");
    var nameInput = document.getElementById("nameInput");

    // Set canvas to the original image size for better quality
    canvas.width = image.width;
    canvas.height = image.height;

    // Apply CSS scaling for responsiveness (set max width in CSS)
    canvas.style.width = "90vw"; // 90% of viewport width
    canvas.style.height = "auto"; // Maintain aspect ratio

    // Load the font
    var font = new FontFace("Roboto", "url(Roboto-Medium.ttf)");
    font.load().then(function (loadedFont) {
        document.fonts.add(loadedFont);

        function generateGreeting() {
            var name = nameInput.value;

            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw the high-quality image
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

            // Adjust font size dynamically
            var fontSize = canvas.width * 0.04; // 4% of original width
            ctx.font = fontSize + "px Roboto";
            ctx.fillStyle = "white";
            ctx.textAlign = "left";

            // Adjust text position dynamically
            ctx.fillText(name, canvas.width / 2.2, canvas.height * 0.92);

            // Show download button
            document.getElementById("downloadBtn").style.display = "block";
        }

        // Call generateGreeting on input change
        nameInput.addEventListener("input", generateGreeting);

        // Initial greeting generation
        generateGreeting();
    });
};

function downloadImage() {
    var canvas = document.getElementById("greetingCanvas");
    var link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "Eid_Greeting.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

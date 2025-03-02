var image = new Image();
image.src = "greetingimage.jpg";
image.onload = function () {
    var canvas = document.getElementById("greetingCanvas");
    var ctx = canvas.getContext("2d");
    var nameInput = document.getElementById("nameInput");

    // Set canvas dimensions dynamically
    function resizeCanvas() {
        var aspectRatio = image.width / image.height;
        canvas.width = window.innerWidth * 0.9; // 90% of screen width
        canvas.height = canvas.width / aspectRatio; // Maintain aspect ratio
    }

    // Load the font
    var font = new FontFace('Roboto', 'url(Roboto-Medium.ttf)');
    font.load().then(function (loadedFont) {
        document.fonts.add(loadedFont);

        function generateGreeting() {
            var name = nameInput.value;

            // Resize canvas before drawing
            resizeCanvas();

            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw responsive image
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

            // Adjust font size based on canvas width
            var fontSize = canvas.width * 0.04; // 4% of canvas width
            ctx.font = fontSize + "px Roboto";
            ctx.fillStyle = "white";
            ctx.textAlign = "left";

            // Draw name at a proportional position
            ctx.fillText(name, canvas.width / 2.2, canvas.height/1.1);

            // Show download button
            document.getElementById("downloadBtn").style.display = "block";
        }

        // Resize canvas on window resize
        window.addEventListener("resize", generateGreeting);

        // Call generateGreeting on input change
        nameInput.addEventListener("input", generateGreeting);

        // Initial greeting generation
        generateGreeting();
    });
};

function downloadImage() {
    var canvas = document.getElementById("greetingCanvas");
    var link = document.createElement('a');
    link.href = canvas.toDataURL("image/png");
    link.download = 'Eid_Greeting.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

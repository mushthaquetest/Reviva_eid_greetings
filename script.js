var image = new Image();
image.src = "greetingimage.png";
image.onload = function() {
    // Once the image is loaded, initialize canvas and allow generating greetings
    var canvas = document.getElementById("greetingCanvas");
    var ctx = canvas.getContext("2d");
    var nameInput = document.getElementById("nameInput");

    // Load the font
    var font = new FontFace('Roboto', 'url(Roboto-Medium.ttf)');
    font.load().then(function(loadedFont) {
        document.fonts.add(loadedFont);

        // Generate greetings function
        function generateGreeting() {
            var name = nameInput.value;

            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw greeting image
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

            // Draw user's name with Gotham font
            ctx.font = "60px Roboto"; // Set font family and size
            ctx.fillStyle = "white";
            ctx.textAlign = "left";
            ctx.fillText(name, canvas.width / 2.2, canvas.height/1.38);

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
    var link = document.createElement('a');
    link.href = canvas.toDataURL("image/png"); // Change to "image/jpeg" to maintain image format
    link.download = 'Eid_Greeting.png'; // Change the download filename and extension
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

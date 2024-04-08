// Preload the image
var image = new Image();
image.src = "greeting_image.jpeg";
image.onload = function() {
    // Once the image is loaded, initialize canvas and allow generating greetings
    var canvas = document.getElementById("greetingCanvas");
    var ctx = canvas.getContext("2d");
    var nameInput = document.getElementById("nameInput");
    
    // Generate greetings function
    function generateGreeting() {
        var name = nameInput.value;
        
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw greeting image
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        
        // Draw user's name
        ctx.font = "30px Lato";
        ctx.fillStyle = "White";
        ctx.textAlign = "center";
        ctx.fillText(name, canvas.width / 2, canvas.height / 2.3);
        
        // Show download button
        document.getElementById("downloadBtn").style.display = "block";
    }
    
    // Call generateGreeting on input change
    nameInput.addEventListener("input", generateGreeting);
    
    // Initial greeting generation
    generateGreeting();
};

function downloadImage() {
    var canvas = document.getElementById("greetingCanvas");
    var link = document.createElement('a');
    link.href = canvas.toDataURL("image/jpeg"); // Change to "image/jpeg" to maintain image format
    console.log(link);
    link.download = 'Eid_Greeting.jpeg'; // Change the download filename and extension
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

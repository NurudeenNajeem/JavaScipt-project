document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-links");

    hamburgerMenu.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});


// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Function to update the date and time
function updateDateTime() {
  // Create a new Date object to get the current date and time
  const now = new Date();

  // Get the current date in the format YYYY-MM-DD
  const date = now.toISOString().split('T')[0];
  
  // Get the current time in the format HH:MM:SS
  const time = now.toLocaleTimeString();

  // Update the HTML elements with the current date and time
  document.getElementById('date').textContent = ` ${date}`;
  document.getElementById('time').textContent = `${time}`;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initial update
updateDateTime();

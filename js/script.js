// Name: CIT 155 Student, Filename: script.js

$(document).ready(function() {
    $('#contactForm').submit(function(event) {
        event.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
    });
});
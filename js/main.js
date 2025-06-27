document.addEventListener('DOMContentLoaded', function() {
    // Form validation for the contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                event.preventDefault();
                alert('Please fill in all fields.');
            } else {
                alert('Thank you for your message!');
            }
        });
    }

    // Dynamic content loading for courses
    const coursesList = document.getElementById('courses-list');
    if (coursesList) {
        const courses = [
            { title: 'JavaScript Basics', description: 'Learn the fundamentals of JavaScript.', link: '#'},
            { title: 'HTML & CSS', description: 'Build beautiful websites with HTML and CSS.', link: '#'},
            { title: 'React for Beginners', description: 'Get started with React and build interactive UIs.', link: '#'}
        ];

        courses.forEach(course => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<h3>${course.title}</h3><p>${course.description}</p><a href="${course.link}">Enroll Now</a>`;
            coursesList.appendChild(listItem);
        });
    }
});
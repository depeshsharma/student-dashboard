document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.scroll button');
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-links a');

    function showSection(targetId) {
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === targetId) {
                section.classList.add('active');
            }
        });
    }

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.id.replace('Btn', 'Section');
            
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            showSection(targetId);
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.id.replace('Link', 'Section');
            
            buttons.forEach(btn => btn.classList.remove('active'));
            showSection(targetId);
        });
    });

    document.getElementById('feedbackForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Feedback submitted successfully!');
        this.reset();
    });

    document.getElementById('updateProfileForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Profile updated successfully!');
        this.reset();
    });
});
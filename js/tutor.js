document.getElementById('apply-filters').addEventListener('click', function() {
    // Get selected courses
    const selectedCourses = Array.from(
        document.querySelectorAll('#course-filter input[type="checkbox"]:checked')
    ).map(checkbox => checkbox.value);

    // Get selected jobs
    const selectedJobs = Array.from(
        document.querySelectorAll('#job-filter input[type="checkbox"]:checked')
    ).map(checkbox => checkbox.value);

    // Get all tutor cards
    const tutorCards = document.querySelectorAll('.tutor-card');

    // Apply filters
    // tutorCards.forEach(function(card) {
    //     const cardCourse = card.getAttribute('data-course');
    //     const cardJob = card.getAttribute('data-job');

    //     const matchesCourse = selectedCourses.length === 0 || selectedCourses.includes(cardCourse);
    //     const matchesJob = selectedJobs.length === 0 || selectedJobs.includes(cardJob);

    //     if (matchesCourse && matchesJob) {
    //         card.style.display = 'grid';
    //     } else {
    //         card.style.display = 'none';
    //     }
    // });

    tutorCards.forEach(function(card) {
        const cardCourse = card.getAttribute('data-course');
        const cardJob = card.getAttribute('data-job');

        if (!selectedCourses.length && !selectedJobs.length) {
            card.style.display = 'grid';
        } else if (!selectedCourses.length && selectedJobs.includes(cardJob)) {
            card.style.display = 'grid';
        } else if (!selectedJobs.length && selectedCourses.includes(cardCourse)) {
            card.style.display = 'grid';
        } else if (selectedCourses.includes(cardCourse) && selectedJobs.includes(cardJob)) {
            card.style.display = 'grid';
        } else {
            card.style.display = 'none';
        }
    });
});


document.getElementById("year").innerHTML = new Date().getFullYear();
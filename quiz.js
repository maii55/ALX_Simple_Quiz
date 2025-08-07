<<<<<<< HEAD
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";
    
    // Get the user's selected answer
    const selected = document.querySelector('input[name="quiz"]:checked');
    
    // Check if an answer is selected
    if (!selected) {
        document.getElementById('feedback').textContent = "Please select an answer!";
        return;
    }
    
    const userAnswer = selected.value;
    
    // Compare answers and provide feedback
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
=======
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";
    
    // Get the user's selected answer
    const selected = document.querySelector('input[name="quiz"]:checked');
    
    // Check if an answer is selected
    if (!selected) {
        document.getElementById('feedback').textContent = "Please select an answer!";
        return;
    }
    
    const userAnswer = selected.value;
    
    // Compare answers and provide feedback
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
>>>>>>> 2a2a8b2da998f1cced05ae6f8165ad5aa9e5595a

var question = document.getElementsByClassName("question");
var icon = document.querySelectorAll('fa-arrow-down');
var i;

for (i = 0; i < question.length; i++) {
    question[i].addEventListener("click", function() {
        // This is a toggle method to go back and forth ont he next element sibling which is the answer div
        this.classList.toggle("active");
        // This represents the variable question which represents every representation of the variable class
        /* back and forth from answer to question and back */
        var answer = this.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
}

// fa aarow up

// element.classList.remove("mystyle");
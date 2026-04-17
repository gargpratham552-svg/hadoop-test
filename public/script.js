let shuffled = [];

window.onload = () => {
  const quiz = document.getElementById("quiz");

  if (!quiz) {
    console.error("Quiz container not found!");
    return;
  }

  if (typeof questions === "undefined") {
    alert("Questions not loaded! Check questions.js");
    return;
  }

  // Shuffle safely
  shuffled = [...questions].sort(() => Math.random() - 0.5);

  renderQuestions();
};

function renderQuestions() {
  const quiz = document.getElementById("quiz");
  quiz.innerHTML = "";

  shuffled.forEach((q, i) => {
    let div = document.createElement("div");
    div.className = "question";

    let html = `<p><b>${i + 1}. ${q.q}</b></p>`;

    q.options.forEach((opt, j) => {
      html += `
        <label>
          <input type="radio" name="q${i}" value="${j}"> ${opt}
        </label><br>
      `;
    });

    div.innerHTML = html;
    quiz.appendChild(div);
  });
}

// SUBMIT
function submitTest() {
  let score = 0;

  shuffled.forEach((q, i) => {
    let ans = document.querySelector(`input[name=q${i}]:checked`);
    if (ans && parseInt(ans.value) === q.answer) {
      score++;
    }
  });

  let student = JSON.parse(localStorage.getItem("student"));

  if (!student) {
    alert("Student data missing!");
    return;
  }

  fetch("/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...student,
      score: score,
      total: shuffled.length
    })
  })
  .then(res => res.text())
  .then(data => {
    console.log("Server response:", data);
    alert("Submitted! Score: " + score);
    window.location = "/";
  })
  .catch(err => {
    console.error("Submit error:", err);
    alert("Error submitting test!");
  });
}
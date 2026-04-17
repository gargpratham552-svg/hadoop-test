let shuffled = shuffle(questions);

window.onload = () => {
  shuffled.forEach((q,i)=>{
    let html = `<p>${i+1}. ${q.q}</p>`;
    q.options.forEach((opt,j)=>{
      html += `<input type="radio" name="q${i}" value="${j}">${opt}<br>`;
    });
    quiz.innerHTML += html;
  });
};

// tab switch detect
document.addEventListener("visibilitychange", ()=>{
  if(document.hidden){
    alert("Tab switched! Auto submit.");
    submitTest();
  }
});

function submitTest(){
  let score = 0;

  shuffled.forEach((q,i)=>{
    let ans = document.querySelector(`input[name=q${i}]:checked`);
    if(ans && parseInt(ans.value) === q.answer){
      score++;
    }
  });

  let student = JSON.parse(localStorage.getItem("student"));

  fetch("/submit", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({
      ...student,
      score: score,
      total: shuffled.length
    })
  });

  alert("Score: " + score);
  window.location = "/";
}
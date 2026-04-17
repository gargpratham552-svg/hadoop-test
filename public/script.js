window.onload = () => {
  shuffled.forEach((q,i)=>{
    let html = `<div class="question">
      <p><b>${i+1}. ${q.q}</b></p>`;
      
    q.options.forEach((opt,j)=>{
      html += `<label>
        <input type="radio" name="q${i}" value="${j}"> ${opt}
      </label><br>`;
    });

    html += `</div>`;
    quiz.innerHTML += html;
  });
};
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".choice-button");
  const result = document.getElementById("result");
 
  const correctAnswer = "プロトタイピング";
 
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedText = button.textContent.trim();
 
      if (selectedText === correctAnswer) {
        result.textContent = "正解！";
        result.style.color = "green";
      } else {
        result.textContent = "不正解";
        result.style.color = "red";
      }
 
      buttons.forEach(btn => btn.disabled = true);
    });
  });
});
const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(faq => {
  const question = faq.querySelector(".faq-question");
  const answer = faq.querySelector(".faq-answer");
  const icon = faq.querySelector("span");

  question.addEventListener("click", () => {

    const isOpen = answer.style.maxHeight;

    
    document.querySelectorAll(".faq-answer").forEach(a => a.style.maxHeight = null);
    document.querySelectorAll(".faq-question span").forEach(i => i.innerText = "+");

    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.innerText = "-";
    }
  });
});
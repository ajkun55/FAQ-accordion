
let question = document.querySelectorAll('.accordion');

for (let item of question) {
    item.addEventListener("click", function() {
      this.classList.toggle("active");
      let answer = this.nextElementSibling;
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } 
    });
  }

const toggleBtn = document.getElementById("toggleOutline");
const topics = document.querySelectorAll(".topic");

let visible = true;

toggleBtn.addEventListener("click", () => {
  visible = !visible;
  topics.forEach((topic) => {
    topic.style.display = visible ? "block" : "none";
  });
});

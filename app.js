const images = document.querySelectorAll(".box");
let firstClick = "";
console.log(images);

for (let index = 0; index < images.length; index++) {
  console.log(images[index]);

  images[index].addEventListener("click", (data) => {
    if (!data.target.classList.contains("active")) {
      console.log(data.target.parentNode);
      data.target.parentNode.classList.add("active");

      console.log(data.target.parentNode.children[0].src);

      if (firstClick === "") {
        firstClick = data.target.parentNode;

        console.log(firstClick);
      } else {
        if (
          firstClick.children[0].src === data.target.parentNode.children[0].src
        ) {
        } else {
          firstClick.classList.remove("active");
          data.target.parentNode.classList.remove("active");
        }
        firstClick = "";
      }
    }
  });
}

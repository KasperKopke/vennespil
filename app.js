const images = document.querySelectorAll(".box");
/*
 *const images er en beholder der selectere alle .box elementer og klader
 * alle .box elementerne for images inde på javascriptet
 */

let firstClick = "";
/*
 *let firstclick er et tom beholder der holder på ingenting men som skal bruges til
 *at putte information til første click ind i
 */
console.log(images);
/*
 * console.loggen er vores bedste ven og det er den vi sprøg om i det her tilfælde
 * hvad vi ser når vi kalder på den variabel vi har kladt images
 *hvor den siger vi har 12 forskellige .box classes inde i vores html
 */

let timerIsSet = false;

for (let index = 0; index < images.length; index++) /*
 *her har vi lavet et for loop som looper igennem vores variabel images for at kunne
 * tage data ud af den som vi kan bruge til at sprøge hvilket billede er det vi trykker på
 */ {
  console.log(images[index]);
  /*
   *den spørg for os og fortæller os at der er 12 forskellige div´er med classen box
   */

  /*
   *herunder har vi lavet en eventlistener som gør at når man clciker på et af billederne skal den tilføje classen active
   * til classen toggleimg så vi fjerner billedet foran
   * men den kan ikke give en active class hvis den allerede er aktiv i forvejen så den ikke fjerner vores stik vi har fået lavet
   */
  images[index].addEventListener("click", (data) => {
    if (!data.target.parentNode.classList.contains("active") && !timerIsSet) {
      timerIsSet = true;
      /*
       *!data.target.parentNode.classList.contains("active") siger at den skal finde dataen af den
       * som man trykker på inde i parenten som er er box og ikke indeholder classen active
       * hvis den er active så er den false hvis den ikke er aktiv så er den true
       */
      console.log(data.target.parentNode);
      data.target.parentNode.classList.add("active");
      console.log(data.target.parentNode.children[0].src);
      /*
       *herunder har vi en if statement som siger ved første clcik finder den dataen fra første bilelde
       *og hvis ved andet click har det samme data som det første clicks billede så ska lde forblive aktiv hvis ikke
       *skal de ikke have classen active og skjule begge billeder igen
       */

      if (firstClick === "") {
        firstClick = data.target.parentNode;
        timerIsSet = false;
        console.log(firstClick);
      } else {
        if (
          firstClick.children[0].src === data.target.parentNode.children[0].src
        ) {
          firstClick = "";
          timerIsSet = false;
        } else {
          setTimeout(() => {
            firstClick.classList.remove("active");
            data.target.parentNode.classList.remove("active");

            firstClick = "";
            timerIsSet = false;

            console.log(timerIsSet);
          }, 500);
        }
      }
    }
  });
}

/*
 *herunder er vores Rest knap der gør at når man trykker på den fjerner den
 *alle active class og reseter hele spillet
 */
let atag = document.querySelector("a");
atag.addEventListener("click", (data) => {
  resetGame();
});

function resetGame() {
  const divActive = document.querySelectorAll(".active");

  divActive.forEach((element) => {
    element.classList.remove("active");
  });
}

window.onscroll = function () {
  var scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;

  for (i in sections) {
    if (sections[i] - 90 <= scrollPosition) {
      buttonUnfocus(navButtons);
      navButtons[i].classList.add("text-primary");
    }
  }
};

let acordionicon = Array.from(document.querySelectorAll("i.fa-plus"));
let acordionbutton = Array.from(
  document.querySelectorAll("button.fs-5.border-0")
);
console.log(acordionicon);
for (let i = 0; i < acordionbutton.length; i++) {
  acordionbutton[i].addEventListener("click", convert);
}
function convert(e) {
  let index = acordionbutton.indexOf(e.target);
  for (let i = 0; i < acordionbutton.length; i++) {
    if (i == index) {
      continue;
    }
    acordionicon[i].classList.replace("fa-minus", "fa-plus");
  }

  if (acordionicon[index].classList[1] == "fa-plus") {
    acordionicon[index].classList.replace("fa-plus", "fa-minus");
  } else {
    acordionicon[index].classList.replace("fa-minus", "fa-plus");
  }
}

let FAQsections = Array.from(
  document.querySelectorAll("div.container div.row div.col-7.p-0")
);
let acordionBoxes = Array.from(document.querySelectorAll("div.acordionBoxes"));
acordionBoxes[0].style.border = "3px solid rgb(2, 117, 216)";
console.log(acordionBoxes);
for (let i = 0; i < acordionBoxes.length; i++) {
  acordionBoxes[i].addEventListener("click", showcontent);
}
function showcontent(e) {
  let index = acordionBoxes.indexOf(e.target);
  for (let i = 0; i < acordionBoxes.length; i++) {
    acordionBoxes[i].style.border = "1px solid grey";
    FAQsections[i].classList.add("d-none");
  }
  FAQsections[index].classList.remove("d-none");

  acordionBoxes[index].style.border = "3px solid rgb(2, 117, 216)";
}
console.log(FAQsections);

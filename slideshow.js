let background = [];
for (let i = 0; i <= 7; ++i) {
  background.push(
    "url('skin/Draven_" + i + ".jpg') center / 100% 100% no-repeat"
  );
}
let curBackground = 0;

let slideshow = document.getElementsByClassName("slideshow")[0];
let next_button = document.getElementsByClassName("next--button")[0];
let back_button = document.getElementsByClassName("back--button")[0];
let img_count = document.getElementsByClassName("img--count")[0];
img_count.innerHTML = "";

for (let i = 0; i < background.length; ++i) {
  img_count.innerHTML += "<div class='img--count--button'></div>";
}

let img_count_button = document.getElementsByClassName("img--count--button");

for (let i = 0; i < img_count_button.length; ++i) {
  if (i == curBackground) {
    img_count_button[i].style.background = "#f1e6d0";
  } else {
    img_count_button[i].style.background = "transparent";
  }
}

next_button.addEventListener("click", () => {
  img_count_button[curBackground].style.background = "transparent";
  if (curBackground < background.length - 1) {
    ++curBackground;
  } else {
    curBackground = 0;
  }
  slideshow.style.background = background[curBackground];
  img_count_button[curBackground].style.background = "#f1e6d0";
});

back_button.addEventListener("click", () => {
  img_count_button[curBackground].style.background = "transparent";
  if (curBackground > 0) {
    --curBackground;
  } else {
    curBackground = background.length - 1;
  }
  slideshow.style.background = background[curBackground];
  img_count_button[curBackground].style.background = "#f1e6d0";
});

for (let i = 0; i < img_count_button.length; ++i) {
  img_count_button[i].addEventListener("click", () => {
    img_count_button[curBackground].style.background = "transparent";
    curBackground = i;
    console.log(curBackground);
    slideshow.style.background = background[i];
    img_count_button[i].style.background = "#f1e6d0";
  });
}

let background_2 = [];
background_2.push(
  "url('img/draven_concept_art.jpg') center / 100% 100% no-repeat"
);

background_2.push(
  "url('img/draven_weapon_concept_art.jpg') center / 100% 100% no-repeat"
);

let curBackground_2 = 0;

let slideshow_2 = document.getElementsByClassName("slideshow--2")[0];
let next_button_2 = document.getElementsByClassName("next--button--2")[0];
let back_button_2 = document.getElementsByClassName("back--button--2")[0];
let img_count_2 = document.getElementsByClassName("img--count--2")[0];
img_count_2.innerHTML = "";

for (let i = 0; i < background_2.length; ++i) {
  img_count_2.innerHTML += "<div class='img--count--button--2'></div>";
}

let img_count_button_2 = document.getElementsByClassName(
  "img--count--button--2"
);

for (let i = 0; i < img_count_button_2.length; ++i) {
  if (i == curBackground) {
    img_count_button_2[i].style.background = "#937341";
  } else {
    img_count_button_2[i].style.background = "transparent";
  }
}

next_button_2.addEventListener("click", () => {
  img_count_button_2[curBackground_2].style.background = "transparent";
  if (curBackground_2 < background_2.length - 1) {
    ++curBackground_2;
  } else {
    curBackground_2 = 0;
  }
  slideshow_2.style.background = background_2[curBackground_2];
  img_count_button_2[curBackground_2].style.background = "#937341";
});

back_button.addEventListener("click", () => {
  img_count_button_2[curBackground_2].style.background = "transparent";
  if (curBackground_2 > 0) {
    --curBackground_2;
  } else {
    curBackground_2 = background_2.length - 1;
  }
  slideshow_2.style.background = background_2[curBackground_2];
  img_count_button_2[curBackground_2].style.background = "#937341";
});

for (let i = 0; i < img_count_button_2.length; ++i) {
  img_count_button_2[i].addEventListener("click", () => {
    img_count_button_2[curBackground_2].style.background = "transparent";
    curBackground_2 = i;
    console.log(curBackground_2);
    slideshow_2.style.background = background_2[i];
    img_count_button_2[i].style.background = "#937341";
  });
}

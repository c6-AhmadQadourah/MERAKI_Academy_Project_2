const body = $("body");
$(body).addClass("body");
const categorydiv = $(".categories");
const gallerydiv = $(".gallery");
const singlediv = $(".singlediv");
singlediv.hide();
const fav = [];

//---------- Date and time-------------
const date = new Date();
date.setFullYear(2022);
$(".p1").append(date);
//-----------------
const gallery = [
  {
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/494d65d3-3b70-4f89-b274-76bc7fd5e470/df0o1t4-ab14ce55-de63-4254-a2ce-d63d53407a4b.png/v1/fill/w_1280,h_1795,strp/sasuke_uchiha_by_tokyosaiyan_df0o1t4-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ5NGQ2NWQzLTNiNzAtNGY4OS1iMjc0LTc2YmM3ZmQ1ZTQ3MFwvZGYwbzF0NC1hYjE0Y2U1NS1kZTYzLTQyNTQtYTJjZS1kNjNkNTM0MDdhNGIucG5nIiwiaGVpZ2h0IjoiPD0xNzk1Iiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvNDk0ZDY1ZDMtM2I3MC00Zjg5LWIyNzQtNzZiYzdmZDVlNDcwXC90b2t5b3NhaXlhbi00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.pxvLN6dK8cF4Tl3kSzDsISDnms8Trjkv3evPuX_0ViI",
    id: "0",
    title: " Sasuke Uchiha ",
    discreption: `Sasuke Uchiha (うちはサスケ, Uchiha Sasuke) is one of the last surviving members of Konohagakure's Uchiha clan. After his older brother, Itachi, slaughtered their clan, Sasuke made it his mission in life to avenge them by killing Itachi. He is added to Team 7 upon becoming a ninja and, through competition with his rival and best friend, Naruto Uzumaki, Sasuke starts developing his skills.`,
  },
  {
    image:
      "https://wallpapers.oceanofwallpapers.com/wallpapers/previews/wallpaper-732jg3-516910-Preview.webp",
    id: "1",
    title: "Monkey D Luffy ",
    discreption: `Monkey D. Luffy, also known as " Straw Hat Luffy" and commonly as "Straw Hat", is the main protagonist of the manga and anime, One Piece. He is the founder and captain of the increasingly infamous and powerful Straw Hat Pirates, as well as one of its top fighters. His lifelong dream is to become the Pirate King by finding the legendary treasure left behind by the late Gol D. Roger. He believes that being the Pirate King means having the most freedom in the world.`,
  },
  {
    image:
      "https://myandroidwalls.com/wp-content/uploads/2022/07/Cool-Naruto-Wallpaper-4k.jpg",
    id: "2",
    title: "Naruto ",
    discreption: `Naruto Uzumaki (うずまきナルト, Uzumaki Naruto) is a shinobi of Konohagakure's Uzumaki clan. He became the jinchūriki of the Nine-Tails on the day of his birth — a fate that caused him to be shunned by most of Konoha throughout his childhood. After joining Team Kakashi, Naruto worked hard to gain the village's acknowledgement all the while chasing his dream to become Hokage.`,
  },
  {
    image:
      "https://www.enwallpaper.com/wp-content/uploads/2022/03/zoro-wallpaper-whatspaper-14.jpg",
    id: "3",
    title: " roronoa zoro",
    discreption: `Roronoa Zoro, also known as "Pirate Hunter" Zoro, is the combatant of the Straw Hat Pirates, and one of their two swordsmen. Formerly a bounty hunter, he is the second member of Luffys crew and the first to join it, doing so in the Romance Dawn Arc

As a master of Three Sword Style, a swordsmanship style which he created during his childhood training in Shimotsuki Village, Zoro is among the three most powerful combatants of the Straw Hats, alongside Luffy and Sanji.His dream is to become the greatest swordsman in the world, in order to honor a promise he made to his deceased childhood friend Kuina.`,
  },
];

const galleryloop = () => {
  for (i = 0; i < gallery.length; i++) {
    const title = $(`<h2>${gallery[i].title} <h2>`);

    // --------------img things -------------------------------
    const galleryall = gallery[i];
    const imgdiv = $(`<div ></div>`);
    $(imgdiv).addClass("imgdiv");
    const image = $(`<img src=${gallery[i].image} />`);
    const imageid = $(`<id>${gallery[i].id} </id>`);

    // -------------------------------------------------------

    // --------------disctreption things ------------------
    const discreption = gallery[i].discreption.substring(0, 50);
    const discreptiondiv = $(`<div></div>`);
    $(discreptiondiv).addClass("discreptiondiv");
    discreptiondiv.append(discreption);
    const fulldiscreption = gallery[i].discreption;

    // --------------------------

    //-------------------- FAV----------------------

    const favbutton = $(
      `<button id= ${gallery[i].id}  > Add To Favorite </button>`
    );

    $(favbutton).addClass("favbutton");
    imgdiv.append(favbutton);
    // console.log(galleryall )
    favbutton.on("click", function () {
      console.log(this);
      console.log(galleryall);
      fav.push(galleryall);
      this.disabled = true;
      localStorage.setItem( 'fav' , JSON.stringify(fav))
    });
    
    //------------------------------------------------------
  
    // -------------css--------------
    $(favbutton).hide();
    $(imgdiv).append(imageid);
    $(imgdiv).append(title);
    $(title).css("text-align", "center");
    $(title).css("position", "relative");
    $(title).css({ left: 80 });
    $(imgdiv).append(image);

    $(imgdiv).append(discreptiondiv);
    $(`.gallery`).append($(imgdiv));
    $(`.gallery`).css("display", "grid");

    $(title).css("width", "50%");
    $(title).css("color", "silver");
    $(image).css("width", "400");
    $(image).height("400");
    $(image).css("border-radius", "10%");
    //-------------------------------------------

    // ----------------- info page -------
    const seemore = $(image).on("click", () => {
      $(gallerydiv).hide();
      $(".imgdiv ").hide();
      $(favbutton).show();
      $(imgdiv).show();
      $(".discreptiondiv").text(fulldiscreption);
      singlediv.append(imgdiv);
      singlediv.show();
      $(image).css("position", "relative");
      $(image).css({ left: 700 });
      $(".discreptiondiv").css("text-align", "center");
      $(".discreptiondiv").css("position", "relative");

      $(".discreptiondiv").text(fulldiscreption);
      $(title).css({ left: 5 });
      $(title).css("width", "100%");
      $(favbutton).css("position", "relative");
      $(favbutton).css({ left: 825 });

     
    });
  }
};
galleryloop();

// ---------------------------

const back = $(".h1").on("click", () => {
  $(".imgdiv ").hide();
  singlediv.hide();
  galleryloop();
});


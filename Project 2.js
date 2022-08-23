const body = $("body");
$(body).addClass("body");
const categorydiv = $(".categories");
const gallerydiv = $(".gallery");
const singlediv = $(".singlediv");
singlediv.hide();
let fav = JSON.parse(localStorage.getItem("fav")) || [];
let logincontainer = JSON.parse(localStorage.getItem("reg")) || [];
let lightordark = localStorage.getItem("");
const favdiv = $(".favlist");

const gallery = [
  {
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/494d65d3-3b70-4f89-b274-76bc7fd5e470/df0o1t4-ab14ce55-de63-4254-a2ce-d63d53407a4b.png/v1/fill/w_1280,h_1795,strp/sasuke_uchiha_by_tokyosaiyan_df0o1t4-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ5NGQ2NWQzLTNiNzAtNGY4OS1iMjc0LTc2YmM3ZmQ1ZTQ3MFwvZGYwbzF0NC1hYjE0Y2U1NS1kZTYzLTQyNTQtYTJjZS1kNjNkNTM0MDdhNGIucG5nIiwiaGVpZ2h0IjoiPD0xNzk1Iiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvNDk0ZDY1ZDMtM2I3MC00Zjg5LWIyNzQtNzZiYzdmZDVlNDcwXC90b2t5b3NhaXlhbi00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.pxvLN6dK8cF4Tl3kSzDsISDnms8Trjkv3evPuX_0ViI",
    id: "0",
    title: " Sasuke Uchiha ",
    discreption: `Sasuke Uchiha (うちはサスケ, Uchiha Sasuke) is one of the last surviving members of Konohagakure's Uchiha clan. After his older brother, Itachi, slaughtered their clan, Sasuke made it his mission in life to avenge them by killing Itachi. He is added to Team 7 upon becoming a ninja and, through competition with his rival and best friend, Naruto Uzumaki, Sasuke starts developing his skills.`,
    category: "Naruto",
  },
  {
    image:
      "https://myandroidwalls.com/wp-content/uploads/2022/07/Cool-Naruto-Wallpaper-4k.jpg",
    id: "1",
    title: "Naruto Uzumaki ",
    discreption: `Naruto Uzumaki (うずまきナルト, Uzumaki Naruto) is a shinobi of Konohagakure's Uzumaki clan. He became the jinchūriki of the Nine-Tails on the day of his birth — a fate that caused him to be shunned by most of Konoha throughout his childhood. After joining Team Kakashi, Naruto worked hard to gain the village's acknowledgement all the while chasing his dream to become Hokage.`,
    category: "Naruto",
  },
  {
    image:
      "https://naniwallpaper.com/files/wallpapers/kakashi-hatake/51-Kakashi%20Hatake-1080x1920.jpg",
    id: "2",
    title: "Kakashi Hatake",
    discreption: `Kakashi Hatake is a fictional character in the Naruto manga and anime series created by Masashi Kishimoto. In the story, Kakashi is the teacher of Team 7, consisting of the series' primary characters, Naruto Uzumaki, Sasuke Uchiha, and Sakura Haruno `,
    category: "Naruto",
  },
  {
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6e72e332-c90f-40a6-a27c-bb706e357154/df1y455-ddf2455a-9834-442b-848e-70d7dc81aae0.png/v1/fill/w_1920,h_2716,q_80,strp/uchiha_madara_by_deriavis_df1y455-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjcxNiIsInBhdGgiOiJcL2ZcLzZlNzJlMzMyLWM5MGYtNDBhNi1hMjdjLWJiNzA2ZTM1NzE1NFwvZGYxeTQ1NS1kZGYyNDU1YS05ODM0LTQ0MmItODQ4ZS03MGQ3ZGM4MWFhZTAucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.w77uksQz0daqOVLVRqrf7D-xihDzwLBkBKitg0lKfTQ",
    id: "3",
    title: "Madara Uchiha",
    discreption: `Madara Uchiha is a fictional manga and anime character in the Naruto series created by Masashi Kishimoto. He appears for the first time in "Part II" of the manga and the Shippuden anime adaptation, as a major villain `,
    category: "Naruto",
  },
  {
    image:
      "https://wallpapers.oceanofwallpapers.com/wallpapers/previews/wallpaper-732jg3-516910-Preview.webp",
    id: "4",
    title: "Monkey D Luffy ",
    discreption: `Monkey D. Luffy, also known as " Straw Hat Luffy" and commonly as "Straw Hat", is the main protagonist of the manga and anime, One Piece. He is the founder and captain of the increasingly infamous and powerful Straw Hat Pirates, as well as one of its top fighters. His lifelong dream is to become the Pirate King by finding the legendary treasure left behind by the late Gol D. Roger. He believes that being the Pirate King means having the most freedom in the world.`,
    category: "One peice",
  },

  {
    image:
      "https://www.enwallpaper.com/wp-content/uploads/2022/03/zoro-wallpaper-whatspaper-14.jpg",
    id: "5",
    title: " roronoa zoro",
    discreption: `Roronoa Zoro, also known as "Pirate Hunter" Zoro, is the combatant of the Straw Hat Pirates, and one of their two swordsmen. Formerly a bounty hunter, he is the second member of Luffys crew and the first to join it, doing so in the Romance Dawn Arc

As a master of Three Sword Style, a swordsmanship style which he created during his childhood training in Shimotsuki Village, Zoro is among the three most powerful combatants of the Straw Hats, alongside Luffy and Sanji.His dream is to become the greatest swordsman in the world, in order to honor a promise he made to his deceased childhood friend Kuina.`,
    category: "One peice",
  },
  {
    image:
      "https://image.winudf.com/v2/image/Y29tLmFuZHJvbW8uZGV2NjkxOTM5LmFwcDc3NDQ4MV9zY3JlZW5fMV8xNTIzMjI5OTE0XzAxMw/screen-1.jpg?fakeurl=1&type=.webp",
    id: "6",
    title: "Sabo",
    discreption: `Sabo is a hero from the One Piece anime/manga. He is the Chief of Staff of the Revolutionary Army, and is recognized as the "No. 2" of the entire organization, being directly after Dragon himself in terms of command.
`,
    category: "One peice",
  },
  {
    image:
      "https://fsa.zobj.net/crop.php?r=AKyJVfzk4pZGnk7z3Nbb45jpaGjWPxqD8FtXqlJ8wmS23425fz21a5wKv5_R5thGrJ23AoY6Nk-gbXufZ-CBdZQZNI06uXBXcNdu3KMSdi4VKGNs6kPa4bsFWYHHQbFZkvqZd10bXbThIf6jQzTGLDObRLNEPD3wJMd58vOukmphFaXqeSO8WWGPYvZ5vOKpp_z2dAUyWqOXJN9s",
    id: "6",
    title: "Sanji",
    discreption: `Vinsmoke Sanji, also known as "Black Leg" Sanji, is a fictional character in the One Piece franchise created by Eiichiro Oda. A native to the North Blue, Sanji grew up as part of the Vinsmoke family under his father Vinsmoke Judge, king of the Germa Kingdom, and mother Vinsmoke Sora
  `,
    category: "One peice",
  },
];

const categoriess = [
  { name: "Naruto", id: 0 },
  { name: "One peice", id: 1 },
];

//--------------------------- GALLERY LOOP --------------------------------//
const galleryloop = (copygallery) => {
  copygallery.forEach(function (elem, i) {
    const title = $(`<h2 class=title >${elem.title} <h2>`);

    // --------------------------img things -------------------------------//
    const galleryall = elem;
    const imgdiv = $(`<div ></div>`);
    $(imgdiv).addClass("imgdiv");
    const image = $(`<img class=img src=${elem.image} />`);
    const imageid = $(`<id>${elem.id} </id>`);

    // -------------------------------------------------------//

    // --------------disctreption things ------------------//
    const discreption = elem.discreption.substring(0, 50);
    const discreptiondiv = $(`<div></div>`);
    $(discreptiondiv).addClass("discreptiondiv");
    discreptiondiv.append(discreption);
    const fulldiscreption = elem.discreption;

    // ------------------------------------------------------//

    //----------------------- FAV----------------------------//

    const favbutton = $(`<button id= ${elem.id}  > Add To Favorite </button>`);

    $(favbutton).addClass("favbutton");
    imgdiv.append(favbutton);
    // console.log(galleryall )
    favbutton.on("click", function () {
      //  console.log(this);
      // console.log(galleryall);
      fav.push(galleryall);
      this.disabled = true;

      localStorage.setItem("fav", JSON.stringify(fav));

      // console.log(fav)
    });
    //------------------------------------------------------//

    //-------------------------- Like-----------------------//

    const likebutton = $(`<button  > Like </button>`);

    $(likebutton).addClass("likebutton");
    imgdiv.append(likebutton);
    // console.log(galleryall )

    likebutton.on("click", function () {
      // console.log(this);
      // console.log(likebutton);
      $(likebutton).css("background", "green");
      $(likebutton).text("Liked !");
      this.disabled = true;
    });

    //-----------------Dislike --------------------//
    const dislikebutton = $(`<button  > DisLike </button>`);

    $(dislikebutton).addClass("dislikebutton");
    imgdiv.append(dislikebutton);
    // console.log(galleryall )
    dislikebutton.on("click", function () {
      $(dislikebutton).css("background", "red");
      $(dislikebutton).text("disLiked !");
      this.disabled = true;

      const comment = $("<input id = input>");
      const tellUsWhy = $("<p> Tell Us Why </p>");
      $(comment).addClass("comment");
      $(tellUsWhy).addClass("why");

      imgdiv.append(comment);
      imgdiv.append(tellUsWhy);
    });

    //------------------------------------------------------//

    //-----------------Remove from fav ------------------//

    const removefromfav = $(
      `<button id = ${elem.id}  > remove from fav </button>`
    );

    $(removefromfav).addClass(`removefrom`);
    imgdiv.append(removefromfav);
    removefromfav.on("click", (e) => {
      fav.filter(function (elem, i) {
        if (elem.id === e.target.id) {
          fav.splice(i, 1);

          $(".imgdiv").remove();
          $(".singlediv").hide();

          galleryloop(fav);

          $(".removefrom").show();
          localStorage.setItem("fav", JSON.stringify(fav));
        }
      });
    });
    //------------------------------------------------------//

    // -------------css--------------
    $(removefromfav).hide();
    $(imageid).hide();
    $(dislikebutton).hide();
    $(likebutton).hide();
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
    //$(title).css("color", "silver");
    $(image).css("width", "400");
    $(image).height("600");
    $(image).css("border-radius", "10%");
    //-------------------------------------------

    // ----------------- info page -------
    const seemore = $(image).on("click", () => {
      $(gallerydiv).hide();
      $(".imgdiv ").hide();
      $(dislikebutton).show();
      $(likebutton).show();
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
  });
};
galleryloop(gallery);

//--------------------------- GALLERY LOOP END --------------------------------//

//--------------------------------CATEGORIES Loop ----------------------------//
const categoriesloop = () => {
  for (let i = 0; i < categoriess.length; i++) {
    const name = $(`<h5 >${categoriess[i].name} </h5>`);
    $(name).addClass(`name`);

    $(name).on("click", function (e) {
      // console.log($(name).text()   )
      const aa = gallery.filter(function (elem, i) {
        // console.log(e.target);

        // console.log($(name).text() )
        //console.log(elem.category)

        if (e.target.innerText == gallery[i].category) {
          $(".imgdiv").remove();
          return true;
        }
      });

      galleryloop(aa);
    });

    $(categorydiv).append(name);
  }
};

categoriesloop();

//-------------------------------- CATEGORY LOOP END------------------------------------//

//------------------------------- BACK LOOP --------------------------------

const back = $(".h1").on("click", () => {
  $(".imgdiv ").hide();

  $(".imgdiv1").hide();
  singlediv.hide();
  $(".fimgdiv").hide();
  galleryloop(gallery);
});

//---------------------------------BACK LOOP END ----------------------------------------//

//---------------------------------FAVLIST LOOP ------------------------------------//

const myfavlist = () => {
  favlistbutton = $("<button class = favlistbutton > My Fav List</button>");
  $(".header").append(favlistbutton);
  favlistbutton.on("click ", () => {
    $(".imgdiv").remove();
    $(".singlediv").hide();

    galleryloop(fav);

    $(".removefrom").show();
  });
};
myfavlist();

//---------------------------------FAVLIST LOOP End ------------------------------------//

//---------------------------Login page ----------------------------

//---------------------------- Login elements and css----------------------------------------//
//------------------------------ Global Scope ----------------------------------//

const loginbutt = $("<button id = loginmain >LOGIN </button> ");
$(body).append(loginbutt);

const logicontainer = $("<div class=logincontainer   ></div>");
const Logininput = $(`<input id=text class = logininput  >`);
const logindiv = $("<div class=logidiv   ></div>");
const loginusername = $("<p class= username > Username </p>");

const Logininputpass = $(
  "<input type= password id=pass  class = logininputpass >"
);
const loginpass = $("<p class= loginpass  > Password  </p>");
const loginbutton = $("<button class = loginbutton> Login </button> ");
const registerbutt = $("<button class = registerbutton> Register </button> ");

const modeldiv = $("<div class= modal ></div> ");
const contentdiv = $("<div class= modal-content ></div> ");
const closee = $(`<span class=close >&times;</span>`);
const p = $("<p class=p1  ></p> ");
modeldiv.append(contentdiv);
modeldiv.append(closee);
modeldiv.append(p);
body.append(modeldiv);

loginbutt.on("click", () => {
  $(modeldiv).css("display", "block");
  contentdiv.append(loginusername);
  contentdiv.append(Logininput);
  contentdiv.append(loginpass);
  contentdiv.append(Logininputpass);
  contentdiv.append(loginbutton);
  $(registerbutt).hide();
  $(loginbutton).show();
  $(Logininput).attr("placeholder", " Write Your Email Here !! ");
  $(Logininputpass).attr("placeholder", " Write Your Password Here !! ");

  // contentdiv.append(logindiv)
});

closee.on("click", () => {
  $(modeldiv).css("display", "none");
});

//--------------------- Login elements and css End--------------------------------------//

//--------------------- register  elements and css --------------------------------------//
const registerbutton = $("<button id = registerbutton >Join Us! </button> ");
$(body).append(registerbutton);

registerbutton.on("click", () => {
  contentdiv.append(loginusername);
  contentdiv.append(Logininput);
  contentdiv.append(loginpass);
  contentdiv.append(Logininputpass);
  contentdiv.append(registerbutt);
  $(registerbutt).show();
  $(loginbutton).hide();

  $(modeldiv).css("display", "block");

  $(Logininput).attr("placeholder", " Write Your Email Here !! ");
  $(Logininputpass).attr("placeholder", " Write Your Password Here !! ");
});
closee.on("click", () => {
  $(modeldiv).css("display", "none");
});

registerbutt.on("click", () => {
  if ($("#text").val().length < 6) {
    const lessthan6 = $(
      "<p class = lessthan6 > Your Username must be  at least 6 characters ! </p>"
    );
    contentdiv.append(lessthan6);
  } else if ($("#pass").val().length < 8) {
    const lessthan8 = $(
      "<p class = lessthan8 > Your Password must be  at least 8 characters ! </p>"
    );
    contentdiv.append(lessthan8);
  } else if ($("#text").val().length >= 6 && $("#pass").val().length >= 8) {
  /*
 else if($('#text').val().length >= 6 && $('#pass').val().length >= 8 ){

  logincontainer.forEach(function(elem ,i ){

    if ($('#text').val() === elem.username ){
       const existed = $('<p class = existed > Username is already existed !  </p>')
      contentdiv.append(existed)
      console.log(elem.username) 
    }
    
  })
}
*/
    const regsucssfull = $(
      `<p id=loginsucs class = modal-content> Registered Sucssfull </p>`
    );
    $(contentdiv).css("display", "none");
    $(modeldiv).append(regsucssfull);
    $(regsucssfull).css("display", "block");
    $(modeldiv).hide(4000);

    logincontainer.push({
      username: $("#text").val(),
      password: $("#pass").val(),
    });

    localStorage.setItem("reg", JSON.stringify(logincontainer));
  }
});

//--------------------------------LOGIN Logic -------------------------------------//
//------------------------------ GlobalScope End-----------------------------------//
registerloop = () => {
  const loop = logincontainer.forEach(function (elem, i) {
    console.log(elem.username);
    loginbutton.on("click", () => {
      if (
        elem.username == $("#text").val() &&
        elem.password == $("#pass").val()
      ) {
        //alert('Login Sucssfull')

        const loginsucssfull = $(
          `<p id=loginsucs class = modal-content> Login Sucssfull </p>`
        );

        $(contentdiv).css("display", "none");
        $(modeldiv).append(loginsucssfull);
        $(loginsucssfull).css("display", "block");
        $(modeldiv).hide(4000);
        $(registerbutton).hide();
        $(loginbutt).hide();

        const welcome = $(`<p class = welcome> Welcome ${elem.username} </p>`);
        $(".header").append(welcome);
      }
    });
  });
};
registerloop();

//-------------------------------DARK/LIGHT BUTTON-------------------------------//

const darklightpic = $(`<img class=darkorlightimg  src=3_8(1).png>`);
$(".header").append(darklightpic);

darklightpic.on("click", () => {
  $(body).toggleClass("dark-mode");
  $(".categories").toggleClass("dark-mode-content");
  $(".discreptiondiv").toggleClass("dark-mode-content");
  $(".title").toggleClass("dark-mode-content");
  $(".h1").toggleClass("dark-mode-content");
  


});

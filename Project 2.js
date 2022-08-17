const body = $("body");
const categorydiv = $(".categories");
const gallerydiv = $(".gallery");





const gallery = [
  {
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/494d65d3-3b70-4f89-b274-76bc7fd5e470/df0o1t4-ab14ce55-de63-4254-a2ce-d63d53407a4b.png/v1/fill/w_1280,h_1795,strp/sasuke_uchiha_by_tokyosaiyan_df0o1t4-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ5NGQ2NWQzLTNiNzAtNGY4OS1iMjc0LTc2YmM3ZmQ1ZTQ3MFwvZGYwbzF0NC1hYjE0Y2U1NS1kZTYzLTQyNTQtYTJjZS1kNjNkNTM0MDdhNGIucG5nIiwiaGVpZ2h0IjoiPD0xNzk1Iiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvNDk0ZDY1ZDMtM2I3MC00Zjg5LWIyNzQtNzZiYzdmZDVlNDcwXC90b2t5b3NhaXlhbi00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.pxvLN6dK8cF4Tl3kSzDsISDnms8Trjkv3evPuX_0ViI",
    id: "0",
    title: " Sasuke Uchiha ",
  },
  {
    image : "https://wallpapers.oceanofwallpapers.com/wallpapers/previews/wallpaper-732jg3-516910-Preview.webp" ,
    id : "1" ,
    title : "Monkey D Luffy "
  },
  { image : "https://myandroidwalls.com/wp-content/uploads/2022/07/Cool-Naruto-Wallpaper-4k.jpg" ,
  id : "2" ,
  title : 'Naruto '
  },
{image : "https://www.enwallpaper.com/wp-content/uploads/2022/03/zoro-wallpaper-whatspaper-14.jpg" ,
id : '3' ,
title : " roronoa zoro"
}
];


const galleryloop = () => {
  for (i = 0; i < gallery.length; i++) {
const title = $(`<h2>${gallery[i].title} <h2>`)
  const imgdiv=  $(`<div ></div>`)
  $(imgdiv).addClass('imgdiv')
    const image = $(`<img src=${gallery[i].image} />`);
    const imageid= $( `<id>${gallery[i].id} </id>`)
    
    image.append(imageid)
  $(imgdiv).append(title)
   $(title).css("text-align" , "center" )
    $(imgdiv).append(image);  
    $(`.gallery`).append($(imgdiv))
    
    $(title).css("width" , "50%" )
    $(image).css("width" , "464px" )
    $(image).css(" height" , "772px" )
  
  }
};
galleryloop();



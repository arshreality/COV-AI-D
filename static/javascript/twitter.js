function off() {
  jQuery(function ($) {
    $("#overlay").slideToggle("slow");
  });
}

var flag_dict = {
  "India🇮🇳": "https://twitter.com/PMOIndia?ref_src=twsrc%5Etfw",
  "USA🇺🇸": "https://twitter.com/realDonaldTrump?ref_src=twsrc%5Etfw",
  "Canada🇨🇦": "https://twitter.com/JustinTrudeau?ref_src=twsrc%5Etfw",
  "Italy🇮🇹": "https://twitter.com/GiuseppeConteIT?ref_src=twsrc%5Etfw",
  "China🇨🇳": "https://twitter.com/PDChina?ref_src=twsrc%5Etfw",
  "UK🇬🇧": "https://twitter.com/BorisJohnson?ref_src=twsrc%5Etfw",
  "Spain🇪🇸": "https://twitter.com/sanchezcastejon?ref_src=twsrc%5Etfw",
  "Germany🇩🇪": "https://twitter.com/twitterde?ref_src=twsrc%5Etfw",
  "Russia🇷🇺": "https://twitter.com/KremlinRussia_E?ref_src=twsrc%5Etfw",
  "Iran🇮🇷": "https://twitter.com/HassanRouhani?ref_src=twsrc%5Etfw",
  "Turkey🇹🇷": "https://twitter.com/RTErdogan?ref_src=twsrc%5Etfw",
  "France🇫🇷": "https://twitter.com/MacronInEnglish?ref_src=twsrc%5Etfw",
};

document.querySelectorAll(".button").forEach((item) => {
  item.addEventListener("click", (event) => {
    var key = item.textContent.replace(/\s/g, "");
    jQuery(function ($) {
      $("#leaders iframe").remove();
      var tweetBtn = $("<a></a>")
        .addClass("twitter-timeline")
        .attr("data-chrome", "noheader, noborders, transparent, noscrollbar")
        .attr("data-height", "5000")
        .attr("href", flag_dict[key]);
      var test = $("<script async><//script>")
        .attr("src", "https://platform.twitter.com/widgets.js")
        .attr("charset", "utf-8");
      $("#leaders").append(tweetBtn);
      $("#leaders").append(test);
      twttr.widgets.load();
    });
  });
});

document.querySelectorAll(".buttonModal").forEach((item) => {
  item.addEventListener("click", (event) => {
    var key = item.textContent.replace(/\s/g, "");
    jQuery(function ($) {
      $("#leadersModal iframe").remove();
      var tweetBtn = $("<a></a>")
        .addClass("twitter-timeline")
        .attr("data-chrome", "noheader, noborders, transparent, noscrollbar")
        .attr("href", flag_dict[key]);
      var test = $("<script async><//script>")
        .attr("src", "https://platform.twitter.com/widgets.js")
        .attr("charset", "utf-8");
      $("#leadersModal").append(tweetBtn);
      $("#leadersModal").append(test);
      twttr.widgets.load();
    });
  });
});

var modal = document.getElementsByClassName("modal");
var modal1 = document.getElementById("myModal1");

var btn1 = document.getElementById("myBtn1");

var span1 = document.getElementsByClassName("close1")[0];

btn1.onclick = function () {
  
  jQuery(function ($) {
    $(modal1).slideToggle("slow");
  });
  document.getElementById("overlay").style.display = "none";
};

span1.onclick = function () {
  modal1.style.display = "none";
  jQuery(function ($) {
    $("#overlay").slideToggle("fast");
  });
};

var modal2 = document.getElementById("myModal2");

var btn2 = document.getElementById("myBtn2");

var span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function () {
  jQuery(function ($) {
    $(modal2).slideToggle("slow");
  });
  document.getElementById("overlay").style.display = "none";;
};

span2.onclick = function () {
  modal2.style.display = "none";
  jQuery(function ($) {
    $("#overlay").slideToggle("fast");
  });
};

var modal3 = document.getElementById("myModal3");

var btn3 = document.getElementById("myBtn3");

var span3 = document.getElementsByClassName("close3")[0];

btn3.onclick = function () {
  jQuery(function ($) {
    $(modal3).slideToggle("slow");
  });
  document.getElementById("overlay").style.display = "none";;
};

span3.onclick = function () {
  modal3.style.display = "none";
  jQuery(function ($) {
    $("#overlay").slideToggle("fast");
  });
};

// window.onclick = function (event) {
//   if (event.target == modal) {
//     jQuery(function ($) {
//       $(modal).slideToggle("slow");
//       $("#overlay").slideToggle("slow");
//     });
//   }
// };

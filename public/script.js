 // typescript

 var typed = new Typed(".htyped", {
    strings: [
      "Hello...",
      " Welcome to Our Website ",
      "In this website",
      "we will explore about Many languages like...",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    typeSpeed: 60,
    backSpeed: 10,
    loop: true,
  });
  
  // Searchicon creation
  
  const search = document.querySelector(".searchi");
  const searchi = document.querySelector(".scinput");
  
  search.sonclick = function () {
    searchi.classList.toggle("sinput");
  };
  
  // darkmode icon creation

  var darki = document.getElementById("darki");

  darki.ionclick = function () {
    document.body.classList.toggle("dark-theme");
  };

  //create previous or next button 

  var visibleDiv = 0;
  function showDive(){
    $(".html-a-rc").hide();
    $(".html-a-rc:eq("+ visibleDiv +")").show();
  }
  showDive()
  function next(){
    if(visibleDiv== $(".html-a-rc").length-1){
      visibleDiv = 0;
    }
    else{
      visibleDiv ++;
    }
    showDive();
  }
  function previous(){
    if(visibleDiv== 0){
      visibleDiv= $(".html-a-rc").length-1;
    }
    else{
      visibleDiv --;
    }
    showDive();
  }


  // hamburger creation 

  var hamb = document.querySelector(".hamburger");
  var ullists = document.querySelector(".nav-a-links");

  hamb.hamclick = function(){
    ullists.classList.toggle("ul1");
  }
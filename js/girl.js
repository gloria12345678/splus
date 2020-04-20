document.write('<script src="../swiper.min.js"></script>');
var pcGirlAll = document.getElementById('pcGirlAll');
var fragment = document.createDocumentFragment();
var apiList1 = document.getElementById('PcGirlPhoto');
var myList2 = document.getElementById('catchMynews1');
var myApi ="https://test-cms-alpha.herokuapp.com/sites/3/profiles.json"
var myApi1 ="https://test-cms-alpha.herokuapp.com/sites/9/tweets.json"
function loadIndexStaff(){
  let xhr = new XMLHttpRequest();
  xhr.open("GET",myApi,true);
  xhr.onload = function(){
      if(this.status == 200){
        var json = JSON.parse(this.responseText);
        console.log(json);
        for(var i = 0; i < json.length; i++) {
          var girlPhoto =document.createElement("li");
          girlPhoto.innerHTML = '<img src="https://test-cms-alpha.herokuapp.com'+json[i].avatars[0]+'"><div style="width: 200px;height: 285px;position: absolute;top: 0px;"class="watermark watermark1"></div>';
          fragment.appendChild(girlPhoto);
          pcGirlAll.appendChild(girlPhoto);
        }
        $(function(){
          var oul = $('.wrap ul');
          var oulHtml = oul.html();
          oul.html(oulHtml+oulHtml)
          var timeId = null;
        
          var ali = $('.wrap ul li');
          var aliWidth = ali.eq(0).width();
          var aliSize = ali.size();
          var ulWidth = aliWidth*aliSize;
          oul.width(ulWidth);	//1600px
          var speed = 2;
          function slider(){
            if(speed<0){
              if(oul.css('left')==-ulWidth/2+'px'){
               oul.css('left',0);
               }
               oul.css('left','+=-2px');
            }
            if(speed>0){
              if(oul.css('left')=='0px'){
               oul.css('left',-ulWidth/2+'px');
               }
               oul.css('left','+='+speed+'px');
            }
           }
           timeId = setInterval(slider,30);
        });
          for(var i = 0; i < json.length; i++) {
            var girlPhoto =document.createElement("div");
            girlPhoto.setAttribute("class","swiper-slide");
            girlPhoto.setAttribute("id","swiper2");
            girlPhoto.innerHTML = '<div class="girlPhotoBox"><img src="https://test-cms-alpha.herokuapp.com'+json[i].avatars[0]+'"><div class="watermark"></div></div>';
            apiList1.appendChild(girlPhoto);
            var swiper = new Swiper('#Swiper0', {
              loop : true,
              autoplay:2000,
            });
          }
      }              
  }
  xhr.send();
}
function loadnews(){
  let xhr = new XMLHttpRequest();
  xhr.open("GET",myApi1,true);
  xhr.onload = function(){
      if(this.status == 200){
         var json = JSON.parse(this.responseText);
          console.log(json);
          for(var i = 0; i < json.length; i++) {
              var listItem = document.createElement('div');
              listItem.innerHTML = '<p>' + json[i].created_at+ '</p>';
              listItem.innerHTML +='<hr>';
              listItem.innerHTML +='<p>' + json[i].content + '<p>';
              let winWidth = apiList1.offsetWidth;
                myList2.appendChild(listItem);
          }
      }              
  }
  xhr.send();
}
  loadIndexStaff()
  loadnews()
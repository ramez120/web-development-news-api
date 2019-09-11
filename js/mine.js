
var req = new XMLHttpRequest();
var homereq = new XMLHttpRequest();
var news;
var countries=["ae","eg","fr","jp","us"];
var category = 'general';
var articles=[];
var Country="";
var cont="us";
/*$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });*/
homeDisplay(cont);


for(var i=0;i<countries.length;i++)
{
    Country+='<a class="dropdown-item" href="#">'+countries[i]+'</a>';
}
document.querySelector(".dropdown-menu").innerHTML+=Country;
//reqs(cont,category);

function reqs(cots,cat,start){


req.open("GET",'https://newsapi.org/v2/top-headlines?country='+cots+'&category='+cat+'&apiKey=9ead8e348bb449b6aa20ccbaa412a6fc');

req.send();

req.onreadystatechange=function(){

if(req.status == 200&&req.readyState == 4 )
{
    news= JSON.parse(req.response);
    articles =news.articles;
    displayNews(start);
}

}
}



  document.getElementById("news-row").innerHTML = "";


function displayNews(start){
  
    
var newsitems ="";
if (start != undefined && start != null)
{
    for(var i=3;i<articles.length;i++)
    {
        var flag =true;
        if(articles[i].urlToImage == null || articles[i].urlToImage == "" || articles[i].urlToImage == undefined)
        {
            articles[i].urlToImage = "images/news.png";
        }
        if(articles[i].description == null)
        {
            articles[i].description = "";
        }
    
    
            if(category == 'general')
            category = 'local news'
      
        document.getElementById("head").innerHTML=category;
    
         newsitems += '<div class="col-md-12 col-lg-5 my-5"><div class="item"><img src="'+articles[i].urlToImage+'"class="" alt=".."></div></div><div class="col-lg-7 my-5"><div class="content"><a href="'+articles[i].url+'">'+articles[i].title+'</a><p>'+articles[i].publishedAt+'</p><p>'+articles[i].source.name+'</p>'+articles[i].description+'</p></div></div>';
    document.getElementById("news-row").innerHTML=newsitems;
    }
}
else{

}
for(var i=0;i<articles.length;i++)
{
    var flag =true;
    if(articles[i].urlToImage == null || articles[i].urlToImage == "" || articles[i].urlToImage == undefined)
    {
        articles[i].urlToImage = "images/news.png";
    }
    if(articles[i].description == null)
    {
        articles[i].description = "";
    }



  
    document.getElementById("head").innerHTML=category;

     newsitems += '<div class="col-md-12 col-lg-5 my-5"><div class="item"><img src="'+articles[i].urlToImage+'"class="" alt=".."></div></div><div class="col-lg-7 my-5"><div class="content"><a href="'+articles[i].url+'">'+articles[i].title+'</a><p>'+articles[i].publishedAt+'</p><p>'+articles[i].source.name+'</p>'+articles[i].description+'</p></div></div>';
document.getElementById("news-row").innerHTML=newsitems;
}

}
$(window).on('load',function(){

    load();
})
    /*var imgs = document.getElementsByTagName("img");
for(var i =0;i<imgs.length;i++)
{
    
    if(urlExists(imgs[i].src) == false )
    {
        imgs[i].src = "images/news.png";
    }
}


});*/
function load(){
    document.getElementById("loading").style.display="none";
$("body").css({"overflow":"auto"});

}
var countryCont = document.querySelectorAll(".dropdown-item");
for(var i=0;i<countryCont.length;i++)
{
    countryCont[i].addEventListener("click",function(e){

        cont = e.target.innerHTML;
        
        reqs(cont,category,undefined);
        document.querySelector("body").style.overflow="hidden";
        document.getElementById("loading").style.display="block";
       load();


  
    })
}



var linkz = document.querySelectorAll(".active a");
for(var i=0;i<linkz.length;i++)
{
    linkz[i].addEventListener("click",function(e){
    function displayPages(){
        category = e.target.innerHTML;
        if(category == "Home")
        {
            category = 'general';
        }
        if(category != 'general')
        {
            document.querySelector(".sk").style.display="none";

        reqs(cont,category,undefined);
        document.querySelector("body").style.overflow="hidden";
        document.getElementById("loading").style.display="flex";

        document.querySelector(".img1 img").style.display = "none";
        document.querySelector(".img2 img").style.display = "none";

        document.querySelector(".img3 img").style.display = "none";
        document.querySelector("#content1").style.display = "none";
        document.querySelector("#content2").style.display = "none";

        document.querySelector("#content3").style.display = "none";
        document.querySelector("#overlay1").style.display = "none";
        document.querySelector("#overlay2").style.display = "none";
        document.querySelector("#overlay3").style.display = "none";

        document.querySelector(".head2").style.display = "none";
       load();

        }
        else{
            document.querySelector(".sk").style.display="block";
            
           homeDisplay(cont);

        }
    }
        
        displayPages();
       


    })
}





document.addEventListener("keydown",function(e){
    document.querySelector(".head2").style.display="none";
    document.querySelector(".head2").style.border="0";

        if(e.keyCode  == 13)
       {
           
           category = '"'+document.getElementById("searchRes").value+'"';
    reqevery();
    $(".dummy .searchIn").animate({"left":"-2000"}, 600,function()
    {
       
        $(".nav-col").animate({"right":"0"},600);
    
    
    })
    document.querySelector("#searchRes").value ="";
    document.querySelector(".container-design").style.display="none";
}
      
    
})


    





document.getElementById("search").addEventListener("click",function(){

    $(".nav-col").animate({"right":"-1900"}, 600,function()
    {
        $(".dummy .searchIn").animate({"left":"20"},600);
    })
    
    
    })
   
        document.getElementById("closeSearch").addEventListener("click",function(){
        

        $(".dummy .searchIn").animate({"left":"-2000"}, 600,function()
        {
           
            $(".nav-col").animate({"right":"0"},600);
        
        
        })
        
        
        })
    
    
        
        var homenews;
        document.getElementById("searchConf").addEventListener("click",function(){
            document.querySelector(".head2").style.display="none";
            document.querySelector(".head2").style.border="0";
        category = '"'+document.getElementById("searchRes").value+'"';
    reqevery();
    $(".dummy .searchIn").animate({"left":"-2000"}, 600,function()
    {
       
        $(".nav-col").animate({"right":"0"},600);
    
    
    })
    document.querySelector("#searchRes").value ="";
    document.querySelector(".container-design").style.display="none";


        })   
       function reqevery(){

     var keys= document.getElementById("searchRes").value;
        req.open("GET",'https://newsapi.org/v2/everything?q="'+keys+'"&from=2019-08-12&sortBy=publishedAt&apiKey=9ead8e348bb449b6aa20ccbaa412a6fc');

        req.send();
        
        req.onreadystatechange=function(){
        
        if(req.status == 200&&req.readyState == 4 )
        {
            news= JSON.parse(req.response);
            articles =news.articles;
            displayNews();
        }
        
        }

       }     





  function homeDisplay(homecountry)
   {
    document.querySelector(".container-design").style.display="block";
    document.querySelector(".head2").style.display = "block";
    document.querySelector(".head2").style.borderBottom = "1px solid black";
   



              document.getElementById("news-row").innerHTML = "";
             
               homereq.open("GET",'https://newsapi.org/v2/top-headlines?country='+homecountry+'&category=general&apiKey=9ead8e348bb449b6aa20ccbaa412a6fc');
               homereq.send();
               homereq.onreadystatechange =function(){
               if(homereq.status == 200 && homereq.readyState == 4)
               {
               
                    homenews = JSON.parse(homereq.response);
                    homenews = homenews.articles;
                    document.querySelector(".head2").style.display="block";
                    if( homenews[0].urlToImage == null || homenews[0].urlToImage == "")
                    homenews[0].urlToImage = "images/news.png";
                     document.querySelector(".img1 img").src = homenews[0].urlToImage;
                     document.querySelector(".img2 img").src = homenews[1].urlToImage;

                     document.querySelector(".img3 img").src = homenews[2].urlToImage;
                     $(".img1 img").show(1000);
                     $(".img2 img").show(1000);

                     $(".img3 img").show(1000);
                     $("#content1").show(1000);
                     $("#content2").show(1000);
                     $("#content3").show(1000);
                     $("#overlay1").show(1000);
                     $("#overlay2").show(1000);
                     $("#overlay3").show(1000);
                     $(".head2").show(1000);
                     if(homenews[0].description == null) homenews[0].description = "click for more";
                     if(homenews[1].description == null) homenews[1].description = "click for more";
                     if(homenews[2].description == null) homenews[2].description = "click for more";

 document.querySelector("#content1").innerHTML =`<p>  ${homenews[0].publishedAt}</p><a href= "${homenews[0].url}">${homenews[0].description}</a>`
 document.querySelector("#content2").innerHTML =`<p>  ${homenews[1].publishedAt}</p><a href= "${homenews[1].url}">${homenews[1].description}</a>`
 document.querySelector("#content3").innerHTML =`<p>  ${homenews[2].publishedAt}</p><a href= "${homenews[2].url}">${homenews[2].description}</a>`

 reqs(cont,category,1);



                     
                     

                  

                  
                  

                      
                        

                  
                   

           
               }
           
           
           
           
               }
           
           
           
    }
        

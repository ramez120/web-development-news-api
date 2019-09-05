var req = new XMLHttpRequest();
var news;
req.open("GET","https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c0b8f3845c7443fa8467f939a7810ef0");


req.onreadystatechange=function(){

if(req.readyState == 4 && req.status == 200)
{
    news= req.response;
    displayNews();
}

}
req.send();



function displayNews(){
    news=JSON.parse(news);
var newsitems ="";

for(var i=0;i<news.articles.length;i++)
{
    newsitems += '<div class="col-md-4 p-5"><div class="item"><div class="card" style="width: 18rem;"><img src="'+news.articles.urlToImage+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+news.articles.title+'</h5><p class="card-text">'+news.articles.description+'</p><a href="'+news.articles.url+'" class="btn btn-primary">Read More..</a></div></div> </div></div>'
}
  
document.getElementById("news-row").innerHTML=newsitems;

}
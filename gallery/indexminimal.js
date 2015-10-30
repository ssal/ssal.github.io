
var short_urls = [];
var photourls = [];

$.getJSON("https://api.tumblr.com/v2/blog/ssalbap.tumblr.com/posts?callback=?", {
    api_key: "ZVoxdzf7Pg1aLrBbZvrjaNhoaHslYN2XI8BGypGtr4LoDm8zro",
    type: "photo"
}).then(function(posts){

    for(var i = 0; i < posts.response.posts.length; ++i){
        //console.log(posts.response.posts[i]);

        var j = Math.floor(Math.random()*posts.response.posts[i].photos.length);

        photourls.push(posts.response.posts[i].photos[j].original_size.url);

        short_urls.push(posts.response.posts[i].short_url);
    }

});

daeumjakpum();

setInterval(ireumbakkugi, 100);

setInterval(daeumjakpum, 10000);





function ireumbakkugi(){

    var r = Math.random();
    if(r > 0.66) title.innerHTML = "쌀"
    else if(r < 0.33) title.innerHTML = "米"
    else {
        title.innerHTML = ""
        title.innerHTML = "ssal"
    }

}

function daeumjakpum(){

    var i = Math.floor(Math.random()*photourls.length);

    document.querySelector("#frame").innerHTML = '<a href = "' + short_urls[i] + '"><img src = "' + photourls[i] + '" width = 100%></img></a>';

}
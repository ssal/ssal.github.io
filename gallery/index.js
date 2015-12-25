
var postids = [];

$.getJSON("https://api.tumblr.com/v2/blog/ssalbap.tumblr.com/posts?callback=?", {
    api_key: "ZVoxdzf7Pg1aLrBbZvrjaNhoaHslYN2XI8BGypGtr4LoDm8zro",
    type: "photo"
}).then(function(posts){

    for(var i = 0; i < posts.response.posts.length; ++i){
        //console.log(posts.response.posts[i].id);
        postids.push(posts.response.posts[i].id);
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

    var postid = postids[Math.round(Math.random()*postids.length)];

    $.getJSON("https://api.tumblr.com/v2/blog/ssalbap.tumblr.com/posts?callback=?", {
        api_key: "ZVoxdzf7Pg1aLrBbZvrjaNhoaHslYN2XI8BGypGtr4LoDm8zro",
        id: postid
    }).then(function(posts){
        //console.log(posts.response.posts[0].photos[0].original_size.url)

        var j = Math.floor(Math.random()*(posts.response.posts[0].photos.length));

        document.querySelector("#frame").innerHTML = '<a href = "http://ssalbap.tumblr.com/' + postid + '"><img src = "' + posts.response.posts[0].photos[j].original_size.url + '" width = 100%></img></a>';

    });

}
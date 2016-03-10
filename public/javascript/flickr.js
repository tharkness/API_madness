//flickr class
  //set up the api link
  //add the api key to the url
  //assemble the actual call (from the api key and the link)

  //getJSOn -> uses the assmbled link

$(function(){

    var index = 0;

    var lighthouses = [];

    var interval;


  function nextImage(){
        var pic = lighthouses[index++%lighthouses.length];
        $('#slideshow').attr('src', pic.url_l);
        $('#photo-link').attr('href', 'https://www.flickr.com/photos/'+pic.owner+'/'+pic.id+'/');
        $('#title').html(pic.title);
        $('#author').html(pic.ownername);
      }

  $('#start').on('click', function(){
    // $.ajax({
    //   url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8dccf5a61cff3ba92457258307762d73&tags=lighthouse&format=json&jsoncallback=?&per_page=10",
    //   method: 'GET',
    //   dataType: 'jsonp',
    //   sucess: function() {
    //     console.log("hello");
    //   }
    // });
    

    //API_KEY = ''
    //generate_fetch_tags_url (API_KEY, tag_parameter) = 'http:///' + API_KEY + '...TAGS ...' +tags

    // function fetch_tags(tag) {
    //   fetch_tags_url = generate_fetch_tags_url(API_KEY, TAG)
    //   $.getJSON(fetch_tags_url, function (data) {
    //     //call respond
    //   })
    // }

    // function parse_tags()


    $.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=8dccf5a61cff3ba92457258307762d73&extras=url_l,views,owner_name&tags=lighthouse&format=json&jsoncallback=?&sort=relevance",
      function (data){
        
        // $('#slideshow').html(data['photos']['photo']);

        // $.each(data['photos']['photo'], function(i,photo){
        //   $('<img/>').attr("src", photo.url_l).appendTo('#slideshow');
        // })
        lighthouses = data['photos']['photo'];

      //   function nextImage(){
      //   $('#slideshow').attr('src', lighthouses[index++%lighthouses.length].url_l);
      // }
      nextImage();
      interval = setInterval(nextImage, 5000);

      })
  });

  $("#stop").on('click', function(){
    clearInterval(interval);
  });

});


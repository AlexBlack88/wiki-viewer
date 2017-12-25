$(document).ready(function() {
  
  var searchIn;
  
  $('#search').on('click', function() {
    searchIn = $("#searchIn").val();
    
      $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
          searchIn +
          "&callback=?",
        async: false,
        dataType: "json",
        success: function(data) {
          //console.log(data[3]);
          $('#searchRes').html('');
          
          for(var i = 0; i <= 10; i++) {
           if(data[3][i] === undefined) {
             return "";
           } else {
             $('#searchRes').append('<a href=' + data[3][i] + ' target="_blank">' + data[1][i] + '</a><p>' + data[2][i] + '</p><br>');
            $('.results').css('background', '#f5f5f5');
           }
             
            
          }
        },
        error: function(err) {
          alert("error!");
        }
      });
    });

         $('#searchIn').bind('keypress', function(e) {
       if(e.keyCode == 13) {
         $('#search').click();
       }
     });
  
        $('#random').on('click', function(e) {
    
         e.preventDefault();
    
         window.open("https://en.wikipedia.org/wiki/Special:Random");
  });
     
});
$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>What up, G?</li>");
    $("ul#user").children("li").first().click(function(){
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function(){
      $(this).remove();
    });
  });
  $("button#goodbye").click(function(){
    $("ul#user").prepend("<li>Goodbye</li>");
    $("ul#webpage").prepend("<li>Byeeee</li>");
    $("ul#user").children("li").first().click(function(){
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function(){
      $(this).remove();
    });
  });
  $("button#stop").click(function(){
    $("ul#user").prepend("<li>Leave Me Alone!</li>");
    $("ul#webpage").prepend("<li>Sorry Mah Bad Dude</li>");
    $("ul#user").children("li").first().click(function(){
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function(){
      $(this).remove();
    });
  });

})

$(document).ready(function(){
  var ToggleReporterElements = function() {
    $(".media-query-reporter").toggle("slow");
    $(".media-query-reporter-switch").toggle("slow");
  };

  $(".media-query-reporter-switch").click(function() {
    ToggleReporterElements();
  });

  $(".media-query-reporter").click(function() {
    ToggleReporterElements();
  });
});


var lang = {
	html: "100%",
	css: "90%",
	javascript: "70%",
	shopify: "55%",
	asp: "65%",
	csharp: "65%",
	node: "45%",
	express: "35%"
  };
  
  var multiply = 4;
  
  $.each(lang, function (language, pourcent) {
	var delay = 650;
  
	setTimeout(function () {
	  $("#" + language + "-pourcent").html(pourcent);
	}, delay * multiply);
  
	multiply++;
  });
  

  var support = (function () {
  	if (!window.DOMParser) return false;
  	var parser = new DOMParser();
  	try {
  		parser.parseFromString('x', 'text/html');
  	} catch(err) {
  		return false;
  	}
  	return true;
  })();

  /**
   * Convert a template string into HTML DOM nodes
   * @param  {String} str The template string
   * @return {Node}       The template HTML
   */
  var stringToHTML = function (str) {

  	// If DOMParser is supported, use it
  	if (support) {
  		var parser = new DOMParser();
  		var doc = parser.parseFromString(str, 'text/html');
      var html = { body:doc.body, head:doc.head};
  		return html;
  	}

  	// Otherwise, fallback to old-school method
  	var dom = document.createElement('div');
  	dom.innerHTML = str;
  	return dom;

  };

  $(".toggleButtons").click(function(){
    $(this).toggleClass("selected");
    var panelId = $(this).attr("id") + "Panel";
    $("#" + panelId).toggleClass("hidden");
  });
    

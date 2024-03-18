/* Image Library Selection */
var imageLibrarySelection = function() {
    var self = this;
    /* function for declaration of variables */
	self.initVariables = function() {
        self.checkboxElem = document.querySelectorAll('input');
    }
    /* function for binding the events*/
	self.bindEvents = function() {
        self.checkboxElem.forEach(function(elem) {
            elem.addEventListener("change", function(i) {
                var $currentInput = i.currentTarget;
                var $checkBoxContainer = $currentInput?.parentNode;
                if($currentInput?.checked) {
                    $checkBoxContainer?.classList.add('image-selected');
                } else {
                    $checkBoxContainer?.classList.remove('image-selected');
                }
            });
        });
    }
    self.init = function() {	
		/* calling the global  variables */
		self.initVariables();
		/* calling the bindevents function */
		self.bindEvents();
	}
	return {
		init: init
	}
}
imageLibrarySelection().init();
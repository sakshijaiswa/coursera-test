( function (global) {
	var javaipt = {}; //Set up a namespace for our utility


	function getRequestObject () {
		if (window.XMLHttpRequest){
			return (new XMLHttpRequest());
		}

		else{
			global.alert('Not supported there');
			return (null);
		}

	}
	global.javaipt=javaipt;
}(window);
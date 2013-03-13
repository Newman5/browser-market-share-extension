chrome.omnibox.onInputChanged.addListener(function(text, success){
	
	$.ajax({
	  url:'http://api.chartbeat.com/cbtotal/?v=2'
	, type:'GET'
	, dataType:'json'
	, async:true
	, success:function(result){
					
		}
	});
});


chrome.omnibox.onInputEntered.addListener(function(text) {
	

});

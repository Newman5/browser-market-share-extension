

chrome.omnibox.onInputChanged.addListener(function(text, suggest){
	
		var finalResult = [];
		
			$.ajax({
			  url:'https://api.chartbeat.com/cbtotal/?v=3'
			, type:'GET'
			, dataType:'json'
			, async:true
			, success:function(result){
				var browser = result['bt'];
				var live_count = result['n'];	
				console.log(result);

				$.each(browser, function(i, k){
					switch(i){
						case 'chrome': var bt = 'Chrome'; break;
						case 'ie': var bt = 'Internet Explorer'; break;
						case 'ff': var bt = 'Firefox'; break;
						case 'safari': var bt = 'Safari'; break;
						default: var bt = 'Chrome'; break;
					}
					var percentage = Math.round(k / live_count * 100);
					// console.log(percentage);
					var obj = {};
					obj.content = bt;
					obj.description = "<match>"+bt+"</match><dim> : </dim><url>"+percentage+"%</url>"; 

					finalResult.push(obj);
					
				});
					suggest(finalResult);


							
				}
			});
		
	
	
});


chrome.omnibox.onInputEntered.addListener(function (text) {
	

});

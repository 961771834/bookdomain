$(function(){
	$("td > a:odd").on("click",function(e){
		e.preventDefault();
		var flag = confirm("Are you detele it?");
		console.log(flag)
		if(flag){
			location.href = $(this).attr("href")
		}
	})
})
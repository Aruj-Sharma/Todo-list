//check off todos on clicking
$("ul").on("click", "li", function(){

$(this).toggleClass("completed");

});



//to delete todos
$("ul").on("click", "span", function(event){
 
 $(this).parent().fadeOut(function(){
 	$(this).remove();
 });
 event.stopPropagation();
});


$("input[type='text']").keypress(function(event){

	if(event.which===13)
	{
		var todoText=$(this).val();
		$(this).val("");

		$("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> "+ todoText +"</li>");
	}
});



$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});


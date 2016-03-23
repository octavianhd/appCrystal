/*$(function(){
	$("#final").live('click', function(){
	    $.mobile.showPageLoadingMsg();

	    setTimeout(function(){
	    	$(".name").html($("#name").val());
	    	$(".adress").html($("#adress").val());
	    	$(".customer_phone").html($("#customer_phone").val());
	    	$.mobile.changePage("#thankyou");
	    }, 3000);
	});
});*/
$(function() {
	$("#final").on("click", function () {
		setTimeout(function () {
			$(".name").html($("#name").val());
			$(".adress").html($("#adress").val());
			$(".customer_phone").html($("#customer_phone").val());
			$(".prod_list").html($("#prod_list").val());
			$(".prod_number").html($("#prod_number").val());
			$(".booking_date").html($("#booking_date").val());
			$(".booking_time").html($("#booking_time").val());
			$.mobile.changePage("#thankyou");
		}, 1000);
	});
});
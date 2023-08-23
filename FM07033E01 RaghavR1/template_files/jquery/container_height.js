$(document).ready(function(){

						
				window.headerHeight = $(".header").innerHeight();
				window.footerHeight = $(".footer").innerHeight();
				window.containerfluidHeight = $(".container-fluid").innerHeight();
				$(".container").css("height",containerfluidHeight-(headerHeight+footerHeight+5)+"px");
				
				
				$(".newSet,.solution").click(function(){
											 
					window.headerHeight = $(".header").innerHeight();
					window.footerHeight = $(".footer").innerHeight();
					window.containerfluidHeight = $(".container-fluid").innerHeight();
					$(".container").css("height",containerfluidHeight-(headerHeight+footerHeight+5)+"px");
					
				 	//$(".solutionMainSteps,.solutionText,.SolutionRemark").show().css({"display":"inline-block"});
					//$(".incorrect,.correct,.AreaForKeypadAndInputInDevice").hide();
					//$(".Step1_div").show();
					
				 });
				
				
	});
// JavaScript Document

$(document).ready(function(){
$(".solutionMainSteps").css({"display":"inline-block"})			 
$(".middle").css({"width":"100%","display":"inline-block"})			   
	        container=$(".container").height()	
			steps=$(".SolutionRemark").height()	
			Step1_div=$(".Step1_div").height()		
			Step2_div=$(".Step2_div").height()	
			Step3_div=$(".Step3_div").height()	
			Step4_div=$(".Step4_div").height()	
			Step5_div=$(".Step5_div").height()	
			Step6_div=$(".Step6_div").height()	
			Step7_div=$(".Step7_div").height()	
			Step8_div=$(".Step8_div").height()
			Step9_div=$(".Step9_div").height()	
			Step10_div=$(".Step10_div").height()	
			var condition1=(container-steps);
			//alert(steps+"  steps")
	
			var setMiddle;
			if(Step1_div!=null){
			
				
			if(condition1>Step1_div){
				setMiddle=(condition1-Step1_div)/2;
				
				$(".Step1_div").css("margin-top",(steps+setMiddle)+"px");
				
			}else{
			$(".Step1_div").css("margin-top",steps+"px");	
			}

			}
			
			if(Step2_div!=null){
					condition2=	Step2_div+steps;
						
			if(condition1>Step2_div){
				setMiddle=(condition1-Step2_div)/2;
				
				$(".Step2_div").css("margin-top",(steps+setMiddle)+"px");
				
			}else{
			$(".Step2_div").css("margin-top",steps+"px");	
			}
			}
			
			
			
			
			if(Step3_div!=null){
				
								
					if(condition1>Step3_div){
						setMiddle=(condition1-Step3_div)/2;
						
						$(".Step3_div").css("margin-top",(steps+setMiddle)+"px");
						
					}else{
					$(".Step3_div").css("margin-top",steps+"px");	
					}
			}
			
			
	$(".solutionMainSteps,.middle").css({"display":"none"})	

							$(".middle").css("margin-top",0.5+"em");
							$(".inputAndDoneSpace").css({"width": "90%", "margin": "-0em 0% 0.05em","float":"right","padding":"0%"});	
							$(".InputAndDoneTbl").css({"width": "100%","margin":"0%"});
							$(".InptDnTd1").css({"width": "unset", "padding":"0%", "position":"relative"});	
							$(".InptDnTd2").css({"width": "5em", "padding":"0%", "position":"relative"});	
							$(".InptDnTd3").css({"width": "3.6em", "padding":"0%"});	
							$(".InptDnTd4").css({"width": "5em", "padding":"0%"});	
							$(".prompt_New").css({"margin": "0%","top": ".2em","left":"5em","right":"unset"});
							$(".remark").css({"width": "90%","margin":"0%","margin-left":".5em","text-align":"right"});
							$(".doneDiv").css({"width": "4em"});
							$(".done1").css({"width": "100%"});
							$(".inputDiv").css({"margin-top": "0%","text-align":"center"});
							//$(".QueImg4Divice,.Img4Device").css({"display":"none"});
							$(".QueImg4Divice,.Img4Device").hide();
							
							
	if(checkMobile){
	/*if(String(navigator.userAgent).indexOf("Mobile") != -1 ){*/ 

							$(".middle").css("margin-top",1.3+"em");
							//$(".QueImg4Divice").show();
							//$(".QueImg4Divice").css({"width": "40%"});
							//$(".ClickToAnsDiv").css({"margin-top": "-7%"});
							$(".inputAndDoneSpaceFordevice").css({"width": "99%","margin":"0%"});	
							$(".InputAndDoneTbl").css({"width": "100%","margin":"0%","margin-top": "1%"});
							/*$(".InptDnTd1").css({"width": "unset", "padding":"0%", "position":"relative"});	
							$(".InptDnTd2").css({"width": "6em", "padding":"0%", "position":"relative"});	
							$(".InptDnTd3").css({"width": ".5em", "padding":"0%"});	
							$(".InptDnTd4").css({"width": "5em", "padding":"0%"});	
							$(".prompt_New").css({"margin": "0%","top": ".2em","left":"unset","right":".5em"});
							$(".remark").css({"width": "95%","margin":"0% 0% 0% .5em","text-align":"right"});*/
							$(".doneDiv").css({"width": "100%", "padding":"0%"});	
							$(".ClickToAnsDiv").css({"margin-top": ".2em"});
							$(".clear").css({"margin-left": "5%"});

		 			 if (window.innerHeight > window.innerWidth) { //alert("")
							$(".middle").css("margin-top",1.8+"em");
					 		$(".Step11,.Step12").css({"width": "100%", "border":"none","margin":"0%","padding":"0%"});
					 		$(".SolTable1,.SolTable2").css({"width": "100%", "border":"none","margin":"0%","padding":"0%"});
							$(".ClickToAnsDiv").css({"margin-top": ".1em"});
					 }

	}
});
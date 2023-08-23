// JavaScript Document

$(document).ready(function(){
						   
						   
						   
if(checkMobile == false){
			if(window.innerWidth<1101){
				 $(".inputAndDoneSpace").css({"margin":"0em"})
				 
				  $(".clear").css({"margin-left":"8%"})
				 
				 
			 }
		 }
		 
		 
		 
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

							$(".middle").css("margin-top",0.3+"em");
							$(".inputAndDoneSpace").css({"width": "90%", "margin": "-1.1em 0% 0.05em","float":"right","padding":"0%"});	
							$(".InputAndDoneTbl").css({"width": "90%","margin":"0%"});
							$(".InptDnTd1").css({"width": "unset", "padding":"0%", "position":"relative"});	
							$(".InptDnTd2").css({"width": "4em", "padding":"0%", "position":"relative"});	
							$(".InptDnTd3").css({"width": "1.5em", "padding":"0%"});	
							$(".InptDnTd4").css({"width": "4em", "padding":"0%"});	
							$(".InptDnTd5").css({"width": "4.3em", "padding":"0%"});	
							$(".prompt_New").css({"margin": "0%","bottom": "0%","left":"unset","right":"5%"});
							$(".remark").css({"width": "95%","margin":"auto","text-align":"right"});
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
							/*$(".InptDnTd1").css({"width": "30%", "padding":"0%", "position":"relative"});	
							$(".InptDnTd2").css({"width": "30%", "padding":"0%"});	
							$(".InptDnTd3").css({"width": "37%", "padding":"0%"});	
							$(".prompt_New").css({"margin": "0%","bottom": "0%","left":"10%","right":"unset"});
							$(".remark").css({"width": "90%","margin":"auto 0% 0% 10%","text-align":"left"});
							$(".doneDiv").css({"width": "80%","margin":"0%", "margin-left":"10%"});*/
							$(".doneDiv").css({"width": "100%", "padding":"0%"});	
							$(".ClickToAnsDiv").css({"margin-top": "5%"});
							$(".clear").css({"margin-left": "2%"});

		 			 if (window.innerHeight > window.innerWidth) { //alert("")
							$(".middle").css("margin-top",1.8+"em");
					 		$(".Step11,.Step12").css({"width": "100%", "border":"none"});
					 }

	}
});
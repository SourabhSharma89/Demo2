//START:Changed from Bangalore Team
var CurrQuestionIndex = 0;
//END:Changed from Bangalore Team


$(document).ready(function(){
						   
						   
						   ////////////Start Code for NFR////////////////
						     $(document).keydown(function(objEvent) {
												 
							
						  if(DoneClicked == 1)
						  {
							  
							 $(function() {
					  
									// gather all inputs of selected types
									var inputs = $('.tab,.done1,.calc'), inputTo;
									
									// bind on keydown
									inputs.on('keydown', function(e) {
																
										// if we pressed the tab
										if (e.keyCode == 9 || e.which == 9) {
											
											// prevent default tab action
											e.preventDefault();
								
											if (e.shiftKey) {
												// get previous input based on the current input
												inputTo = inputs.get(inputs.index(this) - 1);
											} else {
												// get next input based on the current input
												inputTo = inputs.get(inputs.index(this) + 1);
											}
								
											// move focus to inputTo, otherwise focus first input
											if (inputTo) {
												inputTo.focus();
											} else {
												inputs[0].focus();
											}
										}
									});
								});
						  }
						  else if(DoneClicked == 0)
						  {
							  
    
						  }
						  })
						   var DoneClicked = 0
						   $(".section1").hide()
						   $(".FtrTab_Td1").css("pointer-events","none");
						   $(".newSet,.Procedure").hide();
						   $(".solution").css('visibility','hidden');
						   var attempted_num = 1;
						   var next_val = 0;
						   
						   //////////////For NFR closed//////////	

						  
						    var sb=-10000;
							var autorunVar = 0
							
 						    $(".autorun").css('opacity','.4');
						    $(".autorun").attr('disable','true');
						    $(".autorun").css('cursor','default');
							$(".promptComma,.prompt,.prompt_New,.blankMessage,.ReducePromt").hide();
							
 							$(".solutionMainSteps,.solutionText,.SolutionRemark").hide();	
							$(".incorrect,.correct").show();
							
							window.headerHeight = $(".header").innerHeight();
							window.footerHeight = $(".footer").innerHeight();
							window.containerfluidHeight = $(".container-fluid").innerHeight();
							$(".container").css("height",containerfluidHeight-(headerHeight+footerHeight+5)+"px");
							
				///////////////////////////////////For Print///////////////////////////////////
				
				 myFunction= function() {
					window.print();
				};
				
				//////////////////////////////For focus on text////////////////////////////////
				
				 
				 $(".newSet").click(function(){
											 
						 sb=-10000;///set this as initial value..
											 
						window.headerHeight = $(".header").innerHeight();
						window.footerHeight = $(".footer").innerHeight();
						window.containerfluidHeight = $(".container-fluid").innerHeight();
						$(".container").css("height",containerfluidHeight-(headerHeight+footerHeight+5)+"px");

								
						$(".solutionMainSteps,.solutionText,.SolutionRemark,.spacebar").hide();
						$(".input1").val('');
						$(".incorrect,.correct").hide();
						$(".blankMessage,.ReducePromt").hide();
						$(".prompt,.prompt_New,.promptComma").hide();
						$(".autorun").css('opacity','.4');
						$(".autorun").css('cursor','default');
						$(".autorun").prop('disabled',false);
						$(".input1").focus();
						
					
											});


/////////////////////////////////////////////////////////Buttons/////////////////////////////////////////////////////////////////////////////////////////////
				
				
				  $(".done1").click(function(){ 
											 
									$(".Procedure_banner").hide();				   
				        		    
									$(".done1").css({'color':'#660066','box-shadow':'0px 0px 0px #ff0000, 0px 1px 7px #ff0000,  0px 1px 0px #ff0000,  0px 0px 3px #ff0000'});
									$(".newSet,.solution,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".Procedure").css({'color':'black','box-shadow':'none'});
									$(".input1").focus();
													        
														});
						 
						 $(".newSet").click(function(){ 
													 
									$(".autorun").css('disable','true');				 
									$(".Procedure_banner").hide();				   
				        		    $(".newSet").css('color','#ffff00');
									$(".newSet").css({'color':'#ffff00','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".solution,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".done1").css({'color':'black','box-shadow':'none'});
									$(".Procedure").css({'color':'black','box-shadow':'none'});
									$(".input1,.input2").val('')
   									$(".ZtableDivMain,.main").hide();
				

									
									////////// for NFR//////
									DoneClicked = 0	
									CurrQuestionIndex=0
									next_val++;
									nextQuesGeneration();
									attempted_num++;
									$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8").val('')
									$(".remark").hide()
									$(".done1").css("pointer-events","auto")
									$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8").css("pointer-events","auto")
									$(".calc").css("pointer-events","auto");
									/*$(".newSet,.solution").hide();*/
									$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8").attr("disabled",false)
									//document.getElementById("FB_TxtBox").innerHTML =""
									////////// for NFR End//////
									
 																	
									$(".autorun").css('disable','true');				 
									$(".Procedure_banner, .solutionMain").hide();				   
				        		    $(".newSet").css('color','#ffff00');
									$(".newSet").css({'color':'#ffff00','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".done1,.solution,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".done1").css({'color':'black','box-shadow':'none'});
									
									
									////////// for NFR //////
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});                           ////////// for NFR End ////// 
									
									
									$(".Procedure").css({'color':'black','box-shadow':'none'});
									////////// for NFR //////
									$(".input1").focus();
									////////// for NFR //////
   

														});
						    $(".solution").click(function(){ 
														  
											 window.SpaceClick=1;
											 $(".middle").hide();
								             $(".Step1_div").show();
											$(".spacebar").show();
											$(".SpaceBarDiv").show();
												$(".solution").blur();
												$(".step1,.step2,.step3,.step8,.step5,.step6,.step7,.step4").css({'color':'black' ,'box-shadow':'0px 0px 0px rgba(0,0,0,.4), inset 0px 0px 0px rgba(255,255,255,.3), inset 0px 0px 0px rgba(255,255,255,.5)'});
												$(".step1").css({'color':'#C00','box-shadow':'0px 3px 5px rgb(236, 7, 7), inset 0px 1px 0px rgba(255,255,255,.3), inset 0px 0px 3px rgba(255,255,255,.5)'});
									$(".input1").focus();
								    $(".Step1_div").show();
									$(".Procedure_banner").hide();
				        		    $(".solution").css('color','#ffff00');
									$(".solution").css({'color':'#ffff00','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".newSet,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".done1").css({'color':'black','box-shadow':'none'});
									$(".Procedure").css({'color':'black','box-shadow':'none'});
												 $(".ZtableDivMain,.main").hide();
												 
				window.headerHeight = $(".header").innerHeight();
				window.footerHeight = $(".footer").innerHeight();
				window.containerfluidHeight = $(".container-fluid").innerHeight();
				$(".container").css("height",containerfluidHeight-(headerHeight+footerHeight+5)+"px");
												 
														});
							
							 $(".Procedure").click(function(){ 
															
															$(".input1").focus();
															 autorunVar = 1; 
															 sb=-1;
															 
									$(".correct,.incorrect,.blankMessage,.prompt,.prompt_New,.promptComma,.ReducePromt").hide();
									$(".solutionMainSteps,.solutionText").hide();
 									$(".autorun").css('opacity','.4');
									$(".autorun").css('disable','true');
									$(".autorun").css('cursor','default');
									$(".autorun").attr('disabled',true);
 				        		    $(".Procedure").css('color','red');
									$(".Procedure").css({'color':'red','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".newSet,.solution").css({'color':'white','box-shadow':'none'});
									$(".done1").css({'color':'black','box-shadow':'none'});
									$(".Procedure_banner").fadeIn();	
							
						});
							  
/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

							/*$(".btn_style").click (function(){
								  $(".blankMessage").hide();
								  $(".promptComma").hide();
								  $(".prompt,.prompt_New").hide();
								  $(".ReducePromt").hide();
								  $(".middle").hide();
								  $(".solutionMainSteps").show();
								  $(".ZtableDivMain").toggle();
								  
								});*/
							
							
						   
						   
							$(".ClickToAnsDiv").click (function(){
								  $(".blankMessage").hide();
								  $(".promptComma").hide();
								  $(".prompt,.prompt_New").hide();
								  $(".ReducePromt").hide();
								  $(".ZtableDivMain").hide();
								});
							
							$(".StpBtnCmn").click (function(){
								  $(".blankMessage").hide();
								  $(".promptComma").hide();
								  $(".prompt,.prompt_New").hide();
								  $(".ReducePromt").hide();
								  $(".ZtableDivMain").hide();
								});
						   
						   
						   
						   
						   

						   $(".Cross_PB").click(function(){
														 
								$(".Procedure_banner").hide();	
								$(".input1").focus();
								$(".PopDiv").hide();
							});	
							 
	 					   $(".Cross_BM").click(function(){
														 
								$(".blankMessage").hide();
								$(".promptComma").hide();
								$(".prompt,.prompt_New").hide();
								$(".ReducePromt").hide();
								$(".input1").focus();
								$(".PopDiv").hide();
							});	

	 					   /*$(".PopDivBtn").click(function(){
														 
								$(".blankMessage").hide();
								$(".promptComma").hide();
								$(".prompt,.prompt_New").hide();
								$(".ReducePromt").hide();
								$(".input1").focus();
								$(".PopDiv").toggle();
								
							});	*/

	 					   $(".PopDivBtn1").click(function(){
														 
								$(".blankMessage").hide();
								$(".promptComma").hide();
								$(".prompt,.prompt_New").hide();
								$(".ReducePromt").hide();
								$(".input1").focus();
								$(".PopDiv2,.PopDiv3").hide();
								$(".PopDiv1").toggle();
								
							});	

	 					   $(".PopDivBtn2").click(function(){
														 
								$(".blankMessage").hide();
								$(".promptComma").hide();
								$(".prompt,.prompt_New").hide();
								$(".ReducePromt").hide();
								$(".input1").focus();
								$(".PopDiv1,.PopDiv3").hide();
								$(".PopDiv2").toggle();
								
							});	

	 					   $(".PopDivBtn3").click(function(){
														 
								$(".blankMessage").hide();
								$(".promptComma").hide();
								$(".prompt,.prompt_New").hide();
								$(".ReducePromt").hide();
								$(".input1").focus();
								$(".PopDiv1,.PopDiv2").hide();
								$(".PopDiv3").toggle();
								
							});	

/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
	
	randRange = function (min, max) {
					var randomNum = Number(Math.round(Math.random()*(max-min))+min);
					return randomNum;
				                                          }	
				
					var range_startX1 = 1000;
					var range_finX1 = 9999;
					var range_startX2 = 1000000;
					var range_finX2 = 9999999;
					var range_startX3 = 100000;
					var range_finX3 = 999999;
					var range_startX4 = 1000;
					var range_finX4 = 9999;
					var array_Range = 600;
					
					///////////////////////////////////////////////////
					
					var next_val = 0;
				
					var array_Range = 600;
					
					
					var R1_Arr = new Array();
					var R2_Arr = new Array();
					var R3_Arr = new Array();
					var R4_Arr = new Array();

					var R5_Arr = new Array();
					var R11_Arr = new Array();
					var R1_indexArr = new Array();
					
					Q1_Arr = new Array();
					Q2_Arr = new Array();
					Q3_Arr = new Array();
					Q4_Arr = new Array();	
					Q5_Arr = new Array();	
					Q6_Arr = new Array();
					Q7_Arr = new Array();	
				
					var temp_str;
					var ta1;
					var ta2;
					var ta3;
					var ta4;
					var ta5;
					var ta6;
					var ta7;
					var ta8;
					var q1_txt;
					var counter = 0;
					var wt_id1;
					
					
					
					


 
		
				
				quesGeneration = function(){

					/*for (var i = 0; i<array_Range; i++) {
						
							num1 = randRange(2,9);
							num2 = randRange(2,9);
							
							num3 = randRange(2,9);
							num4 = num2*3;
							
							num5 = randRange(2,9);
							num6 = num2;
							
							num7 = randRange(2,9);
							num8 = randRange(2,9);
							
							
							asd_1a = getGCF1x(num1,num2)
							asd_3a = getGCF1x(num3,num4)
							asd_5a = getGCF1x(num5,num6)
							asd_7a = getGCF1x(num7,num8)

											asr_1a = getLCM(num2,num4,num6,num8)
											
											val1ta = (Number(asr_1a)/Number(num2))*Number(num1);
											
											val2ta = (Number(asr_1a)/Number(num4))*Number(num3);
											
											val3ta = (Number(asr_1a)/Number(num6))*Number(num5);
											
											val4ta = (Number(asr_1a)/Number(num8))*Number(num7);
											
											asr_2a = Number(val1ta)+Number(val2ta)+Number(val3ta)+Number(val4ta);
                                         
										
											
								
											
											
												
											
							
							
							
							
							

							
								
					if (num1>num2 && num5>num6 && num7>num8 && asd_1a==1 && asd_3a==1 && asd_5a==1 && asd_7a==1 && asr_2a%asr_1a==0 ) { 
							R1_Arr.push(num1+"@"+num2+"@"+num3+"@"+num4+"@"+num5+"@"+num6+"@"+num7+"@"+num8);
						} else {i--}
					}
							   
							   alert("....")
							R1_Arr = uniqueArray0(R1_Arr);
							console.log(R1_Arr+"...");*/
							
							
							
							R1_Arr = ["7@2@5@6@3@2@7@6","8@7@8@21@8@7@4@3","8@5@7@15@8@5@7@3","6@5@8@15@8@5@5@3","9@2@5@6@5@2@7@6","8@5@7@15@8@5@4@3","8@5@2@15@8@5@5@3","5@2@5@6@3@2@7@6","6@5@4@15@6@5@4@3","7@5@8@15@7@5@5@3","9@5@2@15@7@5@5@3","6@5@8@15@8@5@8@3","3@2@5@6@9@2@7@6","8@5@4@15@9@5@7@3","8@7@8@21@8@7@7@3","8@5@2@15@8@5@8@3","3@2@5@6@3@2@7@6","7@5@8@15@7@5@8@3","5@2@5@6@7@2@7@6","9@5@4@15@8@5@4@3","6@5@4@15@6@5@7@3","9@5@7@15@7@5@7@3","5@2@5@6@5@2@7@6","9@7@5@21@8@7@4@3","9@5@4@15@8@5@7@3","7@5@2@15@9@5@8@3","8@5@8@15@6@5@8@3","8@7@5@21@9@7@4@3","9@7@2@21@9@7@4@3","8@5@8@15@6@5@5@3","7@5@7@15@9@5@7@3","9@7@5@21@8@7@7@3","8@5@4@15@9@5@4@3","7@2@5@6@5@2@7@6","7@2@5@6@7@2@7@6","7@5@7@15@9@5@4@3","5@2@5@6@9@2@7@6","9@5@2@15@7@5@8@3","9@5@7@15@7@5@4@3","3@2@5@6@7@2@7@6","7@2@5@6@9@2@7@6","9@2@5@6@7@2@7@6","3@2@5@6@5@2@7@6","8@7@5@21@9@7@7@3","9@2@5@6@3@2@7@6","7@5@2@15@9@5@5@3","9@2@5@6@9@2@7@6","9@7@2@21@9@7@7@3"]
							
							
							
							
							





							
						//alert(R1_Arr.length)
							


					};
			  
					
			/*/////////////////////////////////////////////////////////*/
			/*/////////////////////////R1_Arr////////////////////////////////*/
				var loadingString = [];
				window.loadingValues = function () {
			
					//START:Changed from Bangalore Team 
					// loadingValues.fired = true;
					//END:Changed from Bangalore Team 
			
					// next_val = 25;
					loadingString = [next_val];
					////////alert(next_val+"  == next_val")
					return loadingString;
				}
				var dataURL;	
				var GCFnum;
		
			nextQuesGeneration = function(){
					//next_val++;
				if (CurrQuestionIndex != 0) {
						next_val = Number(CurrQuestionIndex);
				} else {
						next_val = next_val;
				}
									
									if (next_val>((R1_Arr.length)-1)) {
										next_val = 0;
									}
									temp1 = String(R1_Arr[next_val]).split("@");
											
											val1 = temp1[0];
										    val2 = temp1[1];
											
											val3 = temp1[2];
											val4 = temp1[3];
											
											val5 = temp1[4];
											val6 = temp1[5];
											
											val7 = temp1[6];
											val8 = temp1[7];

											

	   
											$(".val1").html(val1);
										    $(".val2").html(val2);
											
											$(".val3").html(val3);
											$(".val4").html(val4);
										   
										    $(".val5").html(val5);
											$(".val6").html(val6);
											
											$(".val7").html(val7);
										    $(".val8").html(val8);
											
											

                                            
											
											
											
											
											
											asr_1 = getLCM(val2,val4,val6,val8)
											$(".asr_1").html(asr_1);
											
											
											val1t = (Number(asr_1)/Number(val2))*Number(val1);
											
											val2t = (Number(asr_1)/Number(val4))*Number(val3);
											
											val3t = (Number(asr_1)/Number(val6))*Number(val5);
											
											val4t = (Number(asr_1)/Number(val8))*Number(val7);
											
											
											$(".val1t").html(val1t);
											$(".val2t").html(val2t);
											$(".val3t").html(val3t);
											$(".val4t").html(val4t);
											
											
											asr_2 = Number(val1t)+Number(val2t)+Number(val3t)+Number(val4t);
											$(".asr_2").html(asr_2);
											
											
											asr_3 = Number(asr_2)/Number(asr_1);
											$(".asr_3").html(asr_3);
											
											
											
											
											
											if(asr_3==1){
												ar_1 = "pound";
											}else{
											    ar_1 = "pounds";	
											}
											
											$(".ar_1").html(ar_1);
											
											
											
											

                                            Answer1 = (asr_3);



			}

			///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			
			
			quesGeneration();
			next_val = randRange(0, R1_Arr.length-1);
			nextQuesGeneration();  ///// Calling question..
			
				doneButton1111 = function(){
					 
					$(".remark,.correct,.incorrect,.blankMessage,.prompt,.prompt_New,.promptComma,.ReducePromt").hide();
					
					var k1_text = trimspaces_new(document.getElementById("inputText").value);
					
			
						
						ent_ans1 = k1_text.replace(/^0+/, '');
					
					


//////////////////////////////////////////////////////////////////////////
					
						if(k1_text == "") {
							$(".blankMessage_New").show().fadeOut(2500);
							
						} else if ((ent_ans1  == (Answer1)) ) {
							$(".remark").show();
							$(".correct").show().fadeOut(2500);
							
						} else if (CommaTest(trimSpaces(k1_text),Answer1)) {
							//$(".blankMessage_New").show().fadeOut(2500);
							$(".Comma_prompt").show().css("display","inline-block");
							$(".prompt1").show();
						/*}else if(wt_id1 == -1) { //alert(wt_id1)
							$(".prompt_New").hide();						
							$(".whatvalue").show().delay(2500).hide(0);
							document.getElementById("whatValue").innerHTML = k1_text;*/
						
						} else {
							$(".remark").show();
							$(".incorrect").show().fadeOut(2000);
						}
								
			}
				
		
			//////////////////////////////////For FR///////////////////////////////////////////////
			 //////////////////////////////////For NFR///////////////////////////////////////////////
				reviewMode = false;
				var Qid;
				var FBOpt;
				var HOpt;
				var SOpt;
				var VOpt;
				var MOpt;
				var EOpt;
				readQuesID();
				setModes();
				
				//$(".calc").css("pointer-events","auto");
				function setModes() {
					
				         /* SOpt = 3; 
						FBOpt = 2; 
						EOpt = 1;*/
						if (SOpt == 0 && FBOpt == 1 && EOpt == 1) {
							///////quiz mode///////////////////
							$(".solution").css('visibility','hidden');
							
							$(".calc").css("pointer-events","auto");
						} else if (SOpt == 1 && FBOpt == 2 && EOpt == 1) {
							///////////////practice mode///////////////
							//$(".newSet").show();
							$(".solution").show();
							$(".solution").css('visibility','visible');
							$(".calc").css("pointer-events","auto");
						} else if (SOpt == 0 && FBOpt == 2 && EOpt == 1) {
							//////////////home work///////////////////
							$(".solution").css('visibility','hidden');
						    $(".calc").css("pointer-events","auto");
						} else if (SOpt == 2 && FBOpt == 2 && EOpt == 1) {
							//////////////////NFR/////////////////////////
							$(".solution").css('visibility','hidden');
							$(".calc").css("pointer-events","auto");
						} else if (SOpt == 1 && FBOpt == 2 && EOpt == 0) {
							  ////////////////after submit solution mode////////
								$(".solution").show();
								$(".solution").css('visibility','visible');
								$(".newSet").hide();
								
								$(".calc").css("pointer-events","none");
								$(".done1").css("pointer-events","none")
								$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8").css("pointer-events","none")
								$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8").attr("disabled",true)
								DoneClicked = 1;
								
								$(".done1").click(function(){ 
                      		    $(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});
                        });
						        $(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});
								
							 
						}else if (SOpt == 3 && FBOpt == 2 && EOpt == 1) {        ////////////////educo testing mode////////
							  
								$(".solution").show();
								$(".solution").css('visibility','visible');
								$(".newSet").show();
								$(".newSet").css('visibility','visible');
								$(".calc").css("pointer-events","auto");
								$(".done1").css("pointer-events","auto");
								$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8").css("pointer-events","auto");
								DoneClicked = 1;
								//$(".input1,.input2").attr("disabled",false);
								/*$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								$(".done1").click(function(){
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								});  */                                          ////////////////End educo testing mode////////
								
							 
						} else {
							/////////////////////rest/////////////////////
							/*$(".solution").hide();
							$(".calc").css("pointer-events","none");
							$(".done1").css("pointer-events","none");
							$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8").css("pointer-events","none");*/
					
						}
					
				}
				//////////////////
				
				// ML -- Read QuestionID
				////////alert(Qid.length+"  == Qid.length")
				if (Qid.length<=0) {
					////////alert(Qid.length+"  == Qid.length")
					setPreviewMode();
				}
				/*$(".QuesDiv").show();
				$(".LoadingDiv").hide();  */                 ///////////It should be closed while uploading the file
				//function setstuValues(ans, evals) {
				window.setstuValues = function setstuValues(ans, evals) {
					//8thMar2018 BLR Comments
					//Start
					
					
					$("#QuesDiv").show();
        			$("#LoadingDiv").hide();
					
					//End
					
					////////alert(FBOpt+" == FBOpt")
						$(".remark,.respond").css("display","inline-block")
					if (FBOpt == 2) {
						
						if (evals == "true") {
								$(".respond").html("Correct")
									$(".respond").css('color','#339966');
								//	document.getElementById("FB_TxtBox").innerHTML = "Correct";
														
					     }
						 	else if (evals == "partial") {
								$(".respond").html("Partially Correct")
									$(".respond").css('color','#0000CC');
								//	document.getElementById("FB_TxtBox").innerHTML = "Correct";
														
					     }
						 
						 else {
							 	$(".respond").html("Incorrect")
								$(".respond").css('color','#FF0000');
									//document.getElementById("FB_TxtBox").innerHTML = "Incorrect";
							
						 }
					}
					if (FBOpt == 1) {
						$(".respond").html("Responded")
						$(".respond").css('color','#339966');
						//document.getElementById("FB_TxtBox").innerHTML = "Responded";
						
						
						
					}
				preloadans(ans);
				}
				
				
				 //START:Changed from Bangalore Team 
					window.setQuesIndex = function setQuesIndex(QuesIndex) {
						////////alert("setQuesIndex:" + QuesIndex)
						CurrQuestionIndex = QuesIndex;
				
						//8thMar2018 BLR Comments
						//Start
					
						
						 $("#QuesDiv").show();
       					 $("#LoadingDiv").hide();
						
						//End
						
						nextQuesGeneration();
					}
					//END:Changed from Bangalore Team 

				//ExternalInterface.addCallback("setstuValues", this, setstuValues);
				//PageMethods.setstuValues();
				//setstuValues();
				function setPreviewMode() {
					reviewMode = true;
					$(".solution").show();
					$(".solution").css('visibility','visible');
					// show solution in review mode
				}
				//ExternalInterface.addCallback("setPreviewMode",this,setPreviewMode);
				//PageMethods.setPreviewMode();
				//setPreviewMode();
				function readQuesID() {
					try {
						var sQid = window.location.href.substr(window.location.href.indexOf("?"));
						var QArr;
						////////alert(sQid+"  == sQid")
						//var sQid = "http://localhost/EducoTestPrep/HTMLFRQuestionCheck/131-B0132Exp3AL.html?Qid=101$h=0$s=0$f=2"
						QArr = sQid.split("$");
						////Below code are used for opening the file without loader//////
						if (QArr.length < 2) {
									$("#QuesDiv").show();
									$("#LoadingDiv").hide();
						}
						////////////////////////////.. End ..//////////////////////////////

 						Qid = QArr[0].substr(QArr[0].indexOf("Qid")+4);
						FBOpt = QArr[3].substr(QArr[0].indexOf("f")+3);
						HOpt = QArr[1].substr(QArr[0].indexOf("h")+3);
						SOpt = QArr[2].substr(QArr[0].indexOf("s")+3);
						VOpt = QArr[4].substr(QArr[0].indexOf("v")+3);
						MOpt = QArr[5].substr(QArr[0].indexOf("m")+3);
						EOpt = QArr[6].substr(QArr[0].indexOf("e")+3);
					} catch (ex) {
					}
				}
				
				////////////////////// NFR Closed ////////////
				//////////////////////////////////////////////
		
				function preloadans(strfrmServer) {
					//////////alert(strfrmServer+"  == strfrmServer inside preloadans")
				
					//////////////For Checking Through 'Local Storage' ///////////////////////////
					//////////alert("localStorage.getItem(key) == "+localStorage.getItem("key"));
					
					/*if(localStorage.getItem("key") != null && localStorage.getItem("key") != undefined){
						var tx1 = localStorage.getItem("key").split("@serverString@");
						////////alert("tx1 1//// == "+tx1);
					}*/
					//var tx1 = localStorage.getItem("key").split("@");
					//strfrmServer = localStorage.getItem("key")
					//////////////////////////////////////////////////////////////////////////////
				
						if(strfrmServer != undefined){
						//////////alert("strfrmServer 2 == "+strfrmServer);
						
						
						var tx1 = strfrmServer.split('@serverString@');
						
					//alert("tx1  == "+tx1);
				 
						//document.getElementById("inputText").value = String(tx1[0]);
 
						$(".input1").val(tx1[0])
						

					 temp1 = String(tx1[1]).split(",");
						
						///alert(temp1)
						//////////////NFR////////////////////
						final_score = String(tx1[2]);
						//////////////NFR//////////////////
											
											val1 = temp1[0];
										    val2 = temp1[1];
											
											val3 = temp1[2];
											val4 = temp1[3];
											
											val5 = temp1[4];
											val6 = temp1[5];
											
											val7 = temp1[6];
											val8 = temp1[7];

											

	   
											$(".val1").html(val1);
										    $(".val2").html(val2);
											
											$(".val3").html(val3);
											$(".val4").html(val4);
										   
										    $(".val5").html(val5);
											$(".val6").html(val6);
											
											$(".val7").html(val7);
										    $(".val8").html(val8);
											
											

                                            
											
											
											
											
											
											asr_1 = getLCM(val2,val4,val6,val8)
											$(".asr_1").html(asr_1);
											
											
											val1t = (Number(asr_1)/Number(val2))*Number(val1);
											
											val2t = (Number(asr_1)/Number(val4))*Number(val3);
											
											val3t = (Number(asr_1)/Number(val6))*Number(val5);
											
											val4t = (Number(asr_1)/Number(val8))*Number(val7);
											
											
											$(".val1t").html(val1t);
											$(".val2t").html(val2t);
											$(".val3t").html(val3t);
											$(".val4t").html(val4t);
											
											
											asr_2 = Number(val1t)+Number(val2t)+Number(val3t)+Number(val4t);
											$(".asr_2").html(asr_2);
											
											
											asr_3 = Number(asr_2)/Number(asr_1);
											$(".asr_3").html(asr_3);
											
											
											
											
											
											if(asr_3==1){
												ar_1 = "pound";
											}else{
											    ar_1 = "pounds";	
											}
											
											$(".ar_1").html(ar_1);
											
											
											
											

                                            Answer1 = (asr_3);
			
			
 					//////// For NFR //////////////

					    Attempted_score = String(tx1[3]);
						
					//////// For NFR //////////////
					
				
						if (SOpt == 2) {
								$(".solution").show();
								$(".calc").css("pointer-events","none");
								$(".done1").css("pointer-events","none")
								$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8").css("pointer-events","none")
								
								$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8").attr("disabled",true)
								
                                DoneClicked = 1;
								$(".done1").click(function(){ 
								$(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});
								});
							 $(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6 !important'});  
						   
						//alert("innnn")
						if (final_score == 1) {
								$(".solution").css('visibility','hidden');
								$(".newSet").css('visibility','hidden');
								$(".newSet").hide();
							
						} else {
								$(".solution").css('visibility','visible');
								$(".solution").show();
								$(".newSet").css('visibility','visible');
								$(".newSet").show();
								$(".newSet").click(function(){
								$(".newSet,.solution").css('visibility','hidden');
								});
								
								}
			//alert($(".input1").val())
			
			
			
			
							}
							
							
					}
						
					 
						
						/////// Closed NFR //////////////
						
						if (SOpt == 3) {        /////////for educo testing mode////////
							//////alert("hi")
								$(".solution").show();
								$(".newSet").show();
								$(".newSet,.solution").css('visibility','visible');
								$(".calc").css("pointer-events","auto");
								$(".done1").css("pointer-events","auto")
								$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8").css("pointer-events","auto")
								$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8").attr("disabled",false)
							/*	
                                DoneClicked = 1;
								$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								$(".done1").click(function(){
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								})*/
								/*if (final_score == 1) {
										$(".solution").show();
										$(".newSet").show();
								} else {
										$(".solution").show();
										$(".newSet").show();
										
								}*/
		
							}                  /////////End for educo testing mode////////
				}
				////////////////////////////////////////////////////
				doneButton = function() {
				
					//////////alert("In Final Submit")
					//////alert(numerator_Arr+"   ")
					var Responseflag="false";
					
					var FeedbackFlag = "false";
					var FeedbackText = "Incorrect";
					//document.getElementById("FB_TxtBox").innerHTML = "";
					/// make changes here according to question 
					var feed_flag = 0;
					
					//////// For NFR //////////////
					var final_score = 0;
					Attempted_score = attempted_num;
					/////// Closed NFR //////////////
				$(".remark,.correct,.incorrect,.blankMessage,.prompt_New,.promptComma,.ReducePromt,.blank,.portraitblankMessage,.LandScapeblankMessage,.blankMessage_New").hide();

				$(".remark,.correct,.incorrect,.blankMessage,.prompt_New,.promptComma,.ReducePromt,.blank,.portraitblankMessage,.LandScapeblankMessage,.blankMessage_New").hide();

										$(".remark,.correct,.incorrect,.blankMessage,.prompt,.promptComma,.ReducePromt,.blank,.portraitblankMessage,.LandScapeblankMessage,.blankMessage_New,.portraitparentheses,.LandScapeparentheses").hide();
					
					var k1_text = trimspaces_new(document.getElementById("inputText").value);
					
					k1_text1 = k1_text.split("–").join("-");
						
						
						ent_ans1 = k1_text1.replace(/^0+/, '');
						
						
						//alert(k1_text+" input")
						//alert(Answer1+" ans")
					
//////////////////////////////////////////////////////////////////////////
	


 					if(k1_text == "") {			
						 
						Responseflag="false";
						FeedbackText = "";
						 $(".respond").html('')
						 
					//}else{ //}
					
						//alert("  in resonce flag false  ")
						$(".blankMessage_New").show().css("display","inline-block");
						//alert()
						
						////////// for NFR //////
						$(".done1").click(function(){ 
 					$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
									
												});
						/////////////for NFR/////////////
						
					}
					
					else {
						Responseflag="true";
					 $(".remark,.respond").show().css("display","inline-block")
					 
				        if ((ent_ans1  == (Answer1)) ) {
							FeedbackFlag = "true";
							FeedbackText = "Correct";
							$(".remark").show().css("display","inline-block")
							$(".respond").css('color','#339966');
							//////// For NFR //////////////
							final_score = 1;
							/////// Closed NFR //////////////
							
							
						}  else {
							FeedbackFlag = "false";
							FeedbackText = "Incorrect";
								$(".respond").css('color','#FF0000');
						}
						
						if(feed_flag==1) {
							
						$(".done1").click(function(){
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
												   })
						
							}	
							/////////////////////////////////////////////
						///////////////////////////////
						//////// For NFR //////////////
						if(feed_flag!=1){					
						if (SOpt == 2) {
							//alert()
										$(".solution").show();
										$(".calc").css("pointer-events","none");
										$(".done1").css("pointer-events","none")
										$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8").css({"pointer-events":"none"})
										$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8").attr("disabled",true)
										DoneClicked = 1;
								$(".done1").click(function(){ 
								$(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});
								});
								$(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});
										
								$(".tab").focus();		
																		
								if (final_score == 1) {
										$(".solution").css('visibility','hidden');
										$(".newSet").css('visibility','hidden');
				
								} else {
									////alert('')
										$(".solution").css('visibility','visible');
										//$(".solution").css('visibility','visible');
										$(".newSet").css('visibility','visible');
										$(".newSet,.solution").show();
										$(".newSet").click(function(){
								        $(".newSet,.solution").css('visibility','hidden');
								
															
								});
							}
				
								}
								
								
								if (SOpt == 3) {                    /////////for educo testing mode////////
								$(".solution").show();
								$(".newSet").show();
								$(".newSet,.solution").css('visibility','visible');
								$(".calc").css("pointer-events","auto");
								$(".done1").css("pointer-events","auto")
								$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8").css("pointer-events","auto")
								$(".input1,.input2,.input3,.input4,.input5,.input6,.input7,.input8").attr("disabled",false)
								
                                //DoneClicked = 1;
								$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								$(".done1").click(function(){
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								});
								/*if (final_score == 1) {
										$(".solution").show();
										$(".newSet").show();
								} else {
										$(".solution").show();
										$(".newSet").show();
										
								 }*/
						}   
							}
						
						/////// Closed NFR //////////////
						if (feed_flag != 1) {
							////////alert(FBOpt+"  == FBOpt")
							if (FBOpt == 2 || FBOpt == undefined) {
								// if feedback is enabled
								//alert()
							 //document.getElementById("FB_TxtBox").innerHTML = FeedbackText;
							 $(".respond").html(FeedbackText)
							} else {

								//document.getElementById("FB_TxtBox").innerHTML = "Responded";
							  $(".respond").html("Responded")
							  $(".respond").css('color','#339966');
							 
							}
						}
					}
					/*Construct a string out of user answer so that 
					when this string is passed back to this file, it can be parsed
					to reproduce the user answer. Keep the string as small as possible
					*/
					//////////////For Checking Through 'Local Storage' ///ss_an1////////////////////////
					////////alert(ta1+" == ta1")
					
					
					
				/*	localStorage.removeItem("key")
					//////alert(ta1+" ta1 "+ta2+" ta2 "+aa_final+" "+aa1_final+q1_text+numb)
					
					localStorage.setItem("key",$(".input1").val()+"@serverString@"+$(".input2").val()+"@serverString@"+temp1+"@serverString@"+final_score+"@serverString@"+Attempted_score);
					////////alert("jjjj")
					localStorage.getItem("key");*/
					
					
					//////alert("localStorage.getItem(key)..Hello  ==  "+localStorage.getItem("key"));
					
 					
			//////////////////////////////////////////////////////////////////
					
					
					
					
					if(Responseflag == "false"){
						 $(".respond").html('')
						 $(".input1").html('')
					
					/*document.getElementById("inputText").innerHTML="";
					document.getElementById("FB_TxtBox").innerHTML="";
*/					
					
					}else{
						////alert(q1+" ")
						
					/*localStorage.removeItem("key")
					localStorage.setItem("key",$(".input1").val()+"@serverString@"+temp1+"@serverString@"+final_score+"@serverString@"+Attempted_score);
					localStorage.getItem("key");*/
					
					
					//alert("localStorage.getItem(key)..Hello  ==  "+localStorage.getItem("key"));
					
					
					var answerString = $(".input1").val()+"@serverString@"+temp1+"@serverString@"+final_score+"@serverString@"+Attempted_score;
					
				
					//////////alert("answerString == "+answerString);
					//writeans(Qid,answerString,FeedbackFlag);
 					//8thMar2018 BLR Comments
					//Start
					var score = 0;
					if (Responseflag == 'true')
						score = final_score
					parent.writeans(Qid, answerString, FeedbackFlag, score, Attempted_score); 
					
					}
					
					//End
					
				};
						
						
				//preloadans(localStorage.getItem("key"));	
				   
			/////////////////////	   NFR END  /////////////////////////////////////
		
			 showSolution = function(){
				 
				 sb=0;
				 autorunVar = 1////0 when in teacher mode
				 
				     $(".correct,.incorrect,.blankMessage,.prompt,.prompt_New,.promptComma").hide();
					 $(".autorun").css('opacity','0.4');
					 $(".autorun").attr('disabled','disabled');	
					 $(".autorun").css('cursor','default');
 					 $(".solutionMainSteps,.solutionText").hide();
					 $(".solutionMainSteps,.solutionText").hide();

 					 $(".solutionMainSteps,.solutionText,.SolutionRemark").hide();
 					 $(".solutionMainSteps,.solutionText,.SolutionRemark").show().css({"display":"inline-block"});

					
					}
				
/*///////////////////////////////////////////////////////////////////////////*/

/*//////////////////////////////////////////////////////////////////////////*/								
$(".calc_btn,.back,.delete,.clear,.solution").each(function (i) { $(this).attr('tabindex', -1); })							
/*/////////////////////////////////////////////////////////////////////////*/
	
}); //////end of Main/////////



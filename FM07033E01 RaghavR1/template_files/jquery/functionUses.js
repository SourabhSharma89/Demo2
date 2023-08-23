// Functions
$(document).ready(function(){
				
				
				
		
				
		
			
///////////////////////////////////////////////////////////////////////////////////				
					
			Answer_Function1 = function(str)
			{
				var Final_Str = ""
				var obj = new Object()
					obj = {a0:"thousand", a1:"hundred", a2:"ten", a3:"one", a5:"tenth", a6:"hundredth", a7:"thousandth", a8:"tenthousandth"}
					for (var i in obj) {
						if(str == (String("obj."+i)).charAt(5))
						{
							Final_Str = obj[i]
							break;
						}
					}
				return Final_Str
			}
			
//////////////////////////////////////////////////////////////////////////////////

			Answer_Function2 = function(str)
			{
				var Final_Str = ""
				var obj = new Object()
					obj = {a0:"thousand", a1:"hundred", a2:"ten", a3:"one", a5:"tenth", a6:"hundredth", a7:"thousandth", a8:"ten-thousandths"}
					for (var i in obj) {
						if(str == (String("obj."+i)).charAt(5))
						{
							Final_Str = obj[i]
							break;
						}
					}
				return Final_Str
			}
			
//////////////////////////////////////////////////////////////////////////////////

			Answer_Function3 = function(str)
			{
				var Final_Str = ""
				var obj = new Object()
					obj = {a0:"thousand", a1:"hundred", a2:"ten", a3:"one", a5:"tenth", a6:"hundredth", a7:"thousandth", a8:"ten-thousandth"}
					for (var i in obj) {
						if(str == (String("obj."+i)).charAt(5))
						{
							Final_Str = obj[i]
							break;
						}
					}
				return Final_Str
			}
			
						   
///////////////////////////////////////////////////////////////////////////////////	

			trimspaces_new = function(str) {
			var nI;
			for (nI=0; nI<str.length; nI++) {
				if (str.charAt(nI) == ' ') {
					str = str.substring(0, nI)+str.substring(nI+1, str.length);
					nI--;
				}
			}
			return (str);
		}			   
						   
						   
///////////////////////////////////////////////////////////////////////////////////							   
		
			trimWords = function(str) {
			var nI;
			for (nI=0; nI<str.length; nI++) {
				if (str.charAt(nI) == 'n' || str.charAt(nI) == 'N') {
					str = trimspaces_new(str.substring(0, nI+1))+" "+trimspaces_new(str.substring(nI+1, str.length));
					break;
				}
			}
			return (str);
		}
			
///////////////////////////////////////////////////////////////////////////////////							   
						   
		Postion_Function = function(str)
				{
					var Final_Str = ""
					var obj = new Object()
						obj = {a5:"1", a6:"2", a7:"3", a8:"4"}
						for (var i in obj) {
							if(str == (String("obj."+i)).charAt(5))
							{
								Final_Str = obj[i]
								break;
							}
						}
					return Final_Str
				}				   
						   
///////////////////////////////////////////////////////////////////////////////////							   
						   
			Answer_Function = function(str)
			{
				var Final_Str = ""
				var obj = new Object()
					obj = {a0:"thousands", a1:"hundreds", a2:"tens", a3:"ones", a5:"tenths", a6:"hundredths", a7:"thousandths", a8:"ten-thousandths"}
					for (var i in obj) {
						if(str == (String("obj."+i)).charAt(5))
						{
							Final_Str = obj[i]
							break;
						}
					}
				return Final_Str
			}						   
						   
						   
///////////////////////////////////////////////////////////////////////////////////							   
			chkPrime = function(chkprime_n1) {
				flag = 1;
				for (p_i=2; p_i<chkprime_n1; p_i++) {
					if (chkprime_n1%p_i == 0) {
						flag = 0;
						break;
					}
				}
				if (flag == 1 || chkprime_n1 == 2) {
					return true;
				} else {
					return false;
				}
			};			   
						   
///////////////////////////////////////////////////////////////////////////////////						   
	
	pround = function(n, m)  {
	if (m == 0) {
		var pr11 = Math.round(n);
		return pr11;
	} else {
		var stp1 = String(n);
		var st1 = "";
		var len = stp1.length;
		var dec = stp1.indexOf(".");
		if (dec == -1) {
			st1 = stp1.concat(".0000000");
			dec = st1.indexOf(".");
		} else {
			st1 = st1.concat(stp1);
		}
		var rd = 0;
		var prd = 0;
		var st2 = "";
		//if (m<dec) {
		if ((m<dec) && (m != 0)) {
			if (m>0) {
				var rd = dec-m;
			} else {
				var rd = dec-(m-1);
			}
			if ((len-dec-1)<=-m) {
				st2 = st2.concat(st1);
			} else {
				var p1 = Number(st1.charAt(rd));
				var p11 = Number(st1.charAt(rd-1));
				if (p1>=5) {
					var p2 = p11+1;
				} else {
					var p2 = p11;
				}
				if (p2<10) {
					for (i1=0; i1<rd-1; i1++) {
						st2 = st2.concat(st1.charAt(i1));
					}
					st2 = st2.concat(String(p2));
					for (i2=rd; i2<dec; i2++) {
						st2 = st2.concat("0");
					}
				} else {
					//if((st1.charAt(rd-2)!='.')
					for (ia1=rd-1; ia1>0; ia1--) {
						if ((st1.charAt(ia1) == 9) || (st1.charAt(ia1) == '.')) {
							prd = ia1;
						} else {
							break;
						}
					}
					if (st1.charAt(prd-1) != '.') {
						for (ia2=0; ia2<prd-1; ia2++) {
							st2 = st2.concat(st1.charAt(ia2));
						}
						pp1 = Number(st1.charAt(prd-1))+1;
						st2 = st2.concat(String(pp1));
						for (ip3=prd; ip3<dec; ip3++) {
							st2 = st2.concat("0");
						}
					}
				}
			}
		} else {
			if ((m-dec) == 0) {
				if (Number(st1.charAt(0))>=5) {
					st2 = st2.concat("1");
				}
				for (ip1=0; ip1<m; ip1++) {
					st2 = st2.concat("0");
				}
			} else {
				for (ip2=0; ip2<m; ip2++) {
					st2 = st2.concat("0");
				}
			}
		}
		
		return (Number(st2));
	}
};
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////						   
						   
getLCM = function() {
	var n1 = 1;
	var aa_getLCM = new Array();
	for (i_getLCM=0; i_getLCM<arguments.length; i_getLCM++) {
		aa_getLCM.push(arguments[i_getLCM]);
}
	//aa_getLCM.sort(Array.NUMERIC);
	aa_getLCM.sort(function(a,b){
			return a-b;
					});
	
	for (t=0; t<aa_getLCM.length; t++) {
		n1 = n1*aa_getLCM[t];
	}
	
	var a2 = aa_getLCM[(aa_getLCM.length)-1];
	for (i=a2; i<=n1; i++) {
		count = 0;
		for (j=0; j<aa_getLCM.length; j++) {
			if (i%aa_getLCM[j] == 0) {
				count++;
			}
		}
		if (count == aa_getLCM.length) {
			return i;
		}
	}
	
};			   
						   

						   
///////////////////////////////////////////////////////////////////						   
	  
	   Checking_prime_divisiblty = function(N1) {
					divisble_num = [13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 6];
					num1a = N1;
					flag_prime = 1;
					for (i=0; i<divisble_num.length; i++) {
						if (num1a%Number(String(divisble_num[i])) == 0) {
							flag_prime = 0;
							break;
						}
					}
					if (flag_prime == 1) {
						return true;
					} else {
						return false;
					}
				};
						   
///////////////////////////////////////////////////////////////////

getGCF1x = function(a, b) {
	var hcf = 1;
	var small;
	i = 2;
	small = a<b ? a : b;
	for (i; i<=small; ) {
		if ((a%i == 0) && (b%i == 0)) {
			hcf *= i;
			this.small /= i;
			a = a/i;
			b = b/i;
			i = 2;
		} else {
			i++;
			continue;
		}
	}//alert("hcf is:"+hcf);
	return hcf;
	
};

///////////////////////////////////////////////////////////////
////////////////////////////END////////////////////////////////						   
						   
						   
						   
						   
////////////////////////////////////////To get first Prime Factor/////////////////////

fpmFactor = function(fchk_n1) {
	fchk_abc = fchk_n1;
	fchk_a1 = new Array();
	for (i=2; i<=fchk_abc; i++) {
		if (fchk_abc%i == 0) {
			fchk_abc = fchk_abc/i;
			fchk_a1.push(i);
			i--;
		}
	}
	return fchk_a1;
};

/////////////////////////////////////////////////////////END/////////////////////////////////////////////////////////////////////////////
////////////////////////////////			

						   
						getGCF = function() {
						var aa_getGCF = new Array();
						for (i_getGCF=0; i_getGCF<arguments.length; i_getGCF++) {
							aa_getGCF.push(arguments[i_getGCF]);
						}
						//aa_getGCF.sort(Array.NUMERIC);
						aa_getGCF.sort(function(a,b){
							return a-b;
							});
						max_getGCF = aa_getGCF[aa_getGCF.length-1];
						min_getGCF = aa_getGCF[0];
						for (kk=min_getGCF; kk>=1; kk--) {
							count_getGCF = 0;
							for (kj=aa_getGCF.length-1; kj>=0; kj--) {
								if (aa_getGCF[kj]%kk == 0) {
									count_getGCF++;
								}
							}
							if (count_getGCF == aa_getGCF.length) {
								return kk;
								break;
							}
						}
					};
					
						   
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	


						  round_place = function(Mnum,Pnum) {
							var numb1 = Mnum;
							var numb2 = Pnum;
							final_num = "";
							Fnum = Number(String(numb1).length)-numb2;
							
							inter_num1 = String(numb1).substr(0, (Fnum-1));
							inter_num = String(numb1).substr(Fnum-1, 1);
						
							if (Number(inter_num)>=5) {
								final_num = Number(inter_num1)+1;
							} else {
								final_num = Number(inter_num1);
							}
							inter_num2 = String(numb1).substr(Fnum-1, String(numb1).length-1);
						
							for (var i = 0; i<String(inter_num2).length; i++) {
								final_num += "0";
							}
							return final_num;
						};
						
						
						
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	


						space_between_num = function(num) {
							var final_num = String(num);
							Fnum = Number(final_num.length);
							final_num1 = "";
							
							for (var i = 0; i<Fnum; i++) {
								//final_num = final_num.charAt(i)
								final_num1 += final_num.charAt(i)+" ";
							}
							return final_num1;
						};
						
						   
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


trimzero = function(theString) {
	theString = String(theString);
	for (trim_i=0; trim_i<theString.length; trim_i++) {
		if (theString.charAt(trim_i) == " ") {
			theString = theString.substring(0, trim_i)+theString.substring(trim_i+1, theString.length);
			trim_i--;
		}
	}
	if (theString != "") {
		while (theString.charAt(0) == "0" || theString.charAt(0) == " ") {
			theString = theString.substring(1, theString.length);
		}
		while (theString.charAt(theString.length-1) == " ") {
			theString = theString.substring(0, theString.length-1);
		}
		trim_id = theString.indexOf(".");
		if (trim_id != -1) {
			for (trim_i=theString.length-1; trim_i>trim_id; trim_i--) {
				if (theString.charAt(trim_i) == "0" || theString.charAt(trim_i) == " ") {
					theString = theString.substring(0, trim_i);
				} else {
					break;
				}
			}
			if (trim_id == theString.length-1) {
				theString = theString.substring(0, trim_id);
			}
		}
		if (theString == "") {
			theString = "0";
		}
	}
	return theString;
};



///////////////////FUNCTION trimzero main////////////////////////////
///////////////////FUNCTION trimzero NEW  Start////////////////////////////
//alert("trimzero(096262) == "+trimzero("0       00000000000000000000.9626200000"));  
						   
						   
						   
						//////////Digits in the Numbers are different (Not Equal)//////////////////////  
						   NonRepeat = function(chk_n1) {
							chk_value = String(chk_n1);
							count1 = 0;
							for (ii=0; ii<String(chk_value).length; ii++) {
								for (jj=0; jj<String(chk_value).length; jj++) {
									if (String(chk_value).charAt(ii) == String(chk_value).charAt(jj)) {
										count1++;
									}
								}
							}
							////alert(count1+"== "+chk_value.length);
							if (count1 == chk_value.length) {
								return chk_n1;
							} else {
								return null;
								count1 = 0;
							}
						};
/////////////////////Remove duplicate entry/////////////////////////
	Remove_Duplicate_Entry = function(str)  {
	arr = str.split(",");
	var Final_Arr = new Array();
	for (var i = 0; i<arr.length; i++) {
		for (var j = i+1; j<arr.length; j++) {
			if (arr[i] == arr[j]) {
				arr.splice(j,1);
			}
		}
		Final_Arr.push(arr[i]);
	}
	return Final_Arr;
};
////////////////////////////////////////Find Comma/////////////////////////////
	findcoma = function(theString)  {
	coma_arr = [];
	//for (space_i=0; space_i<=5; space_i++) {
	for (space_m=0; space_m<=theString.length; space_m++) {
		if (theString.charAt(space_m) == ",") {
			coma_arr.push(space_m);
		}
	}
	//}
	return coma_arr;
};

/////////////////////////////////////////////////////Remove spaces////////////////////////////////////
trimSpaces = function(spc_theString) {
	spc_theString = String(spc_theString);
	for (space_m=0; space_m<=spc_theString.length; space_m++) {
		if (spc_theString.substring(space_m, space_m+1) == " ") {
			spc_theString = spc_theString.substring(0, space_m)+spc_theString.substring(space_m+1, spc_theString.length);
			space_m--;
		}
	}
	return spc_theString;
};

/////////////////////////////////////////////////////Spellchecker/////////////////////////////////////////////////////////////////////////////////////////////////////
Spell_chk_condition = function(sp_txt) {
	sp_txt2 = sp_txt.value;
	var final_status = true;
	var chk_arr = [];
	chk_arr = ["thousands", "hundreds", "tens", "ones", "tenths", "hundredths", "thousandths", "ten thousandths", "thousands", "hundreds", "ten", "one", "tenth", "hundredth", "thousandth", "ten thousandth", "ten-thousandth", "ten-thousandths"];
	for (i=0; i<chk_arr.length; i++) {
		
		if (sp_txt2 == chk_arr[i]) {
			final_status = false;
			break;
		}
	}
	return final_status;
};



spl_chk = function(spl_txt1, spl_txt) {
	spl_txt2 = spl_txt.value;
	var spl_a1 = new Array();
	var spl_a2= new Array();
	for (spl_i=0; spl_i<spl_txt1.length; spl_i++) {
		spl_a1.push(spl_txt1.charAt(spl_i));
	}
	for (j=0; j<spl_txt2.length; j++) {
		spl_a2.push(spl_txt2.charAt(j));
	}
	spl_len1 = spl_txt1.length;
	spl_len2 = spl_txt2.length;
	spl_count = 0;
	for (spl_i=0; spl_i<spl_len1; spl_i++) {
		flag = 0;
		for (spl_j=0; spl_j<spl_len2; spl_j++) {
			if (spl_a1[spl_i] == spl_a2[spl_j]) {
				spl_count++;
				spl_a2.splice(spl_j,1);
				break;
			}
		}
	}
	
	if ((Number(spl_count) < Number(spl_len1)) && (Number(spl_count) > Number(spl_len1-3)) && Spell_chk_condition(spl_txt) && (Number(spl_count)>2)) {
		$(".incorrect").doTimeout(".incorrect" )
		$(".SpelPromt").doTimeout(".SpelPromt") 
		$(".SpelPromt").doTimeout(".SpelPromt" ,200, function(){
								  $(".SpelPromt").show();
								  return false;
								  //alert("SPEL");
						});
		//Selection.setFocus(spl_txt);
	} else {
					$(".incorrect").show();
					$(".input1,.input2").blur()///used for remove focus from input texts.....
					document.getElementById("subBtn").disabled = true;
					setTimeout(function(){$(".incorrect").hide();document.getElementById("subBtn").disabled = false;$(".input1").focus();}, 2000);
	}
};
/////////////////// FUNCTION SPL_CHK END  ////////////////////////////////////////////
/////////////////// FUNCTION MAKEANSFORMAT START  ////////////////////////////////////////////
makeansformat = function(make_ans_txt) {
	
	make_ans_text = make_ans_txt.value;
	
	for (sc_a=0; sc_a<=make_ans_text.length; sc_a++) {
		if (make_ans_text.substring(sc_a, sc_a+1) == ",") {
			make_ans_text = make_ans_text.substring(0, sc_a+1)+" "+make_ans_text.substring(sc_a+1, make_ans_text.length);
			document.getElementById("inputText").value = make_ans_text;
		}
	}
	/***********************************************/
	for (sc_l=0; sc_l<=5; sc_l++) {
		for (sc_m=0; sc_m<=make_ans_text.length; sc_m++) {
			if (make_ans_text.substring(sc_m, sc_m+2) == "  ") {
				make_ans_text = make_ans_text.substring(0, sc_m)+make_ans_text.substring(sc_m+1, make_ans_text.length);
				document.getElementById("inputText").value = make_ans_text;
			}
		}
	}
	for (sc_n=0; sc_n<=5; sc_n++) {
		//THIS IS FOR REMOVING SPACE IN THE BEGINING
		if (make_ans_text.charAt(0) == " ") {
			make_ans_text = make_ans_text.substring(1, make_ans_text.length);
			document.getElementById("inputText").value = make_ans_text;
		}
		//THIS IS FOR REMOVING SPACE IN THE LAST                                    
		if (make_ans_text.charAt(make_ans_text.length-1) == " ") {
			make_ans_text = make_ans_text.substring(0, make_ans_text.length-1);
			document.getElementById("inputText").value = make_ans_text;
		}
	}
	//for removing space in the begining and end of the dash(-) symbol
	for (sc_h=0; sc_h<=5; sc_h++) {
		for (sc_a=0; sc_a<=make_ans_text.length; sc_a++) {
			if (make_ans_text.substring(sc_a, sc_a+2) == " -") {
				make_ans_text = make_ans_text.substring(0, sc_a)+make_ans_text.substring(sc_a+1, make_ans_text.length);
				document.getElementById("inputText").value = make_ans_text;
			}
			if (make_ans_text.substring(sc_a, sc_a+2) == " ,") {
				make_ans_text = make_ans_text.substring(0, sc_a)+make_ans_text.substring(sc_a+1, make_ans_text.length);
				document.getElementById("inputText").value = make_ans_text;
			}
			if (make_ans_text.substring(sc_a, sc_a+2) == "- ") {
				make_ans_text = make_ans_text.substring(0, sc_a+1)+make_ans_text.substring(sc_a+2, make_ans_text.length);
				document.getElementById("inputText").value = make_ans_text;
			}
		}
	}
	for (sc_a=0; sc_a<=make_ans_text.length; sc_a++) {
		if (make_ans_text.charAt(sc_a) == ",") {
			make_ans_text = make_ans_text.substring(0, sc_a)+" "+make_ans_text.substring(sc_a, make_ans_text.length);
			sc_a++;
			document.getElementById("inputText").value = make_ans_text;
		}
	}
	/*//alert("make_ans_text == "+make_ans_text)
	//alert("make_ans_text.value == "+document.getElementById("inputText").value)*/
};
/////////////////// FUNCTION MAKEANSFORMAT END  ////////////////////////////////////////////
/////////////////// FUNCTION SPELLCHECKER START  ////////////////////////////////////////////
spellchecker = function(spl_arr_or, spl_arr_wa, spl_chk_txt) {
	
	correct_count = 0;
	for (correct_i=0; correct_i<spl_arr_or.length; correct_i++) {
		if (spl_arr_wa.join(" ") == spl_arr_or[correct_i].join(" ")) {
			correct_count = 1;
			break;
		}
	}
	if (spl_chk_txt.value == "") {
		
		$(".blankMessage").show();
	} else if (correct_count == 1) {
		
		
		$(".correct").doTimeout(".correct" ,500, function(){
			$(".correct").fadeIn(500).fadeOut(1500);
			return false;
		});
	} else {
		//spl_choose_index = hkbspellchecker(spl_arr_or, spl_arr_wa);
		hspellchecker(spl_arr_or,spl_arr_wa,spl_chk_txt);
	}
};
hspellchecker = function(spel_arr_or, spel_arr_wa, spel_chk_txt) {
	hkb_crt_count = -100;
	for (hkb_spl=0; hkb_spl<spel_arr_or.length; hkb_spl++) {
		hkb_spl_temp = 0;
		hkb_count_or = spel_arr_or[hkb_spl].length;
		hkb_count_wa = spel_arr_wa.length;
		hkb_crt_count = 0;
		if (hkb_count_or == hkb_count_wa) {
			for (ii=0; ii<hkb_count_wa; ii++) {
				hkb_inc_count = 0;
				if (spel_arr_or[hkb_spl][ii] == spel_arr_wa[ii]) {
					hkb_crt_count++;
				} else {
					if (spl_chk(spel_arr_or[hkb_spl][ii], spel_arr_wa[ii])) {
						if (hkb_spl_temp == 0) {
							hkb_spl_temp = ii+1;
							hkb_spl_wrong = spel_arr_wa[ii];
						}
					} else {
						hkb_crt_count = -10;
						hkb_inc_count = 1;
						break;
					}
				}
				/*trace("ii"+spel_arr_or[hkb_spl][ii]);
				trace("ii"+spel_arr_wa[ii]);
				trace("count"+hkb_crt_count);*/
			}
			if (hkb_crt_count+2>=hkb_count_wa) {
				//_root.inc_mc.msgBox.value = "word "+(hkb_spl_temp);

				
					document.getElementById("whatValue").innerHTML = "word "+(hkb_spl_temp);
					$(".prompt").fadeIn();
			
				//trace(hkb_spl_wrong);
				hk_count = 0;
				for (hk=0; hk<spel_chk_txt.value.length; hk++) {
					if (spel_chk_txt.value.charAt(hk) == " ") {
						hk_count++;
					}
					if (hk_count+1 == hkb_spl_temp) {
						//hkb_spl_index = spel_chk_txt.value.indexOf(hkb_spl_wrong);
						if (hk_count!=0) {
							hkb_spl_index = hk+1;
						} else {
							hkb_spl_index = hk;
						}
						break;
					}
				}
				//alert("setSelection1")
				//$(".input1").focus();
				
				//Selection.setFocus(spel_chk_txt);
				$txt = $(".input1");
				$txt[0].setSelectionRange(hkb_spl_index,hkb_spl_index+hkb_spl_wrong.length);
				//alert("setSelection")
				break;
			} else {
				if (hkb_spl+1 == spel_arr_or.length) {
					var_for_increct = 1;
					//Selection.setFocus(null);
				}
			}
		} else if (hkb_spl+1 == spel_arr_or.length) {
			var_for_increct = 1;
			//Selection.setFocus(null);
		}
	}
};
////////////////////////////////////////////////////////////////////////////////////
hkbspellchecker = function(hkbspel_arr_or, hkbspel_arr_wa)  {
	var max_arr = new Array();
	for (p=0; p<hkbspel_arr_or.length; p++) {
		this["cc"+(p+1)] = 0;
		hkbcount_or = hkbspel_arr_or[p].length;
		hkbcount_wa = hkbspel_arr_wa.length;
		hkbcrt_count = 0;
		if (hkbcount_or == hkbcount_wa) {
			for (hii=0; hii<hkbcount_wa; hii++) {
				if (hkbspel_arr_or[p][hii] == hkbspel_arr_wa[hii]) {
					this["cc"+(p+1)]++;
				}
			}
		}
		max_arr.push(this["cc"+(p+1)]);
	}
	htemp_max = -1;
	htemp_max_index = -1;
	for (oo=0; oo<max_arr.length; oo++) {
		if (htemp_max<max_arr[oo]) {
			htemp_max = max_arr[oo];
			htemp_max_index = oo+1;
		}
	}
	return htemp_max_index;
};
///////////////////////////////////////////////////////////FUNCTION SPELLCHECKER END  ////////////////////////////////////////////
/*////////////////////////////////////////////////////////////Convert to comma string///////////////////*/

				comma_Convert = function(num) {
					var temp_num = String(num);
					var temp_str = "";
					for (var i=0; i<temp_num.length; i++) {
						if (temp_num.length <= 3) {
							
								temp_str += temp_num.charAt(i);
						
						}else if (temp_num.length == 4) {
							if (i == 0) {
								//trace(temp_num.charAt(i));
								temp_str = temp_num.charAt(i)+",";
							} else {
								temp_str += temp_num.charAt(i);
							}
						} else if (temp_num.length == 5) {
							if (i == 1) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else {
								temp_str += temp_num.charAt(i);
							}
						} else if (temp_num.length == 6) {
							if (i == 2) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else {
								temp_str += temp_num.charAt(i);
							}
						} else if (temp_num.length == 7) {
							if (i == 0) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else if (i == 3) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else {
								temp_str += temp_num.charAt(i);
							}
						} else if (temp_num.length == 8) {
							if (i == 1) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else if (i == 4) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else {
								temp_str += temp_num.charAt(i);
							}
						} else if (temp_num.length == 9) {
							if (i == 2) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else if (i == 5) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else {
								temp_str += temp_num.charAt(i);
							}
						} else if (temp_num.length == 10) {
							if (i == 0) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else if (i == 3) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else if (i == 6) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else {
								temp_str += temp_num.charAt(i);
							}
						} else if (temp_num.length == 11) {
							if (i == 1) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else if (i == 4) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else if (i == 7) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else {
								temp_str += temp_num.charAt(i);
							}
						}
					}
					return temp_str;
				}
				/////////////////////////////////////////////
				
				 Remove_Comma = function(str){
				var Final_Str = "";
				for (var i = 0; i<str.length; i++) {
					if (str.charAt(i) == ",") {
						continue;
					}
					Final_Str += str.charAt(i);
				}
				return Final_Str;
			}

				/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
	
			trimcomma = function(theString) {
					var ab_str = "";
					var enterans = String(theString);
					if (enterans.length == "19") {
						//trace("19");
						if ((enterans.charAt(3) == ",") && (enterans.charAt(7) == ",") && (enterans.charAt(11) == ",") && (enterans.charAt(15) == ",")) {
							ab_str = enterans.substr(0, 3)+enterans.substr(4, 3)+enterans.substr(8, 3)+enterans.substr(12, 3)+enterans.substr(16, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "18") {
						//	trace("18");
						if ((enterans.charAt(2) == ",") && (enterans.charAt(6) == ",") && (enterans.charAt(10) == ",") && (enterans.charAt(14) == ",")) {
							ab_str = enterans.substr(0, 2)+enterans.substr(3, 3)+enterans.substr(7, 3)+enterans.substr(11, 3)+enterans.substr(15, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "17") {
						//trace("17");
						if ((enterans.charAt(1) == ",") && (enterans.charAt(5) == ",") && (enterans.charAt(9) == ",") && (enterans.charAt(13) == ",")) {
							ab_str = enterans.charAt(0)+enterans.substr(2, 3)+enterans.substr(6, 3)+enterans.substr(10, 3)+enterans.substr(14, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "15") {
						//trace("15");
						if ((enterans.charAt(3) == ",") && (enterans.charAt(7) == ",") && (enterans.charAt(11) == ",")) {
							ab_str = enterans.substr(0, 3)+enterans.substr(4, 3)+enterans.substr(8, 3)+enterans.substr(12, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "14") {
						//trace("14");
						if ((enterans.charAt(2) == ",") && (enterans.charAt(6) == ",") && (enterans.charAt(10) == ",")) {
							ab_str = enterans.substr(0, 2)+enterans.substr(3, 3)+enterans.substr(7, 3)+enterans.substr(11, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "13") {
						//trace("13");
						if ((enterans.charAt(1) == ",") && (enterans.charAt(5) == ",") && (enterans.charAt(9) == ",")) {
							ab_str = enterans.charAt(0)+enterans.substr(2, 3)+enterans.substr(6, 3)+enterans.substr(10, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "11") {
						if ((enterans.charAt(3) == ",") && (enterans.charAt(7) == ",")) {
							ab_str = enterans.substr(0, 3)+enterans.substr(4, 3)+enterans.substr(8, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "10") {
						if ((enterans.charAt(2) == ",") && (enterans.charAt(6) == ",")) {
							ab_str = enterans.substr(0, 2)+enterans.substr(3, 3)+enterans.substr(7, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "9") {
						if ((enterans.charAt(1) == ",") && (enterans.charAt(5) == ",")) {
							ab_str = enterans.charAt(0)+enterans.substr(2, 3)+enterans.substr(6, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "7") {
						if (enterans.charAt(3) == ",") {
							ab_str = enterans.substr(0, 3)+enterans.substr(4, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "6") {
						if (enterans.charAt(2) == ",") {
							ab_str = enterans.substr(0, 2)+enterans.substr(3, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "5") {
						if (enterans.charAt(1) == ",") {
							ab_str = enterans.substr(0, 1)+enterans.substr(2, 3);
						} else {
							ab_str = enterans;
						}
					} else {
						ab_str = enterans;
					}
					return (ab_str);
		};
/*////////////////////////////////////////////////////////////////////////////////*/
				comma= function(k_str) {
					var fin_str = "";
					for (j=0; j<k_str.length; j++) {
						if ((k_str.charAt(j)!=",")){
							fin_str += k_str.charAt(j);
						}
					}
					return fin_str;
				}
/*////////////////////////////////////////////*/
			trimcoma = function(theString) {
				//for (space_i=0; space_i<=5; space_i++) {
				for (space_m=0; space_m<=theString.length; space_m++) {
					if (theString.substring(space_m, space_m+1) == ",") {
						coma_count++;
						theString = theString.substring(0, space_m)+theString.substring(space_m+1, theString.length);
						space_m--;
					}                            
				}
				//}
				return theString;
			};
	/*////////////////////////////////////////////////////////////////////////////////*/
/* randRange = function(min, max) {
					var randomNum = Number(Math.round(Math.random()*(max-min))+min);
					return randomNum;
				}	
				*/

						random_Array = function(str)  {
							var cnt = 0;
							var temp_Int_Arr = str.split(",");
							var random_index_temp= [];
							var temp_arr = [];
							var int_count = 0;
							do {
								var temp_num = randRange(0, temp_Int_Arr.length-1);
								temp_arr.push(temp_Int_Arr.splice(temp_num, 1));
							} while (temp_Int_Arr.length>0);
							///////////////////////////////////// 
							return temp_arr;
						}



//////////////////////////////////////////////////////////////////////////						   
						   
						Covert_Minus_sign = function(num) {
						txt_num = Number(num);
						if (txt_num<0) {
							txt_num = "– "+Math.abs(txt_num);
						} else {
							txt_num = txt_num;
						}
						return txt_num;
					};
					
//////////////////////////////////////////////////////////////////////////						   

					Revert_Minus_sign = function(str) {
						txt_str = str;
						newArray = [];
						newStr = "";
						for (i=0; i<String(txt_str).length; i++) {
							if (String(txt_str).charAt(i) == "–") {
								newArray.push("-");
							} else {
								newArray.push(String(txt_str).charAt(i));
							}
						}
						for (i=0; i<newArray.length; i++) {
							newStr += newArray[i];
						}
						return newStr;
					};
//////////////////////////////////////////////////////////////////////////		   

	/*////////////////////////////////////////////////////////////////////////////////*/
						uniqueArray0 = function(array) {
							
						  var result = Array.from(new Set(array));
						  return result    
						}
	/*////////////////////////////////////////////////////////////////////////////////*/
						  
						product_Range=function(a,b) {
						  var prd = a,i = a;
						 
						  while (i++< b) {
							prd*=i;
						  }
						  return prd;
						}
						
						
						combinations=function(n, r) 
						{
						  if (n==r) 
						  {
							return 1;
						  } 
						  else 
						  {
							r=(r < n-r) ? n-r : r;
							return product_Range(r+1, n)/product_Range(1,n-r);
						  }
						}
	/*////////////////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////Convert Number to Power////////////////////////////////////////////////*/



ConvertNumToPower = function(num) {

					 	if(num == 1 ){
							num = "¹";
						}else if(num == 2 ){
							num = "²";
						}else if(num == 3 ){
							num = "³";
						}else if(num == 4 ){
							num = "⁴";
						}else if(num == 5 ){
							num = "⁵";
						}else if(num == 6 ){
							num = "⁶";
						}else if(num == 7 ){
							num = "⁷";
						}else if(num == 8 ){
							num = "⁸";
						}else if(num == 9 ){
							num = "⁹";
						}else if(num == 10 ){
							num = "¹⁰";
						}else if(num == 11 ){
							num = "¹¹";
						}else if(num == 12 ){
							num = "¹²";
						}else if(num == 13 ){
							num = "¹³";
						}else if(num == 14 ){
							num = "¹⁴";
						}else if(num == 15 ){
							num = "¹⁵";
						}else if(num == 16 ){
							num = "¹⁶";
						}else if(num == 17 ){
							num = "¹⁷";
						}else if(num == 18 ){
							num = "¹⁸";
						}else if(num == 19 ){
							num = "¹⁹";
						}else if(num == 20 ){
							num = "²⁰";
						}else if(num == 21 ){
							num = "²¹";
						}else if(num == 22 ){
							num = "²²";
						}else if(num == 23 ){
							num = "²³";
						}else if(num == 24 ){
							num = "²⁴";
						}else if(num == 25 ){
							num = "²⁵";
						}else if(num == 26 ){
							num = "²⁶";
						}else if(num == 27 ){
							num = "²⁷";
						}else if(num == 28 ){
							num = "²⁸";
						}else if(num == 29 ){
							num = "²⁹";
						}else if(num == 30 ){
							num = "³⁰";
						}else if(num == 31 ){
							num = "³¹";
						}else if(num == 32 ){
							num = "³²";
						}else if(num == 33 ){
							num = "³³";
						}else if(num == 34 ){
							num = "³⁴";
						}else if(num == 35 ){
							num = "³⁵";
						}else if(num == 36 ){
							num = "³⁶";
						}else if(num == 37 ){
							num = "³⁷";
						}else if(num == 38 ){
							num = "³⁸";
						}else if(num == 39 ){
							num = "³⁹";
						}else if(num == 40 ){
							num = "⁴⁰";
						}
						return num

} 
//////end of Convert Number to Power/////////



////////////////////////////Evaluate Starts///////////////////////////////////////////
pcd = function (str1, str2) {
	if (str1 == str2) {
		return true;
	} else if ((str1 == "+") && (str2 == "-")) {
		return true;
	} else if ((str1 == "-") && (str2 == "+")) {
		return true;
	} else if ((str1 == "*") && (str2 == "/")) {
		return true;
	} else if ((str1 == "/") && (str2 == "*")) {
		return true;
	} else if ((str1 == "-") && ((str2 == "*") || (str2 == "/") || (str2 == "^"))) {
		return false;
	} else if ((str1 == "+") && ((str2 == "*") || (str2 == "/") || (str2 == "^"))) {
		return false;
	} else if ((str2 == "+") && ((str1 == "*") || (str1 == "/") || (str1 == "^"))) {
		return true;
	} else if ((str2 == "-") && ((str1 == "*") || (str1 == "/") || (str1 == "^"))) {
		return true;
	} else if (str2 == "^") {
		return false;
	} else if (str1 == "^") {
		return true;
	} else {
		return false;
	}
}
/*////////////////////////////////Convert Number to Power////////////////////////////////////////////////*/



ConvertNumToPower = function(num) {

					 	if(num == 1 ){
							num = "¹";
						}else if(num == 2 ){
							num = "²";
						}else if(num == 3 ){
							num = "³";
						}else if(num == 4 ){
							num = "⁴";
						}else if(num == 5 ){
							num = "⁵";
						}else if(num == 6 ){
							num = "⁶ ";
						}else if(num == 7 ){
							num = "⁷";
						}else if(num == 8 ){
							num = "⁸";
						}else if(num == 9 ){
							num = "⁹";
						}else if(num == 10 ){
							num = "¹⁰";
						}else if(num == 11 ){
							num = "¹¹";
						}else if(num == 12 ){
							num = "¹²";
						}else if(num == 13 ){
							num = "¹³";
						}else if(num == 14 ){
							num = "¹⁴";
						}else if(num == 15 ){
							num = "¹⁵";
						}else if(num == 16 ){
							num = "¹⁶";
						}else if(num == 17 ){
							num = "¹⁷";
						}else if(num == 18 ){
							num = "¹⁸";
						}else if(num == 19 ){
							num = "¹⁹";
						}else if(num == 20 ){
							num = "²⁰";
						}else if(num == 21 ){
							num = "²¹";
						}else if(num == 22 ){
							num = "²²";
						}else if(num == 23 ){
							num = "²³";
						}else if(num == 24 ){
							num = "²⁴";
						}else if(num == 25 ){
							num = "²⁵";
						}else if(num == 26 ){
							num = "²⁶";
						}else if(num == 27 ){
							num = "²⁷";
						}else if(num == 28 ){
							num = "²⁸";
						}else if(num == 29 ){
							num = "²⁹";
						}else if(num == 30 ){
							num = "³⁰";
						}else if(num == 31 ){
							num = "³¹";
						}else if(num == 32 ){
							num = "³²";
						}else if(num == 33 ){
							num = "³³";
						}else if(num == 34 ){
							num = "³⁴";
						}else if(num == 35 ){
							num = "³⁵";
						}else if(num == 36 ){
							num = "³⁶";
						}else if(num == 37 ){
							num = "³⁷";
						}else if(num == 38 ){
							num = "³⁸";
						}else if(num == 39 ){
							num = "³⁹";
						}else if(num == 40 ){
							num = "⁴⁰";
						}
						return num

} 
//////end of Convert Number to Power/////////

superScriptToNumber = function (str1){
	var num;
	if (str1 == "¹") {
	num = 1
	}
	else if (str1 == "²") {
	num = 2
	}
	else if (str1 == "³") {
	num = 3
	}
	else if (str1 == "⁴") {
	num = 4
	}
	else if (str1 =="⁵" ) {
	num = 5
	}
	else if (str1 == "⁶") {
	num = 6
	}
	else if (str1 == "⁷") {
	num = 7
	}
	else if (str1 == "⁸") {
	num = 8
	}
	else if (str1 == "⁹") {
	num = 9
	}
	else if (str1 == "⁰") {
	num = 0
	}
	else if(str1 == "ᵃ"){
		num = "a"
	}
	else if(str1 == "ᵇ"){
		num = "b"
	}
	else if(str1 == "ᶜ"){
		num = "c"
	}
	else if(str1 == "ᵈ"){
		num = "d"
	}
	else if(str1 == "ᵉ"){
		num = "e"
	}
	else if(str1 == "ᶠ"){
		num = "f"
	}
	else if(str1 == "ᵍ"){
		num = "g"
	}
	else if(str1 == "ʰ"){
		num = "h"
	}
	else if(str1 == "ⁱ"){
		num = "i"
	}
	else if(str1 == "ʲ"){
		num = "j"
	}
	else if(str1 == "ᵏ"){
		num = "k"
	}
	else if(str1 == "ˡ"){
		num = "l"
	}
	else if(str1 == "ᵐ"){
		num = "m"
	}
	else if(str1 == "ⁿ"){
		num = "n"
	}
	else if(str1 == "ᵒ"){
		num = "o"
	}
	else if(str1 == "ᵖ"){
		num = "p"
	}
	else if(str1 == "ᶲ"){
		num = "q"
	}
	else if(str1 == "ʳ"){
		num = "r"
	}
	else if(str1 == "ˢ"){
		num = "s"
	}
	else if(str1 == "ᵗ"){
		num = "t"
	}
	else if(str1 == "ᵘ"){
		num = "u"
	}
	else if(str1 == "ᵛ"){
		num = "v"
	}
	else if(str1 == "ʷ"){
		num = "w"
	}
	else if(str1 == "ˣ"){
		num = "x"
	}
	else if(str1 == "ʸ"){
		num = "y"
	}
	else if(str1 == "ᶻ"){
		num = "z"
	} 
 	else if(str1 == "ᴬ"){
		num = "A"
	}
	else if(str1 == "ᴮ"){
		num = "B"
	}
	else if(str1 == "ᶜ"){
		num = "C"
	}
	else if(str1 == "ᴰ"){
		num = "D"
	}
	else if(str1 == "ᴱ"){
		num = "E"
	}
	else if(str1 == "ᶠ"){
		num = "F"
	}
	else if(str1 == "ᴳ"){
		num = "G"
	}
	else if(str1 == "ᴴ"){
		num = "H"
	}
	else if(str1 == "ᴵ"){
		num = "I"
	}
	else if(str1 == "ᴶ"){
		num = "J"
	}
	else if(str1 == "ᴷ"){
		num = "K"
	}
	else if(str1 == "ᴸ"){
		num = "L"
	}
	else if(str1 == "ᴹ"){
		num = "M"
	}
	else if(str1 == "ᴺ"){
		num = "N"
	}
	else if(str1 == "ᴼ"){
		num = "O"
	}
	else if(str1 == "ᴾ"){
		num = "P"
	}
	else if(str1 == "ᶲ"){
		num = "Q"
	}
	else if(str1 == "ᴿ"){
		num = "R"
	}
	else if(str1 == "ˢ"){
		num = "S"
	}
	else if(str1 == "ᵀ"){
		num = "T"
	}
	else if(str1 == "ᵁ"){
		num = "U"
	}
	else if(str1 == "ᵛ"){
		num = "V"
	}
	else if(str1 == "ᵂ"){
		num = "W"
	}
	else if(str1 == "ˣ"){
		num = "X"
	}
	else if(str1 == "ʸ"){
		num = "Y"
	}
	else if(str1 == "ᶻ"){
		num = "Z"
	}
		else if(str1 == "⁺"){
		num = "+"
	}
	else if(str1 == "⁻"){
		num = "–"
	}
	else if(str1 == "⁼"){
		num = "="
	}
	else if(str1 == "⁽"){
		num = "("
	}
	else if(str1 == "⁾"){
		num = ")"
	}
	else if(str1 == "˟"){
		num = "*"
	}
	else if(str1 == "˟"){
		num = "×"
	}
	else if(str1 == "÷"){
		num = "/"
	}
	else if(str1 == "·"){
		num = "."
	}
	else if(str1 == "٫"){
		num = ","
	}else {
	num = str1;
		}
return num;	
	
}

checkSuperScript = function (str1){
if (str1 == "¹") {
	return true;
	}
	else if (str1 == "²") {
	return true;
	}
	else if (str1 == "³") {
	return true;
	}
	else if (str1 == "⁴") {
	return true;
	}
	else if (str1 =="⁵" ) {
	return true;
	}
	else if (str1 == "⁶") {
	return true;
	}
	else if (str1 == "⁷") {
	return true;
	}
	else if (str1 == "⁸") {
	return true;
	}
	else if (str1 == "⁹") {
	return true;
	}
	else if (str1 == "⁰") {
	return true;	
	}
	else if(str1 == "ᵃ"){
	return true;	}
	else if(str1 == "ᵇ"){
return true;	}
	else if(str1 == "ᶜ"){
return true;	}
	else if(str1 == "ᵈ"){
return true;	}
	else if(str1 == "ᵉ"){
return true;	}
	else if(str1 == "ᶠ"){
return true;	}
	else if(str1 == "ᵍ"){
return true;	}
	else if(str1 == "ʰ"){
return true;	}
	else if(str1 == "ⁱ"){
return true;	}
	else if(str1 == "ʲ"){
return true;	}
	else if(str1 == "ᵏ"){
return true;	}
	else if(str1 == "ˡ"){
return true;	}
	else if(str1 == "ᵐ"){
return true;	}
	else if(str1 == "ⁿ"){
return true;	}
	else if(str1 == "ᵒ"){
return true;	}
	else if(str1 == "ᵖ"){
return true;	}
	else if(str1 == "ᶲ"){
return true;	}
	else if(str1 == "ʳ"){
return true;	}
	else if(str1 == "ˢ"){
return true;	}
	else if(str1 == "ᵗ"){
return true;	}
	else if(str1 == "ᵘ"){
return true;	}
	else if(str1 == "ᵛ"){
return true;	}
	else if(str1 == "ʷ"){
return true;	}
	else if(str1 == "ˣ"){
return true;	}
	else if(str1 == "ʸ"){
return true;	}
	else if(str1 == "ᶻ"){
return true;	} 
 	else if(str1 == "ᴬ"){
return true;	}
	else if(str1 == "ᴮ"){
return true;	}
	else if(str1 == "ᶜ"){
return true;	}
	else if(str1 == "ᴰ"){
return true;	}
	else if(str1 == "ᴱ"){
return true;	}
	else if(str1 == "ᶠ"){
return true;	}
	else if(str1 == "ᴳ"){
return true;	}
	else if(str1 == "ᴴ"){
return true;	}
	else if(str1 == "ᴵ"){
return true;	}
	else if(str1 == "ᴶ"){
return true;	}
	else if(str1 == "ᴷ"){
return true;	}
	else if(str1 == "ᴸ"){
return true;	}
	else if(str1 == "ᴹ"){
return true;	}
	else if(str1 == "ᴺ"){
return true;	}
	else if(str1 == "ᴼ"){
return true;	}
	else if(str1 == "ᴾ"){
return true;	}
	else if(str1 == "ᶲ"){
return true;	}
	else if(str1 == "ᴿ"){
return true;	}
	else if(str1 == "ˢ"){
return true;	}
	else if(str1 == "ᵀ"){
return true;	}
	else if(str1 == "ᵁ"){
return true;	}
	else if(str1 == "ᵛ"){
return true;	}
	else if(str1 == "ᵂ"){
return true;	}
	else if(str1 == "ˣ"){
return true;	}
	else if(str1 == "ʸ"){
return true;	}
	else if(str1 == "ᶻ"){
return true;	} 
		else if(str1 == "⁺"){
return true;	}
	else if(str1 == "⁻"){
return true;	}
	else if(str1 == "⁼"){
return true;	}
	else if(str1 == "⁽"){
return true;	}
	else if(str1 == "⁾"){
return true;	}
	else if(str1 == "˟"){
return true;	}
	else if(str1 == "˟"){
return true;	}
	else if(str1 == "÷"){
return true;	}
	else if(str1 == "·"){
return true;	}
	else if(str1 == "٫"){
return true;	}

	else {
		return false;	
		}
	 
}
///////////////latest 15th May 2017//////////////////


evaluate = function(eval_str, eval_o1, eval_num1, eval_o2, eval_num2, eval_o3, eval_num3, eval_o4, eval_num4, eval_o5, eval_num5, eval_o6, eval_num6)  {
	
	eval_str = String(Revert_Minus_sign(eval_str));


	/////////
 
		for (hkb_evali=0; hkb_evali<eval_str.length; hkb_evali++) {
			if ((checkSuperScript( eval_str.charAt(hkb_evali))) && (checkSuperScript( eval_str.charAt(hkb_evali+1)) == false)) {
					eval_str = eval_str.substr(0, hkb_evali)+"^("+superScriptToNumber(eval_str.charAt(hkb_evali))+")"+eval_str.substr(hkb_evali+1, eval_str.length);
				//alert(eval_str+"  eval_straaa")
			} 
			else if ((checkSuperScript( eval_str.charAt(hkb_evali))) && (checkSuperScript( eval_str.charAt(hkb_evali+1)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+2)) == false)) {
					eval_str = eval_str.substr(0, hkb_evali)+"^("+superScriptToNumber(eval_str.charAt(hkb_evali))+""+superScriptToNumber(eval_str.charAt(hkb_evali+1))+")"+eval_str.substr(hkb_evali+2, eval_str.length);
				//alert(eval_str+"  eval_straaa")
			} 
			else if ((checkSuperScript( eval_str.charAt(hkb_evali))) && (checkSuperScript( eval_str.charAt(hkb_evali+1)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+2)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+3)) == false)) {
					eval_str = eval_str.substr(0, hkb_evali)+"^("+superScriptToNumber(eval_str.charAt(hkb_evali))+""+superScriptToNumber(eval_str.charAt(hkb_evali+1))+""+superScriptToNumber(eval_str.charAt(hkb_evali+2))+")"+eval_str.substr(hkb_evali+3, eval_str.length);
				//alert(eval_str+"  eval_straaa")
			}
			else if ((checkSuperScript( eval_str.charAt(hkb_evali))) && (checkSuperScript( eval_str.charAt(hkb_evali+1)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+2)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+3)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+4)) == false)) {
					eval_str = eval_str.substr(0, hkb_evali)+"^("+superScriptToNumber(eval_str.charAt(hkb_evali))+""+superScriptToNumber(eval_str.charAt(hkb_evali+1))+""+superScriptToNumber(eval_str.charAt(hkb_evali+2))+""+superScriptToNumber(eval_str.charAt(hkb_evali+3))+")"+eval_str.substr(hkb_evali+4, eval_str.length);
				//alert(eval_str+"  eval_straaa")
			}
			else if ((checkSuperScript( eval_str.charAt(hkb_evali))) && (checkSuperScript( eval_str.charAt(hkb_evali+1)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+2)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+3)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+4)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+5)) == false)) {
					eval_str = eval_str.substr(0, hkb_evali)+"^("+superScriptToNumber(eval_str.charAt(hkb_evali))+""+superScriptToNumber(eval_str.charAt(hkb_evali+1))+""+superScriptToNumber(eval_str.charAt(hkb_evali+2))+""+superScriptToNumber(eval_str.charAt(hkb_evali+3))+""+superScriptToNumber(eval_str.charAt(hkb_evali+4))+")"+eval_str.substr(hkb_evali+5, eval_str.length);
				//alert(eval_str+"  eval_straaa")
			}
			else if ((checkSuperScript( eval_str.charAt(hkb_evali))) && (checkSuperScript( eval_str.charAt(hkb_evali+1)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+2)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+3)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+4)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+5)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+6)) == false)) {
					eval_str = eval_str.substr(0, hkb_evali)+"^("+superScriptToNumber(eval_str.charAt(hkb_evali))+""+superScriptToNumber(eval_str.charAt(hkb_evali+1))+""+superScriptToNumber(eval_str.charAt(hkb_evali+2))+""+superScriptToNumber(eval_str.charAt(hkb_evali+3))+""+superScriptToNumber(eval_str.charAt(hkb_evali+4))+""+superScriptToNumber(eval_str.charAt(hkb_evali+5))+")"+eval_str.substr(hkb_evali+6, eval_str.length);
				//alert(eval_str+"  eval_straaa")
			}
			else if ((checkSuperScript( eval_str.charAt(hkb_evali))) && (checkSuperScript( eval_str.charAt(hkb_evali+1)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+2)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+3)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+4)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+5)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+6)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+7)) == false)) {
					eval_str = eval_str.substr(0, hkb_evali)+"^("+superScriptToNumber(eval_str.charAt(hkb_evali))+""+superScriptToNumber(eval_str.charAt(hkb_evali+1))+""+superScriptToNumber(eval_str.charAt(hkb_evali+2))+""+superScriptToNumber(eval_str.charAt(hkb_evali+3))+""+superScriptToNumber(eval_str.charAt(hkb_evali+4))+""+superScriptToNumber(eval_str.charAt(hkb_evali+5))+""+superScriptToNumber(eval_str.charAt(hkb_evali+6))+")"+eval_str.substr(hkb_evali+7, eval_str.length);
				//alert(eval_str+"  eval_straaa")
			}
			else if ((checkSuperScript( eval_str.charAt(hkb_evali))) && (checkSuperScript( eval_str.charAt(hkb_evali+1)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+2)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+3)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+4)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+5)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+6)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+7)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+8)) == false)) {
					eval_str = eval_str.substr(0, hkb_evali)+"^("+superScriptToNumber(eval_str.charAt(hkb_evali))+""+superScriptToNumber(eval_str.charAt(hkb_evali+1))+""+superScriptToNumber(eval_str.charAt(hkb_evali+2))+""+superScriptToNumber(eval_str.charAt(hkb_evali+3))+""+superScriptToNumber(eval_str.charAt(hkb_evali+4))+""+superScriptToNumber(eval_str.charAt(hkb_evali+5))+""+superScriptToNumber(eval_str.charAt(hkb_evali+6))+""+superScriptToNumber(eval_str.charAt(hkb_evali+7))+")"+eval_str.substr(hkb_evali+8, eval_str.length);
				//alert(eval_str+"  eval_straaa")
			}
			else if ((checkSuperScript( eval_str.charAt(hkb_evali))) && (checkSuperScript( eval_str.charAt(hkb_evali+1)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+2)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+3)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+4)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+5)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+6)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+7)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+8)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+9)) == false)) {
					eval_str = eval_str.substr(0, hkb_evali)+"^("+superScriptToNumber(eval_str.charAt(hkb_evali))+""+superScriptToNumber(eval_str.charAt(hkb_evali+1))+""+superScriptToNumber(eval_str.charAt(hkb_evali+2))+""+superScriptToNumber(eval_str.charAt(hkb_evali+3))+""+superScriptToNumber(eval_str.charAt(hkb_evali+4))+""+superScriptToNumber(eval_str.charAt(hkb_evali+5))+""+superScriptToNumber(eval_str.charAt(hkb_evali+6))+""+superScriptToNumber(eval_str.charAt(hkb_evali+7))+""+superScriptToNumber(eval_str.charAt(hkb_evali+8))+")"+eval_str.substr(hkb_evali+9, eval_str.length);
				//alert(eval_str+"  eval_straaa")
			}
			else if ((checkSuperScript( eval_str.charAt(hkb_evali))) && (checkSuperScript( eval_str.charAt(hkb_evali+1)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+2)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+3)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+4)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+5)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+6)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+7)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+8)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+9)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+10)) == false)) {
					eval_str = eval_str.substr(0, hkb_evali)+"^("+superScriptToNumber(eval_str.charAt(hkb_evali))+""+superScriptToNumber(eval_str.charAt(hkb_evali+1))+""+superScriptToNumber(eval_str.charAt(hkb_evali+2))+""+superScriptToNumber(eval_str.charAt(hkb_evali+3))+""+superScriptToNumber(eval_str.charAt(hkb_evali+4))+""+superScriptToNumber(eval_str.charAt(hkb_evali+5))+""+superScriptToNumber(eval_str.charAt(hkb_evali+6))+""+superScriptToNumber(eval_str.charAt(hkb_evali+7))+""+superScriptToNumber(eval_str.charAt(hkb_evali+8))+""+superScriptToNumber(eval_str.charAt(hkb_evali+9))+")"+eval_str.substr(hkb_evali+10, eval_str.length);
				//alert(eval_str+"  eval_straaa")
			}
			else if ((checkSuperScript( eval_str.charAt(hkb_evali))) && (checkSuperScript( eval_str.charAt(hkb_evali+1)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+2)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+3)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+4)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+5)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+6)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+7)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+8)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+9)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+10)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+11)) == false)) {
					eval_str = eval_str.substr(0, hkb_evali)+"^("+superScriptToNumber(eval_str.charAt(hkb_evali))+""+superScriptToNumber(eval_str.charAt(hkb_evali+1))+""+superScriptToNumber(eval_str.charAt(hkb_evali+2))+""+superScriptToNumber(eval_str.charAt(hkb_evali+3))+""+superScriptToNumber(eval_str.charAt(hkb_evali+4))+""+superScriptToNumber(eval_str.charAt(hkb_evali+5))+""+superScriptToNumber(eval_str.charAt(hkb_evali+6))+""+superScriptToNumber(eval_str.charAt(hkb_evali+7))+""+superScriptToNumber(eval_str.charAt(hkb_evali+8))+""+superScriptToNumber(eval_str.charAt(hkb_evali+9))+""+superScriptToNumber(eval_str.charAt(hkb_evali+10))+")"+eval_str.substr(hkb_evali+11, eval_str.length);
				//alert(eval_str+"  eval_straaa")
			}
			else if ((checkSuperScript( eval_str.charAt(hkb_evali))) && (checkSuperScript( eval_str.charAt(hkb_evali+1)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+2)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+3)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+4)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+5)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+6)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+7)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+8)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+9)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+10)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+11)) == true)&& (checkSuperScript( eval_str.charAt(hkb_evali+12)) == false)) {
					eval_str = eval_str.substr(0, hkb_evali)+"^("+superScriptToNumber(eval_str.charAt(hkb_evali))+""+superScriptToNumber(eval_str.charAt(hkb_evali+1))+""+superScriptToNumber(eval_str.charAt(hkb_evali+2))+""+superScriptToNumber(eval_str.charAt(hkb_evali+3))+""+superScriptToNumber(eval_str.charAt(hkb_evali+4))+""+superScriptToNumber(eval_str.charAt(hkb_evali+5))+""+superScriptToNumber(eval_str.charAt(hkb_evali+6))+""+superScriptToNumber(eval_str.charAt(hkb_evali+7))+""+superScriptToNumber(eval_str.charAt(hkb_evali+8))+""+superScriptToNumber(eval_str.charAt(hkb_evali+9))+""+superScriptToNumber(eval_str.charAt(hkb_evali+10))+""+superScriptToNumber(eval_str.charAt(hkb_evali+11))+")"+eval_str.substr(hkb_evali+12, eval_str.length);
				//alert(eval_str+"  eval_straaa")
			}
			 
		}
	//alert(eval_str+" eval_str")
	/////////////////////////////////////////
	for (hkb_evalj=0; hkb_evalj<20; hkb_evalj++) {
		for (hkb_evali=0; hkb_evali<eval_str.length; hkb_evali++) {
			if (eval_str.charAt(hkb_evali)+eval_str.charAt(hkb_evali+1) == "-"+eval_o1) {
				eval_str = eval_str.substr(0, hkb_evali)+"-("+eval_num1+")"+eval_str.substr(hkb_evali+2, eval_str.length);
				//alert(eval_str+"  eval_straaa")
			} else if (eval_str.charAt(hkb_evali) == eval_o1) {
				eval_str = eval_str.substr(0, hkb_evali)+"("+eval_num1+")"+eval_str.substr(hkb_evali+1, eval_str.length);
			}
		}
	}
	for (hkb_evalj=0; hkb_evalj<20; hkb_evalj++) {
		for (hkb_evali=0; hkb_evali<eval_str.length; hkb_evali++) {
			if (eval_str.charAt(hkb_evali)+eval_str.charAt(hkb_evali+1) == "-"+eval_o2) {
				eval_str = eval_str.substr(0, hkb_evali)+"-("+eval_num2+")"+eval_str.substr(hkb_evali+2, eval_str.length);
			} else if (eval_str.charAt(hkb_evali) == eval_o2) {
				eval_str = eval_str.substr(0, hkb_evali)+"("+eval_num2+")"+eval_str.substr(hkb_evali+1, eval_str.length);
			}
		}
	}
	for (hkb_evalj=0; hkb_evalj<20; hkb_evalj++) {
		for (hkb_evali=0; hkb_evali<eval_str.length; hkb_evali++) {
			if (eval_str.charAt(hkb_evali)+eval_str.charAt(hkb_evali+1) == "-"+eval_o3) {
				eval_str = eval_str.substr(0, hkb_evali)+"-("+eval_num3+")"+eval_str.substr(hkb_evali+2, eval_str.length);
			} else if (eval_str.charAt(hkb_evali) == eval_o3) {
				eval_str = eval_str.substr(0, hkb_evali)+"("+eval_num3+")"+eval_str.substr(hkb_evali+1, eval_str.length);
			}
		}
	}
	for (hkb_evalj=0; hkb_evalj<20; hkb_evalj++) {
		for (hkb_evali=0; hkb_evali<eval_str.length; hkb_evali++) {
			if (eval_str.charAt(hkb_evali)+eval_str.charAt(hkb_evali+1) == "-"+eval_o4) {
				eval_str = eval_str.substr(0, hkb_evali)+"-("+eval_num4+")"+eval_str.substr(hkb_evali+2, eval_str.length);
			} else if (eval_str.charAt(hkb_evali) == eval_o4) {
				eval_str = eval_str.substr(0, hkb_evali)+"("+eval_num4+")"+eval_str.substr(hkb_evali+1, eval_str.length);

			}
		}
	}
	for (hkb_evalj=0; hkb_evalj<20; hkb_evalj++) {
		for (hkb_evali=0; hkb_evali<eval_str.length; hkb_evali++) {
			if (eval_str.charAt(hkb_evali)+eval_str.charAt(hkb_evali+1) == "-"+eval_o5) {
				eval_str = eval_str.substr(0, hkb_evali)+"-("+eval_num5+")"+eval_str.substr(hkb_evali+2, eval_str.length);
			} else if (eval_str.charAt(hkb_evali) == eval_o5) {
				eval_str = eval_str.substr(0, hkb_evali)+"("+eval_num5+")"+eval_str.substr(hkb_evali+1, eval_str.length);
			}
		}
	}
	for (hkb_evalj=0; hkb_evalj<20; hkb_evalj++) {
		for (hkb_evali=0; hkb_evali<eval_str.length; hkb_evali++) {
			if (eval_str.charAt(hkb_evali)+eval_str.charAt(hkb_evali+1) == "-"+eval_o6) {
				eval_str = eval_str.substr(0, hkb_evali)+"-("+eval_num6+")"+eval_str.substr(hkb_evali+2, eval_str.length);
			} else if (eval_str.charAt(hkb_evali) == eval_o6) {
				eval_str = eval_str.substr(0, hkb_evali)+"("+eval_num6+")"+eval_str.substr(hkb_evali+1, eval_str.length);
			}
		}
	}
		

	//////////////////////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////********	TRIMZERO START FOR EVALUATE  15th May 2017 *****************/////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////////
	hkbtrimzero = function(theString) {
		
		///////////////////FUNCTION trimSpaces////////////////////////////
		function hkb_trimSpaces(spc_theString) {
			//for (space_i=0; space_i<=5; space_i++) {
			for (space_m=0; space_m<=spc_theString.length; space_m++) {
				if (spc_theString.substring(space_m, space_m+1) == " ") {
					spc_theString = spc_theString.substring(0, space_m)+spc_theString.substring(space_m+1, spc_theString.length);
					space_m--;
				}
			}
			//}
			return spc_theString;
		}
		///////////////////FUNCTION trimSpaces 2 August 2006////////////////////////////
		///////////////////FUNCTION trimzero old  2 August 2006////////////////////////////
		function hkb_oldtrimzero(zero_theString) {
			zero_theString = String(zero_theString);
			//alert(zero_theString+"  zero_theString")
			for (trim_i=0; trim_i<zero_theString.length; trim_i++) {
				if (zero_theString.charAt(trim_i) == " ") {
					zero_theString = zero_theString.substring(0, trim_i)+zero_theString.substring(trim_i+1, zero_theString.length);
					trim_i--;
				}
			}
			if (zero_theString!="") {
				while (zero_theString.charAt(0) == "0" || zero_theString.charAt(0) == " ") {
					zero_theString = zero_theString.substring(1, zero_theString.length);
				}
				while (zero_theString.charAt(zero_theString.length-1) == " ") {
					zero_theString = zero_theString.substring(0, zero_theString.length-1);
				}
				trim_id = zero_theString.indexOf(".");
				if (trim_id!=-1) {
					for (trim_i=zero_theString.length-1; trim_i>trim_id; trim_i--) {
						if (zero_theString.charAt(trim_i) == "0" || zero_theString.charAt(trim_i) == " ") {
							zero_theString = zero_theString.substring(0, trim_i);
						} else {
							break;
						}
					}
					if (trim_id == zero_theString.length-1) {
						zero_theString = zero_theString.substring(0, trim_id);
					}
				}
				if (zero_theString == "") {
					zero_theString = "0";
				}
			}
			
			return zero_theString;
		}
		//////////////////////////////////////////////////////////////////////////
		/////////////////////////////////////////////////////////////////////////
		theString = hkb_trimSpaces(theString);
		trimzero_hkb = 0;
		trimzero_j = 0;
		trimzero_final_str = "";
		for (trimzero_i=0; trimzero_i<=theString.length; trimzero_i++) {
			if ((isNaN(theString.charAt(trimzero_i)) == false) || (theString.charAt(trimzero_i) == ".")) {
				trimzero_final_str += theString.substring(trimzero_hkb, trimzero_i);
				trimzero_hkb_str = "";
				trimzero_hkb_str += theString.charAt(trimzero_i);
				for (trimzero_j=trimzero_i+1; trimzero_j<=theString.length; trimzero_j++) {
					if (((isNaN(theString.charAt(trimzero_j)) == false) && (theString.charAt(trimzero_j) != ""))  || (theString.charAt(trimzero_j) == ".")) {
						trimzero_hkb_str += theString.charAt(trimzero_j);
						trimzero_i++;
					} else {
						trimzero_hkb_str = hkb_oldtrimzero(trimzero_hkb_str);
						trimzero_final_str += trimzero_hkb_str;
						trimzero_hkb = trimzero_j;
						break;
					}
				}
			}
		}
	
		trimzero_final_str += theString.substring(trimzero_j, theString.length);
		return trimzero_final_str;
	};
	///////////////////FUNCTION trimzero main////////////////////////////
	///////////////////FUNCTION trimzero NEW  Start////////////////////////////
	/////////////////////********	TRIMZERO END FOR EVALUATE   *****************/////////////////////////
	eval_str = hkbtrimzero(eval_str);
	//alert(eval_str+"  eval_str")
	eval_ans1 = "";
	eval_lcount = 0;
	eval_rcount = 0;
	eval_ans1 = eval_str;
	for (eval_i=0; eval_i<=5; eval_i++) {
		for (eval_m=0; eval_m<=eval_ans1.length; eval_m++) {
			if (eval_ans1.substring(eval_m, eval_m+1) == " ") {
				eval_ans1 = eval_ans1.substring(0, eval_m)+eval_ans1.substring(eval_m+1, eval_ans1.length);
			}
		}
		//THIS IS FOR REMOVING SPACE IN THE BEGINING
		if (eval_ans1.charAt(0) == " ") {
			eval_ans1 = eval_ans1.substring(1, eval_ans1.length);
		}
		//THIS IS FOR REMOVING SPACE IN THE LAST                                                                       
		if (eval_ans1.charAt(eval_ans1.length-1) == " ") {
			eval_ans1 = eval_ans1.substring(0, eval_ans1.length-1);
		}
	}
	

	for (eval_ij=0; eval_ij<eval_ans1.length; eval_ij++) {
		if (eval_ans1.charAt(eval_ij) == "(") {
			eval_lcount++;
		}
		if (eval_ans1.charAt(eval_ij) == ")") {
			eval_rcount++;
		}
	}
	if (eval_lcount!=eval_rcount) {
		eval_ans1 = "Not Number";
	}
	for (var hkb_ni = 0; hkb_ni<eval_ans1.length; hkb_ni++) {
		if ((eval_ans1.charAt(hkb_ni) == "(") && (eval_ans1.charAt(hkb_ni+1) == "-") && (eval_ans1.charAt(hkb_ni+2) == "(")) {
			eval_ans1 = eval_ans1.substring(0, hkb_ni)+"(-1"+eval_ans1.substring(hkb_ni+2, eval_ans1.length);
		}
	}
	if ((eval_ans1.charAt(0) == "-") && (eval_ans1.charAt(1) == "(")) {
		eval_ans1 = "-1"+eval_ans1.substring(1, eval_ans1.length);
	}
	for (eval_i=0; eval_i<eval_ans1.length; eval_i++) {
		if ((isNaN(eval_ans1.charAt(eval_i-1)) == true) && (eval_ans1.charAt(eval_i-1)!=".") && (eval_ans1.charAt(eval_i) == eval_o1)) {
			eval_ans1 = eval_ans1.substring(0, eval_i)+"(1"+eval_o1+")"+eval_ans1.substring(eval_i+1, eval_ans1.length);
		}
		if ((eval_ans1.charAt(eval_i-1) == "(") && ((eval_ans1.charAt(eval_i) == "*") || (eval_ans1.charAt(eval_i) == "-") || (eval_ans1.charAt(eval_i) == "+") || (eval_ans1.charAt(eval_i) == "/") || (eval_ans1.charAt(eval_i) == "^")) && (eval_ans1.charAt(eval_i+1) == ")")) {
			eval_ans1 = "Not number";
		}
		if (arguments[3]!=undefined) {
			if ((isNaN(eval_ans1.charAt(eval_i-1)) == true) && (eval_ans1.charAt(eval_i-1)!=".") && (eval_ans1.charAt(eval_i) == eval_o2)) {
				eval_ans1 = eval_ans1.substring(0, eval_i)+"(1"+eval_o2+")"+eval_ans1.substring(eval_i+1, eval_ans1.length);
			}
		}
		if (arguments[5]!=undefined) {
			if ((isNaN(eval_ans1.charAt(eval_i-1)) == true) && (eval_ans1.charAt(eval_i-1)!=".") && (eval_ans1.charAt(eval_i) == eval_o3)) {
				eval_ans1 = eval_ans1.substring(0, eval_i)+"(1"+eval_o3+")"+eval_ans1.substring(eval_i+1, eval_ans1.length);
			}
		}
		if (arguments[7]!=undefined) {
			if ((isNaN(eval_ans1.charAt(eval_i-1)) == true) && (eval_ans1.charAt(eval_i-1)!=".") && (eval_ans1.charAt(eval_i) == eval_o4)) {
				eval_ans1 = eval_ans1.substring(0, eval_i)+"(1"+eval_o4+")"+eval_ans1.substring(eval_i+1, eval_ans1.length);
			}
		}
		if (arguments[9]!=undefined) {
			if ((isNaN(eval_ans1.charAt(eval_i-1)) == true) && (eval_ans1.charAt(eval_i-1)!=".") && (eval_ans1.charAt(eval_i) == eval_o5)) {
				eval_ans1 = eval_ans1.substring(0, eval_i)+"(1"+eval_o5+")"+eval_ans1.substring(eval_i+1, eval_ans1.length);
			}
		}
		if (arguments[11]!=undefined) {
			if ((isNaN(eval_ans1.charAt(eval_i-1)) == true) && (eval_ans1.charAt(eval_i-1)!=".") && (eval_ans1.charAt(eval_i) == eval_o6)) {
				eval_ans1 = eval_ans1.substring(0, eval_i)+"(1"+eval_o6+")"+eval_ans1.substring(eval_i+1, eval_ans1.length);
			}
		}
	}

	if (eval_ans1!="") {
		for (eval_i=0; eval_i<=eval_ans1.length; eval_i++) {
			if ((eval_ans1.charAt(eval_i) == ")") && (eval_ans1.charAt(eval_i+1) != "") &&  ((eval_ans1.charAt(eval_i+1) == ".") || (isNaN(eval_ans1.charAt(eval_i+1)) == false))) {
				eval_ans1 = eval_ans1.substring(0, eval_i+1)+"*"+eval_ans1.substring(eval_i+1, eval_ans1.length);
			}
			
		}
	}
		

	eval_t1 = eval_ans1;
	//alert(eval_t1+"  eval_ans11111")
	for (eval_i=0; eval_i<=(eval_t1.length+10); eval_i++) {
		/***********************eval_o1**********************/
		if (eval_t1.charAt(eval_i) == eval_o1) {
			if (eval_i!=0) {
				if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i-1) == ".") && ((isNaN(eval_t1.charAt(eval_i+1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
					eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_num1+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
				}
				if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i-1) == ".") && ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!="."))) {
					eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_num1+eval_t1.substring(eval_i+1, eval_t1.length);
				}
				if (((isNaN(eval_t1.charAt(eval_i-1)) == true) && (eval_t1.charAt(eval_i-1)!=".")) && ((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
					eval_t1 = eval_t1.substring(0, eval_i)+eval_num1+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
				}
				if (((isNaN(eval_t1.charAt(eval_i-1)) == true) && (eval_t1.charAt(eval_i-1)!=".")) && ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!="."))) {
					eval_t1 = eval_t1.substring(0, eval_i)+eval_num1+eval_t1.substring(eval_i+1, eval_t1.length);
				}
				if (eval_t1.charAt(eval_i-1) == ")") {
					eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_t1.substring(eval_i, eval_t1.length);
				}
			} else {
				if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
					eval_t1 = eval_t1.substring(0, eval_i)+eval_num1+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
				}
				if ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!=".")) {
					eval_t1 = eval_t1.substring(0, eval_i)+eval_num1+eval_t1.substring(eval_i+1, eval_t1.length);
				}
			}
		}
		//alert(eval_t1+"  eval_t1")
		/***********************eval_o2*/ 
		////////////////////////////////*/
		
		if (arguments[3]!=undefined) {
			if (eval_t1.charAt(eval_i) == eval_o2) {
				if (eval_i!=0) {
					if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i-1) == ".") && ((isNaN(eval_t1.charAt(eval_i+1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_num2+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i-1) == ".") && ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!="."))) {
						eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_num2+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (((isNaN(eval_t1.charAt(eval_i-1)) == true) && (eval_t1.charAt(eval_i-1)!=".")) && ((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num2+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (((isNaN(eval_t1.charAt(eval_i-1)) == true) && (eval_t1.charAt(eval_i-1)!=".")) && ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!="."))) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num2+eval_t1.substring(eval_i+1, eval_t1.length);
					}

					if (eval_t1.charAt(eval_i-1) == ")") {
						eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_t1.substring(eval_i, eval_t1.length);
					}
				} else {
					if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num2+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!=".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num2+eval_t1.substring(eval_i+1, eval_t1.length);
					}
				}
			}
		}
		//////////////////////////////////////////////  
		/***********************eval_o3*/
		////////////////////////////////*/                                                                     
		
		if (arguments[5]!=undefined) {
			if (eval_t1.charAt(eval_i) == eval_o3) {
				if (eval_i!=0) {
					if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i-1) == ".") && ((isNaN(eval_t1.charAt(eval_i+1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_num3+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i-1) == ".") && ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!="."))) {
						eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_num3+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (((isNaN(eval_t1.charAt(eval_i-1)) == true) && (eval_t1.charAt(eval_i-1)!=".")) && ((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num3+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (((isNaN(eval_t1.charAt(eval_i-1)) == true) && (eval_t1.charAt(eval_i-1)!=".")) && ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!="."))) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num3+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (eval_t1.charAt(eval_i-1) == ")") {
						eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_t1.substring(eval_i, eval_t1.length);
					}
				} else {
					if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num3+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!=".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num3+eval_t1.substring(eval_i+1, eval_t1.length);
					}
				}
			}
		}
		//////////////////////////////////////////////
		/***********************eval_o4*/
		////////////////////////////////*/                                                                       
		
		if (arguments[7]!=undefined) {
			if (eval_t1.charAt(eval_i) == eval_o4) {
				if (eval_i!=0) {
					if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i-1) == ".") && ((isNaN(eval_t1.charAt(eval_i+1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_num4+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i-1) == ".") && ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!="."))) {
						eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_num4+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (((isNaN(eval_t1.charAt(eval_i-1)) == true) && (eval_t1.charAt(eval_i-1)!=".")) && ((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num4+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (((isNaN(eval_t1.charAt(eval_i-1)) == true) && (eval_t1.charAt(eval_i-1)!=".")) && ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!="."))) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num4+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (eval_t1.charAt(eval_i-1) == ")") {
						eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_t1.substring(eval_i, eval_t1.length);
					}
				} else {
					if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num4+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!=".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num4+eval_t1.substring(eval_i+1, eval_t1.length);
					}
				}
			}
		}
		//////////////////////////////////////////////                                                                       
		/***********************eval_o5*/
		////////////////////////////////*/
		if (arguments[9]!=undefined) {
			if (eval_t1.charAt(eval_i) == eval_o5) {
				if (eval_i!=0) {
					if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i-1) == ".") && ((isNaN(eval_t1.charAt(eval_i+1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_num5+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i-1) == ".") && ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!="."))) {
						eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_num5+eval_t1.substring(eval_i+1, eval_t1.length);

					}
					if (((isNaN(eval_t1.charAt(eval_i-1)) == true) && (eval_t1.charAt(eval_i-1)!=".")) && ((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num5+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (((isNaN(eval_t1.charAt(eval_i-1)) == true) && (eval_t1.charAt(eval_i-1)!=".")) && ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!="."))) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num5+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (eval_t1.charAt(eval_i-1) == ")") {
						eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_t1.substring(eval_i, eval_t1.length);
					}
				} else {
					if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num5+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!=".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num5+eval_t1.substring(eval_i+1, eval_t1.length);
					}
				}
			}
		}
		//////////////////////////////////////////////                                                                       
		/***********************eval_o6*/
		////////////////////////////////*/
		if (arguments[11]!=undefined) {
			if (eval_t1.charAt(eval_i) == eval_o6) {
				if (eval_i!=0) {
					if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i-1) == ".") && ((isNaN(eval_t1.charAt(eval_i+1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_num6+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i-1) == ".") && ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!="."))) {
						eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_num6+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (((isNaN(eval_t1.charAt(eval_i-1)) == true) && (eval_t1.charAt(eval_i-1)!=".")) && ((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num6+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (((isNaN(eval_t1.charAt(eval_i-1)) == true) && (eval_t1.charAt(eval_i-1)!=".")) && ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!="."))) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num6+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if (eval_t1.charAt(eval_i-1) == ")") {
						eval_t1 = eval_t1.substring(0, eval_i)+"*"+eval_t1.substring(eval_i, eval_t1.length);
					}
				} else {
					if (((isNaN(eval_t1.charAt(eval_i-1)) == false) || eval_t1.charAt(eval_i+1) == ".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num6+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
					}
					if ((isNaN(eval_t1.charAt(eval_i+1)) == true) && (eval_t1.charAt(eval_i+1)!=".")) {
						eval_t1 = eval_t1.substring(0, eval_i)+eval_num6+eval_t1.substring(eval_i+1, eval_t1.length);
					}
				}
			}
		}
		//////////////////////////////////////////////                                                                       
		if ((eval_t1.charAt(eval_i) == ")") && (eval_t1.charAt(eval_i+1) == "(")) {
			eval_t1 = eval_t1.substring(0, eval_i+1)+"*"+eval_t1.substring(eval_i+1, eval_t1.length);
		}
		if ((eval_t1.charAt(eval_i) == "(") && (eval_i!=0)) {
			if (isNaN(eval_t1.charAt(eval_i-1)) == false || eval_t1.charAt(eval_i-1) == ".") {
				eval_t1 = eval_t1.substring(0, eval_i)+"*("+eval_t1.substring(eval_i+1, eval_t1.length);
			}
		}
	}
	var eval_ans = [];
	var eval_s = [];
	var eval_p = [];
	eval_len = eval_t1.length;
	eval_cnt = 0;
		//alert(eval_len+"  eval_i "+eval_t1)
	for (eval_i=0; eval_i<eval_t1.length; eval_i++) {
		//alert(eval_i+"  eval_i")
		if ((isNaN(eval_t1.charAt(eval_i)) == true) && (eval_t1.charAt(eval_i)!=".")) {
			eval_ans[eval_i] = eval_t1.charAt(eval_i);
			//alert(eval_ans[eval_i]+"  eval_i "+eval_i)
		} else {
			eval_ans[eval_i] = eval_t1.charAt(eval_i);
			//alert(eval_ans[eval_i]+"  eval_b "+eval_i)
			eval_cnt = 0;
			for (eval_m=eval_i+1; eval_m<eval_len; eval_m++) {
				if ((isNaN(eval_t1.charAt(eval_m)) == false) || (eval_t1.charAt(eval_m) == ".")) {
					eval_ans[eval_i] = eval_ans[eval_i]+eval_t1.charAt(eval_m);
					//alert(eval_ans[eval_i]+"  eval_c "+eval_i)
					eval_cnt++;
				} else {
					break;
				}
			}
			
			eval_i = eval_i+eval_cnt;
		}
	}

	for (eval_b=0; eval_b<eval_ans.length; eval_b++) {
		if (eval_ans[eval_b] == undefined) {
			eval_ans.splice(eval_b, 1);
			eval_b--;
		}
	}
	for (eval_c=0; eval_c<eval_ans.length; eval_c++) {
		if (((eval_ans[eval_c] == "*") || (eval_ans[eval_c] == "^") || (eval_ans[eval_c] == "+") || (eval_ans[eval_c] == "-") || ((eval_ans[eval_c] == "/")&& (eval_ans[eval_c-1] !=undefined))) && (((isNaN(eval_ans[eval_c-1]) == true) && (eval_ans[eval_c-1])!=")") || (eval_ans[eval_c-1] == "("))) {
			eval_ans[eval_c] = eval_ans[eval_c]+eval_ans[eval_c+1];
			eval_ans.splice(eval_c+1, 1);
			eval_c--;
		}
	}

//alert(eval_ans+"  eval_ans")
	var eval_q = eval_ans;
	eval_q[eval_q.length] = ")";
	eval_s[0] = "(";
	//alert(eval_ans+"  eval_ans")	  
	for (eval_i=0; eval_i<eval_q.length; eval_i++) {
		if (((isNaN(eval_q[eval_i])) == false) || ((eval_q[eval_i]) == ".")) {
			eval_p.push(eval_q[eval_i]);
		}
		if (eval_q[eval_i] == "(") {
			eval_s.unshift("(");
		}
		if ((eval_q[eval_i] == "*") || (eval_q[eval_i] == "+") || (eval_q[eval_i] == "^") || (eval_q[eval_i] == "-") || (eval_q[eval_i] == "/")) {
			for (j=0; j<eval_s.length; j++) {
				
				if ((pcd(eval_s[j], eval_q[eval_i]) == true)) {
					
					eval_p.push(eval_s[j]);
					eval_s.shift();
					j--;
				} else {
					//alert("Here i am ..ris "+eval_s.length)
					break;
				}
			}
			eval_s.unshift(eval_q[eval_i]);
			//alert("eval_s ..ris "+eval_s)
		}
		
		if (eval_q[eval_i] == ")") {
				
			for (n=0; n<eval_s.length; n++) {
				if (eval_s[n]!="(") {
					eval_p.push(eval_s[n]);
					eval_s.shift();
					n--;
				} else {
					eval_s.shift();
					break;
				}
			}
			
		}
	}

	/**************************************/
	
	eval_p.push(")");
	var eval_value;
	
	for (eval_h=0; eval_h<eval_p.length; eval_h++) {
		if (eval_p[eval_h]!=")") {
			if ((isNaN(eval_p[eval_h]) == false) || (eval_p[eval_h] == ".")) {
				eval_s.unshift(eval_p[eval_h]);
			}
			
			if ((eval_p[eval_h] == "*") || (eval_p[eval_h] == "^") || (eval_p[eval_h] == "/") || (eval_p[eval_h] == "+") || (eval_p[eval_h] == "-")) {
				if (eval_p[eval_h] == "*") {
					eval_value = Number(eval_s[1])*Number(eval_s[0]);
				}
				if (eval_p[eval_h] == "+") {
					eval_value = Number(eval_s[1])+Number(eval_s[0]);
				}
				if (eval_p[eval_h] == "-") {
					eval_value = Number(eval_s[1])-Number(eval_s[0]);
				}
				if (eval_p[eval_h] == "/") {
					eval_value = Number(eval_s[1])/Number(eval_s[0]);
				}
				if (eval_p[eval_h] == "^") {
					eval_value = Math.pow(Number(eval_s[1]), Number(eval_s[0]));
				}
				eval_s.shift();
				eval_s. shift();
				eval_s.unshift(eval_value);
			}
		}
	}
	
	//alert(eval_s[0]+" == eval_value..")
	//alert("eval_s[0] ..ris "+eval_s[0])
	return (Number(eval_s[0]));
};

chkfmt = function(chk_str) {
	var chk_cnt1 = 0;
	var chk_cnt2 = 0;
	var chk_cnt3 = 0;
	var chk_cnt4 = 0;
	var chk_cnt5 = 0;
	var chk_cnt6 = 0;
	chk_cnt1 = chk_str.indexOf("++");
	chk_cnt2 = chk_str.indexOf("+–");
	chk_cnt3 = chk_str.indexOf("–+");
	chk_cnt4 = chk_str.indexOf("––");
	chk_cnt5 = chk_str.indexOf("/+");
	chk_cnt6 = chk_str.indexOf("+/");
	if ((chk_cnt1 == -1) && (chk_cnt2 == -1) && (chk_cnt3 == -1) && (chk_cnt4 == -1) && (chk_cnt5 == -1) && (chk_cnt6 == -1)) {
		//alert("HHH")
		return true;
	} else {
		return false;
	}
	
};




tanx = function(str1, str2, str3) {
	for (aa=0; aa<=str1.length; aa++) {
		if (str1.substring(aa, aa+str2.length) == str2) {
			str1 = str1.substring(0, aa)+str3+str1.substring(aa+str2.length, str1.length);
		}
		a--;
	}
	return str1;
};




trimzero = function(theString) {
	///////////////////FUNCTION trimSpaces Start 17 March 2018////////////////////////////
	function hkb_trimSpaces(spc_theString) {
		spc_theString = String(spc_theString);
		//for (space_i=0; space_i<=5; space_i++) {
		for (space_m=0; space_m<=spc_theString.length; space_m++) {
			if (spc_theString.substring(space_m, space_m+1) == " ") {
				spc_theString = spc_theString.substring(0, space_m)+spc_theString.substring(space_m+1, spc_theString.length);
				space_m--;
			}
		}
		//}
	//	alert(spc_theString+"  spc_theString")
		return spc_theString;
	}
	///////////////////FUNCTION trimSpaces 2 August 2006////////////////////////////
	///////////////////FUNCTION trimzero old 2August 2006////////////////////////////
	function hkb_oldtrimzero(zero_theString) {
		console.log(zero_theString+"  zero_theString")
		zero_theString = String(zero_theString);
		for (trim_i=0; trim_i<zero_theString.length; trim_i++) {
			if (zero_theString.charAt(trim_i) == " ") {
				zero_theString = zero_theString.substring(0, trim_i)+zero_theString.substring(trim_i+1, zero_theString.length);
				trim_i--;
			}
		}
		if (zero_theString !="" ) {
			while (zero_theString.charAt(0) == "0" || zero_theString.charAt(0) == " ") {
				
				zero_theString = zero_theString.substring(1, zero_theString.length+1);
			}
			while (zero_theString.charAt(zero_theString.length-1) == " ") {
				zero_theString = zero_theString.substring(0, zero_theString.length-1);
			}
			trim_id = zero_theString.indexOf(".");
			if (trim_id!=-1) {
				for (trim_i=zero_theString.length-1; trim_i>trim_id; trim_i--) {
					if (zero_theString.charAt(trim_i) == "0" || zero_theString.charAt(trim_i) == " ") {
						zero_theString = zero_theString.substring(0, trim_i);
					} else {
						break;
					}
				}
				if (trim_id == zero_theString.length-1) {
					zero_theString = zero_theString.substring(0, trim_id);
				}
			}
			if (zero_theString == "") {
				zero_theString = "0";

			}
		}
		
		return zero_theString;
	}
	///////////////////FUNCTION trimzero old////////////////////////////
	///////////////////FUNCTION trimzero main////////////////////////////
	theString = hkb_trimSpaces(theString);
	trimzero_hkb = 0;
	trimzero_final_str = "";
	trimzero_j = 0;
	//alert(theString+" == theString..1")
	theString = hkb_trimSpaces(theString);
	trimzero_hkb = 0;
	trimzero_final_str = "";
	trimzero_j = 0;
	for (trimzero_i=0; trimzero_i<=theString.length; trimzero_i++) {
		if ((isNaN(theString.charAt(trimzero_i)) == false) || (theString.charAt(trimzero_i) == ".")) {
			trimzero_final_str += theString.substring(trimzero_hkb, trimzero_i);
			trimzero_hkb_str = "";
			trimzero_hkb_str += theString.charAt(trimzero_i);
			
			for (trimzero_j=trimzero_i+1; trimzero_j<=theString.length; trimzero_j++) {
				
				console.log(theString.charAt(trimzero_j)+"  (theString.charAt(trimzero_j))  "+trimzero_j)
				if (((isNaN(theString.charAt(trimzero_j)) == false) || (theString.charAt(trimzero_j) == ".")) && (theString.charAt(trimzero_j) != "")) {
					trimzero_hkb_str += theString.charAt(trimzero_j);
					trimzero_i++;
					console.log(trimzero_i+"  trimzero_i  "+trimzero_j)
				} else {	 
					trimzero_hkb_str = hkb_oldtrimzero(trimzero_hkb_str);
					trimzero_final_str += trimzero_hkb_str;
					trimzero_hkb = trimzero_j;
					break;
				}
			}
		}
	}
	trimzero_final_str += theString.substring(trimzero_j, theString.length);
	return trimzero_final_str;
};
	////////////////////////////////////////////////////


				getBaseLog = function (x, y) {
				return Math.log(y) / Math.log(x);
				}
				
											
	/*////////////////////////////////////////////////////////////////////////////////*/
CommaTest=(UserAnswer,result)=>{
	
	UserAnswer1=UserAnswer;
	NewMatchString=String(UserAnswer1).replace(/,/g, "");
		if(Number(NewMatchString)==result){
			if(UserAnswer1[1]!=comma_Convert(result)){
				return true;
			}
		}else{
			return false;
		}

}	




/* arr = [48, 5];
 properToMixed = arr => {
   const quotient = Math.floor(arr[0] / arr[1]);
   const remainder = arr[0] % arr[1];
   if(remainder === 0){
      return [quotient];
   }else{
      return [quotient, remainder, arr[1]];
   };
};
console.log(properToMixed(arr));	*/	



function getMaxValue(_array) 
{
//Math.max() returns the largest value out of all the values passed as argument
  return Math.max(..._array);
};
//usage of the function
let myArray = [78,89,54,3,901,1177];
console.log(getMaxValue(myArray));






shuffle = function(a) {
    var input = a;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
} 

 properToMixed = function(arr){
   const quotient = Math.floor(arr[0] / arr[1]);
   const remainder = arr[0] % arr[1];
   if(remainder === 0){
      return [quotient];
   }else{
      return [quotient, remainder, arr[1]];
   };
};


}); //////end of Main/////////



getElementsByClassNameCompatible = function(className) {

  if(document.getElementsByClassName) {
      return document.getElementsByClassName(className);
  } 

  var regEx = new RegExp('(^| )'+className+'( |$)');
  var nodes = new Array();
  var elements = document.body.getElementsByTagName("*");
  var len = elements.length;
  for(var i=0; i < len ; i++) {
      if(regEx.test(elements[i].className)) {
          nodes.push(elements[i]);
      }
  }
  elements = null;
  return nodes;
}
  
function watchfit_opt() {
  var gender = document.getElementById("myGender"); /* 성별 */
  var gender_sel = gender.value; /* 선택한 성별의 값 받아오기 */
  var gender_class = gender.options[gender.selectedIndex].className; /* 선택한 성별의 클래스값 받기 */
  var gender_hand = document.getElementById("watchfit__hand"); /* 손목 이미지 div 선택하기 */            
var watchfit_watch = document.getElementById("watchfit__watch");  /* 시계지름 div 선택하기 */
var watchfit_func = document.getElementById("watchfit__watch__function"); /* 밴드 스트랩 div 선택하기 */        
  var watchfit_bezel = document.getElementById("watchfit__watch__bezel"); /* 베젤 div 선택하기 */

  var watchfunc = document.getElementById("myWatchfunc"); /* 기능 셀렉트박스 선택하기 */
  var watchband = document.getElementById("myWatchband"); /* 밴드 셀렉트박스 선택하기 */
  var watchbezel = document.getElementById("myWatchbezel"); /* 베젤 셀렉트박스 선택하기 */
  
var watchfit_band = watchband.value; /* 밴드 셀렉트박스 값 받기 */
  var watchfunc_val = watchfunc.options[watchfunc.selectedIndex].value; /* 기능 셀렉트박스 선택값 밦기 */
  var watchbezel_val = watchbezel.options[watchbezel.selectedIndex].value; /* 베젤 셀렉트박스 선택값 밦기 */
  var watchband_class = watchband.options[watchband.selectedIndex].className; /* 밴드 셀렉트박스에서 선택한 값의 클래스명 받아오기 */

  var girl_el = getElementsByClassNameCompatible("girl"); /* 여자 손목단면 값 받기 */
  var boy_el = getElementsByClassNameCompatible("boy"); /* 남자 손목단면 값 받기 */
  var mid_el = getElementsByClassNameCompatible("mid"); /* 공통 손목단면 값 받기 (50mm) */
  var watch_el_man = getElementsByClassNameCompatible("boy_w");
  var watch_el_woman = getElementsByClassNameCompatible("girl_w");        
  
  var handMeter_sel = document.getElementById("myHandmeter").value; /* 손목단면 수치 노출부분 Element 선택 */
  var watchMeter_sel = document.getElementById("myWatchmeter").value; /* 시계지름 수치 노출부분 Element 선택 */              
  var handMeter_sel = parseInt(handMeter_sel); /* 손목단면 정수로 변환 */
  var watchMeter_sel = parseInt(watchMeter_sel);  /* 시계지름 정수로 변환 */
  
  if(gender_class == 'opt_man') { /* 남자 성별 선택 시 */
      for(var i=0; i<girl_el.length; i++) {
          girl_el[i].hidden = true; /* 여자 시계지름 사이즈 감추기 */
          girl_el[i].disabled = true; /* 여자 시계지름 사이즈 감추기 */                    
      }
      for(var i=0; i<boy_el.length; i++) {
          boy_el[i].hidden = false; /* 남자 시계지름 사이즈 보이기 */
          boy_el[i].disabled = false; /* 남자 시계지름 사이즈 보이기 */                    
      }               
      if(handMeter_sel < 45) {
          mid_el[0].selected = true;
      var handMeter_sel = document.getElementById("myHandmeter").value;
      }
      else if(watchMeter_sel < 35) { /* 시계지름 35mm보다 낮게 선택되었을 시 (남자 시계지름 사이즈로 초기화) */
          watch_el_man[0].selected = true;
      var watchMeter_sel = document.getElementById("myWatchmeter").value;                    
      }
gender_hand.className = "watchfit__hand man man_"+handMeter_sel; /* 남자 시계지름 클래스 추가 */
  }
  else if(gender_class == 'opt_woman') { /* 여자 성별 선택 시 */
      for(var i=0; i<girl_el.length; i++) {
          girl_el[i].hidden = false; /* 여자 시계지름 사이즈 보이기 */
          girl_el[i].disabled = false; /* 여자 시계지름 사이즈 보이기 */
      }
      for(var i=0; i<boy_el.length; i++) {
          boy_el[i].hidden = true; /* 남자 시계지름 사이즈 감추기 */
          boy_el[i].disabled = true; /* 여자 시계지름 사이즈 보이기 */
      }            
      if(handMeter_sel > 55) {
          girl_el[0].selected = true;
      var handMeter_sel = document.getElementById("myHandmeter").value;
      }
      else if(watchMeter_sel > 38) { /* 시계지름 38mm보다 높게 선택되었을 시 (여자 시계지름 사이즈로 초기화) */
          watch_el_woman[0].selected = true;
      var watchMeter_sel = document.getElementById("myWatchmeter").value;                    
      }
gender_hand.className = "watchfit__hand woman woman_"+handMeter_sel; /* 여자 시계지름 클래스 추가 */
  }

  /* if(watchbezel.selectedIndex > 0) {
      watchfunc.options[0].selected = true;
      watchband.options[0].selected = true;
watchfunc.disabled = true;
watchband.disabled = true;
      watchfit_func.className = "";
      watchfunc.style.opacity = "0.3";
      watchband.style.opacity = "0.3";                
      watchbezel.style.opacity = "1";
  }
  else if(watchfunc.selectedIndex > 0 || watchband.selectedIndex > 0) {
      watchbezel.style.opacity = "0.3";                
      watchbezel.disabled = true;
      watchfit_bezel.style.visibility = "hidden";
  }
  else {
watchfunc.disabled = false;
watchband.disabled = false;
      watchbezel.disabled = false;
      watchfunc.style.opacity = "1";
      watchband.style.opacity = "1";            
      watchbezel.style.opacity = "1";
      watchfit_bezel.style.visibility = "visible";                
  } */
  
watchfit_watch.className = 'w_'+watchMeter_sel+'mm '+watchband_class; /* 밴드, 기능, 베젤 클래스 추가 */
  watchfit_func.className = watchfunc_val;
  watchfit_bezel.className = watchbezel_val;
  
  document.getElementById("hand_meter").innerHTML = handMeter_sel; /* 손목사이즈 수치 표시 */
  document.getElementById("watch_meter").innerHTML = watchMeter_sel; /* 시계지름 수치 표시 */ 
gender_hand.style.backgroundImage = "url('images/hand_"+handMeter_sel+"_"+gender_sel+".jpg?v=202003219')"; /* select에서 선택한 값에 맞추어 이미지 URL 변경하기 */                        
}
watchfit_opt();
// build time:Thu Apr 26 2018 13:07:23 GMT+0800 (中国标准时间)
(function(){var e=0;jQuery(document).ready(function(t){t("html").click(function(b){var i=18;var n;e++;if(e==10){n=t("<b></b>").text("OωO")}else if(e==20){n=t("<b></b>").text("(๑•́ ∀ •̀๑)")}else if(e==30){n=t("<b></b>").text("(๑•́ ₃ •̀๑)")}else if(e==40){n=t("<b></b>").text("(๑•̀_•́๑)")}else if(e==50){n=t("<b></b>").text("（￣へ￣）")}else if(e==60){n=t("<b></b>").text("(╯°口°)╯(┴—┴")}else if(e==70){n=t("<b></b>").text("૮( ᵒ̌皿ᵒ̌ )ა")}else if(e==80){n=t("<b></b>").text("╮(｡>口<｡)╭")}else if(e==90){n=t("<b></b>").text("( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃")}else if(e>=100&&e<=105){n=t("<b></b>").text("(ꐦ°᷄д°᷅)")}else{n=t("<b></b>").text("❤");i=Math.round(Math.random()*14+6)}var o=b.pageX,s=b.pageY;n.css({"z-index":9999,top:s-20,left:o,position:"absolute",color:"#E94F06","font-size":i,"-moz-user-select":"none","-webkit-user-select":"none","-ms-user-select":"none"});t("body").append(n);n.animate({top:s-180,opacity:0},1500,function(){n.remove()})})})})();
//rebuild by neat 
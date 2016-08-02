var x = document.cookie;
var i=1;
console.log(i);
var current_aud;
var y;
  if (x == "Language=Hindi"){ 
    
    for(i=1;i<16;i++){
      console.log(i);
      current_aud="aud"+String(i);
      y= document.getElementById(current_aud).getAttribute("data-language");
      if (y=="Hindi") {
        document.getElementById(current_aud).style.display='block';
      };
    }
  }

  else if (x == "Language=French"){ 
    
    for(i=1;i<16;i++){
      console.log(i);
      current_aud="aud"+String(i);
      y= document.getElementById(current_aud).getAttribute("data-language");
      if (y=="French") {
        document.getElementById(current_aud).style.display='block';
      };
    }
  }

  else { 
    for(i=1;i<16;i++){
      console.log(i);
      current_aud="aud"+String(i);
      y= document.getElementById(current_aud).getAttribute("data-language");
      if (y=="English") {
        document.getElementById(current_aud).style.display='block';
      };
    }
  }
  
  

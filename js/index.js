window.onload=function(){
	// 滚动栏
	var speed=50 
    var show=document.getElementById("show"); 
    var show_2=document.getElementById("show_2"); 
    var show_ul=document.getElementById("show_ul"); 
    show_2.innerHTML=show_ul.innerHTML;
    function Marquee(){ 
        if(show_2.offsetTop-show.scrollTop<=0) 
          show.scrollTop-=show_ul.offsetHeight;
        else{ 
          show.scrollTop++;
        } 
    } 
    var MyMar=setInterval(Marquee,speed);
    show.onmouseover=function() {clearInterval(MyMar)};
    show.onmouseout=function() {MyMar=setInterval(Marquee,speed)};

    
}

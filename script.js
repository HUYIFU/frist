interval = setInterval(interval_changepic,3000);
var index=0;
window.onload = function()
{
	//第一个函数
	var tab = document.getElementById('dropmeau');
	var lis = tab.getElementsByTagName("li");
	var cons = document.getElementsByClassName('relative_pic');
	for(var i=0;i<lis.length;i++)
	{
                    lis[i].num = i;//给对象添加属性，赋值用于标记
                    lis[i].onmouseover = function()
                        {
                        	//alert("?");
                        cons[this.num].style.height = '200px';
                         }                     
                        	
                     lis[i].onmouseout =function()
                        	{
                        	 // setTimeout(function(){},10000);
                        	 
                        	 cons[this.num].style.height = '0px';
                        	
                            }
       }
    for(var i = 0; i < cons.length; i++) {
        cons[i].num = i;
        cons[i].onmouseover = function () {
            cons[this.num].style.height = '200px';
        };
        cons[i].onmouseout = function () {
            cons[this.num].style.height = '0px';
        }
    }         
                        

     
       //第二个函数
     var hidelist = document.getElementsByClassName('relative_product');
	var tablist = document.getElementsByClassName('taball');
    for(i=0;i<tablist.length;i++)
    {
    	  tablist[i].num= i;
    	   tablist[i].onmouseover = function()  //当触发悬浮时启动事件
    	   {
               hidelist[this.num].style.display = 'block';
    	   }
    	   tablist[i].onmouseout = function()
              {
                	hidelist[this.num].style.display = 'none';
              }
    }
    for (i=0;i<hidelist.length;i++)
    {
    	hidelist[i].num = i;
    	hidelist[i].onmouseover = function()
    	{
    		hidelist[this.num].style.display = 'block';
    	}
    	hidelist[i].onmouseout = function()
    	{
    		hidelist[this.num].style.display = 'none';
    	}
    }
}
function interval_changepic() //定义了一个全局变量 index
{
   var interpic =document.getElementById('interval_pic');
   var piclist = interpic.getElementsByTagName('img');
   if (index>=piclist.length)
   {
   	  index=0;
   	  for (var i=1;i<piclist.length;i++) //回到第一张 将之后的隐藏
   	  {
   	  	piclist[i].style.opacity = 0;
   	  }
   }
   piclist[index].style.opacity = 1.0;
   index++;
}
function  manual_intervalpic(num)
{
	 index=num-1;
	var interpic =document.getElementById('interval_pic');
   var piclist = interpic.getElementsByTagName('img');
     piclist[index].style.opacity = 1.0;
     for (i=0;i<piclist.length;i++)
     {
     	if (i!=index)
     	{
     		piclist[i].style.opacity = 0;
     	}
     }
    // clearinterval(interval);
 }
 function returnTop() //返回顶部
 {
 	document.body.scrollTop = 0;
 	document.documentElement.scrollTop = 0;
 }
 window.onscroll = function() //页面滚动启动函数
 {
      var returnelement = document.getElementById('returntop');
       if (document.body.scrollTop >70||document.documentElement.scrollTop>70) //当页面滚动超过70px
       {
         returnelement.style.display = 'block';
       }
       else
       {
       	returnelement.style.display = 'none';
       }
 }
var box_num = 0; //记录此时box的次序
function leftchange()//闪播的左切换按钮触发函数
{
	
   var getmanualpic = document.getElementById('manual_changepic');
   var boxlist= getmanualpic.getElementsByClassName('box');
   var box_length = boxlist.length;
     if (box_num==0)//此时第一个box
   {
   	  boxlist[box_num].style.display = 'none';
   	  box_num=box_length-1;
   }
   else
   {
   	boxlist[box_num].style.display = 'none';
   	box_num--;
   }
   boxlist[box_num].style.display = 'block';
}
function rightchange() //闪播的右切换按钮触发函数
{
   var getmanualpic = document.getElementById('manual_changepic');
   var boxlist= getmanualpic.getElementsByClassName('box');
   var box_length = boxlist.length;
   if (box_num==box_length-1)
   {
   	  boxlist[box_num].style.display = 'none';
   	  box_num=0;
   }
   else
   {
   	 boxlist[box_num].style.display = 'none';
   	 box_num++;
   }
   boxlist[box_num].style.display = 'block';
}
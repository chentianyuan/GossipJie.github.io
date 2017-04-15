
function clear_class(obj){
	for(var i = 0 ; i < 4 ; i++){
	obj[i].classList.remove("active-item");
	}
}

	//关闭当前页面，创建新页面
function closeView(){
	var allView = plus.webview.all();
	plus.webview.close(allView[0]);
}

function openNewScreen(){
			var btm5 = $("#mui-tab-item-5");
			var btm4 = $("#mui-tab-item-4");
			var btm3 = $("#mui-tab-item-3");
			var btm2 = $("#mui-tab-item-2");
			var btm1 = $("#mui-tab-item-1");
			

		//页面跳转打开页面personal.html		
		btm5[0].addEventListener('tap',function(){
			//判断当前页面与要打开页面是否相同。                       
			//indexof()函数判断两字符串是否相同并返回相同的开始的位置坐标，若不相同则返回-1
			//即此页面已打开的情况下不能再次打开
			if(plus.webview.currentWebview().getURL().indexOf("personal") > 0){
				//null
			}else{
			mui.openWindow({
				url: 'personal.html',
				id: 'presonal.html',
			  show:{
			      autoShow:true,//页面loaded事件发生后自动显示，默认为true
			      aniShow:'slide-in-left',//页面显示动画，默认为”slide-in-right“；
			      duration:200,//页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
			    },
				waiting:{
			      autoShow:true,//自动显示等待框，默认为true
			      title:'正在加载...',//等待对话框上显示的提示内容
				}
			});
			setTimeout('closeView()',300);//需等新的页面已经加载完成之后，再关闭之前的页面，否则会造成白屏现象
			}
		});
		
	
		//页面跳转打开问答页面		
		btm4[0].addEventListener('tap',function(){
			if(plus.webview.currentWebview().getURL().indexOf("Ask-Answer") > 0){
				//null
			}else{
			mui.openWindow({
				url: 'Ask-Answer.html',
				id: 'Ask-Answer.html',
			  show:{
			      autoShow:true,//页面loaded事件发生后自动显示，默认为true
			      aniShow:'slide-in-left',//页面显示动画，默认为”slide-in-right“；
			      duration:200,//页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
			    },
				waiting:{
			      autoShow:true,//自动显示等待框，默认为true
			      title:'正在加载...',//等待对话框上显示的提示内容
				}
			});
			setTimeout('closeView()',300);//需等新的页面已经加载完成之后，再关闭之前的页面，否则会造成白屏现象
			}
		});	
		
		//页面跳转打开问答页面		
		btm1[0].addEventListener('tap',function(){
			if(plus.webview.currentWebview().getURL().indexOf("index") > 0){
				//null
			}else{
			mui.openWindow({
				url: 'index.html',
				id: 'index.html',
			  show:{
			      autoShow:true,//页面loaded事件发生后自动显示，默认为true
			      aniShow:'slide-in-left',//页面显示动画，默认为”slide-in-right“；
			      duration:200,//页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
			    },
				waiting:{
			      autoShow:true,//自动显示等待框，默认为true
			      title:'正在加载...',//等待对话框上显示的提示内容
				}
			});
			setTimeout('closeView()',300);//需等新的页面已经加载完成之后，再关闭之前的页面，否则会造成白屏现象
			}
		});
			//页面跳转打开分享页面		
		btm3[0].addEventListener('tap',function(){
			if(plus.webview.currentWebview().getURL().indexOf("share") > 0){
				//null
			}else{
			mui.openWindow({
				url: 'share.html',
				id: 'share.html',
			  show:{
			      autoShow:true,//页面loaded事件发生后自动显示，默认为true
			      aniShow:'slide-in-left',//页面显示动画，默认为”slide-in-right“；
			      duration:200,//页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
			    },
				waiting:{
			      autoShow:true,//自动显示等待框，默认为true
			      title:'正在加载...',//等待对话框上显示的提示内容
				}
			});
			setTimeout('closeView()',300);//需等新的页面已经加载完成之后，再关闭之前的页面，否则会造成白屏现象
			}
		});		
}

//控制分享页面图片大小和间距自适应
function setShare(){
		var total = 5;
		var pad = 2;
		var zWin = $(window);
		var winWidth = zWin.width();//获取手机屏幕宽度
		var picWidth = Math.floor((winWidth - 2 * pad) / 3);//出去padding后每张图片的宽度
		for(var i = 0 ; i < total ; i++){
			$(".group li img").eq(i).css("width",picWidth + 'px');
			$(".group li img").eq(i).css("padding-top",pad + 'px');	
			if(i % 3 != 0){
				$(".group li img").eq(i).css("padding-left",pad + 'px');	
			}
		}
}

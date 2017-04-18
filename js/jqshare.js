$(function(){
	//选中图片
	$(".group li").click(function(){
		var x = $(this).index();
		if(x == 0)
		return;
		if($(".group li input").eq(x).attr("checked")){
			$(".group li input").eq(x).hide();
			$(".group li input").eq(x).attr("checked",false);			
		}else{
			$(".group li input").eq(x).show();
			$(".group li input").eq(x).attr("checked",true);		
		}
	});
	
	var page=null;  
            page={  
                imgUp:function(){  
                    var m=this;  
                    plus.nativeUI.actionSheet({cancel:"取消",buttons:[  
                        {title:"拍照"},  
                        {title:"从相册中选择"}  
                    ]}, function(e){//1 是拍照  2 从相册中选择  
                        switch(e.index){  
                            case 1:clickCamera();break;  
                            case 2:clickGallery();break;  
                        }  
                    });  
                }  
                //摄像头  
            }  
	$(".group li").eq(0).change(function(){
		page.imgUp();
	});
	
	//单击选择按钮
	var check = $(".mui-pull-right");
	var a = new Array();
	
	check.click(function(){
		a = [];
		var checkboxs = $(".group li input");
		var m = -1;
		for(var i = 0 ; i < checkboxs.length ; i++)
			{
				if(checkboxs.eq(i).attr("checked"))
				{
					m++;
					a[m] = $(".group li").eq(i).find('img').attr('src');	
				}
				//console.log(a[m]);
			}
			openChildwindow(this,m,a);
				/*
				if( m == 0){
					mui.toast("您还未选择图片");
				}else{
					mui.toast("您选中了" + m + "张图片");
				}
				*/
		});
});

/*
function updata(){
	
}

*/

function openChildwindow(obj,m,a){
		obj.addEventListener('tap',function(){
			
			if(plus.webview.currentWebview().getURL().indexOf("photo") > 0 || m == -1){
				mui.toast("您没有选择图片");
			}else{
			mui.openWindow({
				url: 'photo.html',
				id: 'photo.html',
				extras:{
					pic1:a[0],
					pic2:a[1],
					pic3:a[2],
					pic4:a[3],
					pic5:a[4]
				},
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
			//这里不需要setTimeout('closeView()',300);因为有返回键//需等新的页面已经加载完成之后，再关闭之前的页面，否则会造成白屏现象
			}
		});		
}

//读取相册

function clickGallery() {  
        plus.gallery.pick(function(path) {  
            plus.zip.compressImage({  
                src: path,  
                dst: "_doc/chat/gallery/" + path,  
                quality: 20,  
                overwrite: true  
            }, function(e) {  
                var task = plus.uploader.createUpload(server + "upload/chat", {  
                    method: "post"  
                }, function(t, sta) {  
                    console.log(JSON.stringify(t)); 
                    if(sta == 200) {  
                        var msg = t.responseText;  
                        var oImg = JSON.parse(msg);  
                        var imgUrl = oImg.urls;  
                        var re = new RegExp("\\\\", "g");  
                        imgUrl = imgUrl.replace(re, "/");  
                        uploadMsg(2, imgUrl);  
                    }  
                });  
                task.addFile(e.target, {});  
                task.start();  
            }, function(err) {  
                console.error("压缩失败：" + err.message);  
            });  
  
        }, function(err) {});  
    };  
    
// 拍照  
      
    function clickCamera() {  
        var cmr = plus.camera.getCamera();  
        var res = cmr.supportedImageResolutions[0];  
        var fmt = cmr.supportedImageFormats[0];  
        cmr.captureImage(function(path) {  
            //plus.io.resolveLocalFileSystemURL(path, function(entry) {  
            plus.io.resolveLocalFileSystemURL(path, function(entry) {  
                var localUrl = entry.toLocalURL();  
                plus.zip.compressImage({  
                    src: localUrl,  
                    dst: "_doc/chat/camera/" + localUrl,  
                    quality: 20,  
                    overwrite: true  
                }, function(e) {  
                    var task = plus.uploader.createUpload(server + "upload/chat", {  
                        method: "post"  
                    }, function(t, sta) {  
                        if(sta == 200) {  
                            var msg = t.responseText;  
                            var oImg = JSON.parse(msg);  
                            var imgUrl = oImg.urls;  
                            var re = new RegExp("\\\\", "g");  
                            imgUrl = imgUrl.replace(re, "/");  
                            console.log(imgUrl);  
                            uploadMsg(2, imgUrl);  
                        }  
                    });  
                    task.addFile(e.target, {});  
                    task.start();  
                }, function(err) {  
                    console.log("压缩失败：  " + err.message);  
                });  
            });  
        }, function(err) {  
            console.error("拍照失败：" + err.message);  
        }, {  
            index: 1  
        });  
    };  
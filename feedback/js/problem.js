$(function(){
	$("#image-list").click(function(){
		clickGallery();
	});
});

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
    
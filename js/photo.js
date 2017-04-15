function updata(obj){
	for(var i = 0 ; i < 3 ; i++){
		console.log(obj.pic1);
		var src = eval('(self.'+obj+'i'+')');
		if(src != null){
			$("#head").append("<img src = 'src'></img>");
		}
	}
}

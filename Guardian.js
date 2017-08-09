var Guardian = {

	init:function (obj){
		var InputData = [];
		obj.each(function(){
			InputData = $(this).find('input');
		})
		for(var i = 0; i < InputData.length; i++){
			var inputType = InputData[i].getAttribute('inputType');
			if(inputType == 'on'){
				var InputName = InputData[i].getAttribute('name');
				this.Ready(InputName);
			}
		}
		this.sub(obj);
	},

	Ready:function (InputName,code_info = 'true'){
		Name = $('input[name="'+InputName+'"]');

		if(Name.attr('validate') == 'on'){
			Guardian.InputBlur(Name,code_info);
		}
	},

	InputBlur:function (obj,code_info = 'true'){
		if(code_info){
			obj.blur(function(){
				var InputValidate = obj.attr('validate-method');
				var InputEmpty = obj.attr('empty-data');
				var InputError = obj.attr('error-data');
				if(obj.val() == ''){
					Guardian.sub_error(obj,InputEmpty)
				}else{
					var CodeInfo = Guardian.FormatCode(obj.val(),InputValidate);
					if(CodeInfo){
						Guardian.sub_info(obj,'')	
					}else{
						Guardian.sub_error(obj,InputError)
					}
				}
			})
		}else{
			var InputValidate = obj.attr('validate-method');
			var InputEmpty = obj.attr('empty-data');
			var InputError = obj.attr('error-data');
			if(obj.val() == ''){
				Guardian.sub_error(obj,InputEmpty)
			}else{
				var CodeInfo = Guardian.FormatCode(obj.val(),InputValidate);
				if(CodeInfo){
					Guardian.sub_info(obj,'')	
				}else{
					Guardian.sub_error(obj,InputError)
				}
			}	
		}
	},

	sub_error:function (obj,info){
		obj.attr('return','0');
	    obj.css({'border':'1px solid #a94442'});
	    obj.parent('li').children('span').html(info);
	    obj.parent('li').addClass('guardian');
	},

	sub_info:function (obj,info){
		obj.attr('return','1');
	    obj.css({'border':'1px solid #27d'});
	    obj.parent('li').children('span').html(info);
	    obj.parent('li').removeClass('guardian');
	},

	FormatCode:function (con, arr_of){
		var arr = new Array();
        arr['0'] = /^[\u4E00-\u9FA5·0-9A-z]{2,}$/;
        arr['1'] = /^[a-z0-9_-]{3,16}$/;
        arr['2'] = /^[a-zA-Z-]{3,16}$/;
        arr['3'] = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        arr['4'] = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
        arr['5'] = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        arr['6'] = /^([a-z0-9]{8,})$/;
        arr['7'] = /^[a-zA-Z0-9-]{4}$/;
        arr['8'] = /^[\u4E00-\u9FA5]+$/;
        arr['9'] = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        arr['10'] = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        arr['11'] = /^[1-9]\d*$/;
        arr['12'] = /^-[1-9]\d*$ /;

        if(typeof arr_of == 'object'){
            var str = new Array();
            var ser= 0;
            for(var i = 0; i< arr_of.length; i++){
                var a = arr_of[i];
                if(arr[a].test(con)){
                    ser++;
                };
            }
            if(ser !== 0){
                return true;
            }else{
                return false;
            }

        }else{
            if (!arr[arr_of].test(con)) {
                return false;
            }else{
                return true;
            }
        };	
	},

	Ckeck:function(InputName){
		var Name = $('input[name="'+InputName+'"]');

		if(Name.attr('validate') == 'on'){
			var inputType = Name.attr('type');
			if(inputType == 'checkbox'){
				var Name = $('input[name="'+InputName+'"]');
				this.ManyCkeck(Name);
			}else if(inputType == 'radio'){
				var Name = $('input[name="'+InputName+'"]');
				this.RadioCkeck(Name);
			}
		}
		
	},


	ManyCkeck:function(InputName){
		var min = InputName.attr('Checkmin');
		var max = InputName.attr('Checkmax');
		var Name = InputName.attr('name');
		var InputEmpty = InputName.attr('empty-data');
		var InputError = InputName.attr('error-data');
		var len = $('input[name="'+Name+'"]:checked').length;
		if(len < 1){
			this.sub_error(InputName,InputEmpty);
		}else{
			if(len < min || len > max){
				this.sub_error(InputName,InputEmpty);
			}else{
				this.sub_info(InputName,'')
			}
		}
	},

	RadioCkeck:function(InputName){
		var Name = InputName.attr('name');
		var InputEmpty = InputName.attr('empty-data');
		var InputError = InputName.attr('error-data');
		var len = $('input[name="'+Name+'"]:checked').length;
		if(len == 0){
			if(InputError){
				this.sub_error(InputName,InputError);
			}else{
				this.sub_error(InputName,InputEmpty);
			}
		}else{
			this.sub_info(InputName,'');
		}
	},

	Select:function(obj){
		obj.each(function(){
			InputSelect = $(this).find('select');
		})
		for(var i = 0; i < InputSelect.length; i++){
			var validate = InputSelect[i].getAttribute('validate');
			if(validate == 'on'){
				var InputName = InputSelect[i].getAttribute('name');
				this.SelectCode(InputName);
			}
		}
		
	},

	SelectCode:function(InputName){
		var InputName = $('select[name="'+InputName+'"]');
		var len = InputName.val();
		var InputEmpty = InputName.attr('empty-data');
		var InputError = InputName.attr('error-data');
		if(!len){
			if(InputError){
				this.sub_error(InputName,InputError);
			}else{
				this.sub_error(InputName,InputEmpty);
			}
		}else{
			this.sub_info(InputName,'');
		}
	},


	Textarea:function(obj){
		obj.each(function(){
			Inputtextarea = $(this).find('textarea');
		})
		for(var i = 0; i < Inputtextarea.length; i++){
			var validate = Inputtextarea[i].getAttribute('validate');
			if(validate == 'on'){
				var InputName = Inputtextarea[i].getAttribute('name');
				this.TextareaCode(InputName);
			}
		}
	},

	TextareaCode:function(InputName){
		var InputName= $('textarea[name="'+InputName+'"]');
		var InputValidate = InputName.attr('validate-method');
		var InputEmpty = InputName.attr('empty-data');
		var InputError = InputName.attr('error-data');
		if(InputName.val() == ''){
			Guardian.sub_error(InputName,InputEmpty)	
		}else{
			var CodeInfo = Guardian.FormatCode(InputName.val(),InputValidate);
			if(CodeInfo){
				Guardian.sub_info(InputName,'')	
			}else{
				Guardian.sub_error(InputName,InputError)
			}
		}
		
	},

	sub:function(obj){
		$('.sub').click(function(){
			obj.each(function(){
				InputText = $(this).find('input');
			})
			for(var i = 0; i < InputText.length; i++){
				var inputType = InputText[i].getAttribute('inputType');
				if(inputType == 'on'){
					var InputName = InputText[i].getAttribute('name');
					Guardian.Ready(InputName,false);
				}else{
					var InputName = InputText[i].getAttribute('name');
					Guardian.Ckeck(InputName);
				}
			}
			Guardian.Select(obj);
			Guardian.Textarea(obj);
			if(obj.children().hasClass('guardian')){
				return false;
			}else{
				alert('完成验证');
			}
			
		})

	}
}

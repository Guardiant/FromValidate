# FromValidate	
js表单验证器	 	<br />

使用方法	<br />

引入js类	<br />

<script src="./Guardian.js"></script>	<br />

实例化类方法，调用区域内id值，如	
<script>	<br />
var Guardian = new Object(Guardian);	<br />
Guardian.init(验证区域id,点击按钮属性值);	<br />
</script>	<br />
请在点击按钮前面添加<br>
<pre>
<input type="hidden" code_info="0" name="code_info"><br>
</pre>
用于判断验证是否通过
<pre>
<pre/>

可优化点。提交按钮必须必须有sub的class属性	<br />
可验证输入框 单选框 多选框 等等	<br />
因为input有两种输入类型  	<br />
inputType  on   输入类型	<br />
inputType  off  点击类型	<br />
	
Checkmin    多选框最少选中个数	<br />
Checkmax    多选框最多选中个数	<br />

validate  on/off  为验证数据	<br />
empty-data    	数据为空提示信息	<br />
error-data 	    数据错误提示信息<br />
validate-method			数据验证方式   	<br />
验证方式可传数组，验证多个方式	<br />
0		匹配中文英文数字的用户名;	<br />
1		匹配只有数字或英文下划线的用户名;	<br />
2		匹配只有英文的用户名;	<br />
3		匹配用户名是电话号码;	<br />
4		匹配帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)	<br />
5		邮箱验证	<br />
6		密码强度验证 二级	<br />
7		匹配只有数字或英文的验证码;	<br />
8		匹配全中文	<br />
9		验证ip	<br />
10		验证url	<br />
11		验证正整数	<br />
12		验证负正整数	<br />

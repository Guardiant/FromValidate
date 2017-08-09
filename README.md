# FromValidate
js表单验证器
使用方法
引入js类
<script src="./Guardian.js"></script>

实例化类方法，调用区域内id值，如
<form  id="acitv1">
	<li>
		<input type="text" name="user_name" value='' validate='on' empty-data='用户名不能为空' error-data="用户名格式不正确" validate-method='0' inputType='on' />
		<span></span>
	</li>
</form>
<script>
var Guardian = new Object(Guardian);
Guardian.init($('#acitv1'));
</script>
写的很渣，请参考


可验证输入框 单选框 多选框 等等
因为input有两种输入类型  
inputType  on   输入类型
inputType  off  点击类型

Checkmin    多选框最少选中个数
Checkmax    多选框最多选中个数

validate  on/off  为验证数据
empty-data    	数据为空提示信息
error-data 	    数据错误提示信息
validate-method			数据验证方式   
验证方式可传数组，验证多个方式
0		匹配中文英文数字的用户名;
1		匹配只有数字或英文下划线的用户名;
2		匹配只有英文的用户名;
3		匹配用户名是电话号码;
4		匹配帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)
5		邮箱验证
6		密码强度验证 二级
7		匹配只有数字或英文的验证码;
8		匹配全中文
9		验证ip
10		验证url
11		验证正整数
12		验证负正整数

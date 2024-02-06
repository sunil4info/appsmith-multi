export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	async SignFunc () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
		if(studsignemail.text != null && studsignemail.text != '' && studsignpassword.text != null && studsignpassword.text != ''){
		}else{
			showAlert("Email or Password cannot be blank!");
			return false;
		}

		{{signin.run(() =>{
			const data = signin?.data;
			if(data[0] != null)
			{
				storeValue("Email", data[0].Email);
				navigateTo('Vehicles', {}, 'SAME_WINDOW');
			}
			else
			{
				showAlert("Email or Password is wrong");
			}
		}
								)}}
	}
}
export default {

	RegisterFunc () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		navigateTo("Dashboard");
	},
	async SignFunc () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
		if(signusername.text != null && signusername.text != '' && signpassword.text != null && signpassword.text != ''){
		}else{
			showAlert("UserName or Password cannot be blank!");
			return false;
		}

		{{authenticate.run(() =>{
			const data = authenticate?.data;
			if(data.error == null)
			{
				storeValue("token", data.data.token);
				storeValue("refresh", data.data.refresh);
				//showAlert(appsmith.store.token);
				navigateTo('Users',{});
				//navigateTo('Dashboard', {}, 'SAME_WINDOW');
				//navigateTo('Home Page', {}, 'SAME_WINDOW');
			}
			else
			{
				showAlert("Username or Password is wrong");
			}
		}
											)}}
	}
}
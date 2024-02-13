export default {
	authentication () {
		var token = appsmith.store.token;
		if(token === null || token === '' || token === 'undefined'){
			navigateTo('Login');
		}
	},
	regitstuser () {
		AddUserAPI.run(() =>{
			const responsedata = AddUserAPI?.data?.data;
			const data = AddUserAPI?.data;
			if(responsedata != null)
			{
				showAlert(data.message);
			}
			else
			{
				showAlert(data?.error?.message,"error");
			}
		}
									)
	},

	signOut(){
		storeValue('token','');
		navigateTo('Login');
	}

}
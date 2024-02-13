export default {
	refreshAccessToken: () => { 
		const refresh = appsmith.store.refresh; 
		const newtoken = refreshtoken.data?.data.access;
		storeValue("token", newtoken);
	},
	authentication () {
		var token = appsmith.store.token;
		if(token === null || token === '' || token === 'undefined'){
			navigateTo('Login');
		}
	},
	GetUsers () {
		var data =  getUsers.data?.data;
		if(data != null){
			return data;
		}else{
			navigateTo('Login');
		}
	}
}
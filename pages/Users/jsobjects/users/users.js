export default {
	refreshAccessToken: () => { 
		//const refresh = appsmith.store.refresh; 
		const newtoken = refreshtoken.data?.data.access;
		storeValue("token", newtoken);
	} ,
	async GetUsers () {
		return getUsers.data?.data
	}
}
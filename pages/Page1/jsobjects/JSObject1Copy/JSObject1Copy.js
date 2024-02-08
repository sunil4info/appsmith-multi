export default {
	randomWorkID: () => {
		return Math.ceil(Math.random() * (9999 -  + 1)) + 1;
	},
	GetProduct:() => {
		const data = NavigationMenu.data.data;
		//showAlert(data[0].productName);
		return data;
	}
}
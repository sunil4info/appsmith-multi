export default {
	randomWorkID: () => {
		return Math.ceil(Math.random() * (9999 -  + 1)) + 1;
	},
	GetProduct:() => {
		const data = ProductAPI.data?.data;
		//showAlert(data[0].productName);
		if(data[0] != null)
		{
			return ProductAPI.data?.data.map(i => ({        label: i["productName"],        value: i["productName"]      }));
		}
	}
}
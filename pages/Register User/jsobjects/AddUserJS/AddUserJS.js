export default {

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
	}

}
export default {
	
	regitstuser () {
		Add_User.run(() =>{
	const responsedata = Add_User?.data?.data;
	const data = Add_User?.data;
	if(responsedata != null)
	{
		showAlert(data.message);
		navigateTo('Authenticate User',{});
	}
	else
	{
showAlert(data?.error?.message,"error");
	}
}
)
	}

}
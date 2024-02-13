export default {
	refreshAccessToken: () => { 
		const refresh = appsmith.store.refresh; 
		const newtoken = refreshtoken.data?.data.access;
		storeValue("token", newtoken);
	},
	editUser () {
		Edit_User.run(() =>{
			const responsedata = Edit_User?.data?.data;
			const data = Edit_User?.data;
			if(responsedata != null)
			{

				showAlert(data.message);
				users.GetUsers();
				//tblUsers.triggeredRow.firstName = inputFirstName;
				//tblUsers.triggeredRow.lastName = inputLastName;
				//closeModal('modalEditUser');
				//setTimeout()(() => { users.GetUsers() }, 1000);
				//navigateTo();
				//setInterval(() => { users.GetUsers(); }, 1000, "myTimer");
			}
			else
			{
				showAlert(data?.error?.message,"error");
			}
		}
								 )
	}

}
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
				//setTimeout((users.GetUsers(),1000));
				//tblUsers.selectedRow.firstName = inputFirstName.text;
				//showAlert(tblUsers.selectedRow.firstName);
				//tblUsers.triggeredRow.firstName = inputFirstName.text;
				//showAlert(tblUsers.triggeredRow.firstName);
				//getUsers.run();
				//navigateTo('Users');
				//tblUsers.
				//closeModal('modalEditUser');
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


	},
	signOut(){
		storeValue('token','');
		navigateTo('Login');
	}

}
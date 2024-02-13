export default {

	async editUser () {
		//{{UpdateQuery.run(() => SelectQuery.run(), (error) => showAlert(`Error while updating resource!\n ${error}`,'error'))}}


		Edit_User.run(() =>{

			const responsedata = Edit_User?.data?.data;
			const data = Edit_User?.data;
			if(responsedata != null)
			{

				showAlert(data.message);
				//tblUsers.triggeredRow.firstName = inputFirstName;
				//tblUsers.triggeredRow.lastName = inputLastName;
				closeModal('modalEditUser');
				navigateTo('Users');
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
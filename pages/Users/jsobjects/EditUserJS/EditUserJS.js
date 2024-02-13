export default {

	editUser () {
		Edit_User.run(() =>{

			const responsedata = Edit_User?.data?.data;
			const data = Edit_User?.data;
			if(responsedata != null)
			{
				showAlert(data.message);
				closeModal(modalEditUser);
			}
			else
			{
				showAlert(data?.error?.message,"error");
			}
		}
								 )
	}

}
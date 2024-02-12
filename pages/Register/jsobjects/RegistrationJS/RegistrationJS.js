export default {
	myVar1: [],
	myVar2: {},
	next () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		var flag = 0;
		if(studentFirstName.text == null || studentFirstName.text == ''){
			flag = 1;
		};
		if(studentLastName.text == null || studentLastName.text == ''){
			flag = 1;
		}
		if(studentDOB.selectedDate == null || studentDOB.selectedDate == ''){
			flag = 1;
		}
		if(phonenumber.text == null || phonenumber.text == ''){
			flag = 1;
		}
		if(email.text == null || email.text == ''){
			flag = 1;
		}
		if(studentpassword.text == null || studentpassword.text == ''){
			flag = 1;
		}
		if(flag == 1){
			showAlert('Required fields cannot be empty');
			return false;
		}

		showModal('formPage3');

	}
}
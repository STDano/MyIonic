    enum Gender {
        Male,
        Female,
        Other
    }

    enum CivilStatus {
        Single,
        Married,
        Divorced,
        Widowed,
        Separated
    }

    class UserInfo {
        private _firstName: string;
        private _middleName: string;
        private _lastName: string;
        private _phoneNo: string;
        private _gender: Gender;
        private _birthDate: Date;
        private _address: string;
        private _civilStatus: CivilStatus;

        get firstName() {
            return this._firstName;
        }

        set firstName(val: string) {
            this._firstName = val;
        }

        get middleName() {
            return this._middleName;
        }

        set middleName(val: string) {
            this._middleName = val;
        }

        get lastName() {
            return this._lastName;
        }

        set lastName(val: string) {
            this._lastName = val;
        }

        get phoneNo() {
            return this._phoneNo;
        }

        set phoneNo(val: string) {
            this._phoneNo = val;
        }

        get gender() {
            return this._gender;
        }

        set gender(val: Gender) {
            this._gender = val;
        }

        get birthDate() {
            return this._birthDate;
        }

        set birthDate(val: Date) {
            this._birthDate = val;
        }

        get address() {
            return this._address;
        }

        set address(val: string) {
            this._address = val;
        }

        get civilStatus() {
            return this._civilStatus;
        }

        set civilStatus(val: CivilStatus) {
            this._civilStatus = val;
        }

        constructor (firstName: string, middleName: string, lastName: string, phoneNo: string, gender: Gender, birthDate: Date, address: string, civilStatus: CivilStatus) {
            this._firstName = firstName;
            this._middleName = middleName;
            this._lastName = lastName;
            this._phoneNo = phoneNo;
            this._gender = gender;
            this._birthDate = birthDate;
            this._address = address;
            this._civilStatus = civilStatus;
        }
    }

import "./newUser.css";
function NewUser() {
  return (
    <div className="newUser">
      <div className="newUserTitle">Please create new user</div>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>User Name</label>
          <input type="text" placeholder="john" />
        </div>

        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="john Mail" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="******" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+250 " />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newUserItem newUserGender">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" checked />
            <label for="male">Male</label>

            <input type="radio" name="gender" id="female" />
            <label for="female">Female</label>

            <input type="radio" name="gender" id="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="yes" default>
              Yes
            </option>
            <option value="no">No</option>
          </select>
        </div>
        <button type="submit" className="newUserButton">
          Create User
        </button>
      </form>
    </div>
  );
}

export default NewUser;

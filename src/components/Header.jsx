function NavBar(){
    return <ul className='nav'>
      <li><a href="#">Dashboard</a></li>
      <li><a href="#">Transaction</a></li>
      <li><a href="#">Reports</a></li>
      <li><a href="#">Settings</a></li>
    </ul>
  }

function Header({ isCK }) {
  return (
    <>
      <h1>{isCK ? "CK's " : "Guest's "} Income & Expense Tracker</h1>
      {/* secret message for CK only */}
      {/* && -> if want true only */}
      {isCK && <p id='welcomeMessage'>Take control of your finances</p>}
      {NavBar()}
    </>
  );
}

export default Header;
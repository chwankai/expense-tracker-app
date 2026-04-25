function Header({ isCK }) {
  return (
    <div className="header">
      <h1>{isCK ? "CK's " : "Guest's "} Income & Expense Tracker</h1>
      {/* secret message for CK only */}
      {/* && -> if want true only */}
      {isCK && <p id='welcomeMessage'>Take control of your finances</p>}
      {/* {NavBar()} */}
    </div>
  );
}

export default Header
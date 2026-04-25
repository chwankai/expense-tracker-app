import searchIcon from '../assets/images/search-button.svg'

function MainContentTop({newBalance}){

    return(
        <>
            <div className="title">
                <h2>Dashboard</h2>
            </div>
            <div className="search">
                <input className='searchField' type="text" placeholder='Search Bar' />
                {/* <ul className='searchPopup'>
                    <li>Income</li>
                    <li>Expense</li>
                </ul> */}
                <button><img width="15px" src={searchIcon} alt="search button" /></button>
            </div>
            <div className="balance">
                <p className="balanceAmount">RM {newBalance.toFixed(2)}</p>
                <p className="balanceDesc">Total balance from all account</p>
            </div>
            <div className="addButton"><button>Add a new record</button></div>
        </>
    );
}

export default MainContentTop
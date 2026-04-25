function MainContentTransaction({newIncome, newExpense}){
    return(
        <>
            <div className="trns income">
                <p className="trnsTitle">Income</p>
                <p className="trnsAmount">RM {newIncome.toFixed(2)}</p>
            </div>
            <div className="trns expense">
                <p className="trnsTitle">Expense</p>
                <p className="trnsAmount">RM {newExpense.toFixed(2)}</p>
            </div>
        </>
    );
}

export default MainContentTransaction
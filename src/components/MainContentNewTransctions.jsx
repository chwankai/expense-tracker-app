function MainContentNewTransactions (props){
    return(
        <>
            <div className="addNewTrns">
                <form onSubmit={props.handleSubmit} action="">
                    <h2>Add new record</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td><label htmlFor="type_select">Select type: </label></td>
                                <td>
                                    <select className="selectBox" name="type" id="type_select" value={props.newType} onChange={(e) => props.setNewType(e.target.value)}>
                                        <option value="Income">Income</option>
                                        <option value="Expense">Expense</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td><label htmlFor="category">Select category: </label></td>
                                <td>
                                    <select className="selectBox" name="category" id="category" value={props.newCategory} onChange={(e) => props.setNewCategory(e.target.value)}>
                                        <option value="Food">Food</option>
                                        <option value="Bill">Bill</option>
                                        <option value="Income">Salary</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td><label htmlFor="amount_input">Enter amount: </label></td>
                                <td>
                                    <input type="number" id="amount_input" step="0.01" min="0" placeholder="Enter amount" value={props.newAmount} onChange={(e) => props.setNewAmount(Number(e.target.value))} required />
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td><label htmlFor="desc_input">Description: </label></td>
                                <td>
                                    <input type="text" id="desc_input" value={props.newDesc} onChange={(e) => props.setNewDesc(e.target.value)}/>
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td colSpan={2}><button type="button" onClick={props.enterNewTrns}>Add new records</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </>
    );
}

export default MainContentNewTransactions
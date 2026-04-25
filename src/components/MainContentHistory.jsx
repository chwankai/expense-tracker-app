function MainContentHistory({transaction, deleteTrns}){
    return(
        <>
            <div className="history">
                <h2>Recent Transaction</h2>
                <table>
                    <thead>
                        <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Description</th>
                        <th>Del</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transaction.length === 0 ? (
                        <tr>
                            <td colSpan="6">No transaction found.</td>
                        </tr>
                        ) : (
                        transaction.map(item => (
                            <tr key={item.id} className={item.type}>
                            <td>{item.date}</td>
                            <td>{item.type}</td>
                            <td>{item.category}</td>
                            <td>{Number(item.amount).toFixed(2)}</td>
                            <td>{item.desc}</td>
                            <td><button style={{border:"none",background:"none"}} onClick={() => deleteTrns(item.id)}><img src="./src/assets/images/delete.png" alt="delete-icon" style={{width:"20px"}}/></button></td>
                            </tr>
                        ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default MainContentHistory
import styles from "./style/History.module.css"
import Transaction from "./Transaction";

function History(props: any) {
    const transList = props.transList;
    return (
        <>
        <div className="container">
            <div className={styles.title}>History</div>
            {transList.map((trans) => (
                <Transaction
                key={trans.id}
                text={trans.text}
                amount={trans.amount}
                >
                </Transaction>
            ))}
        </div>
        </>
    );
}

export default History;

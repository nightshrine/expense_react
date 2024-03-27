import styles from "./style/Transaction.module.css"

function Transaction(props: any) {
    const {text, amount} = props;

    const isIncome = ():boolean => {
        return amount >= 0;
    }

    return (
        <>
        <div className={`
        ${styles.trans} 
        ${ 
            isIncome() ? styles.income : styles.expense
        }`}>
            <p className={styles.text}>
                {text}
            </p>
            <p className={styles.amount}>
                {amount}
            </p>
        </div>
        </>
    )
}

export default Transaction;
import styles from './style/Balance.module.css';

function Balance(props: any) {
    const {income, expense} = props;

    const getYourBalance = (): number => {
        return income - expense;
    }

    return (
        <>
            <div className="container">
                <div className={styles.yourBalance}>
                    <p className={styles.title}>YOUR BALANCE</p>
                    <h2 className={styles.balance}>{getYourBalance()}円</h2>
                </div>
                <div className={styles.paper}>
                    <div className={styles.income}>
                        <h4>INCOME</h4>
                        <h4 className={styles.incomeText}>
                            {income}円
                        </h4>
                    </div>
                    <div className={styles.expense}>
                        <h4>EXPENSE</h4>
                        <h4 className={styles.expenseText}>
                            {expense}円
                        </h4>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Balance;

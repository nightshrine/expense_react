import { useState } from "react";
import styles from './style/AddTransaction.module.css'


function AddTransaction(props: any) {
    const addTrans = props.addTrans;
    const [text, setText] = useState<string>("");
    const [amount, setAmount] = useState<number>(0);

    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const onChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const amount: number = parseInt(e.target.value);
        setAmount(amount);
    }

    return (
        <>
        <div className="container">
            <div className={styles.title}>Add new transaction</div>
            <label>
                <p>Text</p>
                <input 
                className={styles.textInput}
                onChange={onChangeText}
                placeholder="Enter text..."
                ></input>
            </label>
            <label>
                <p>Amount</p>
                <input 
                type="number"
                className={styles.amountInput}
                onChange={onChangeAmount}
                placeholder="Enter amount..."
                ></input>
            </label>
            <button className={styles.addTransButton} onClick={() => addTrans(text, amount)}>
                Add transaction
            </button>
        </div>
        </>
    );
}

export default AddTransaction;

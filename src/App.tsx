import { useEffect, useState } from "react";
import styles from "./style/App.module.css";
import Balance from "./Balance";
import History from "./History";
import AddTransaction from './AddTransacion';

interface ITrans {
    id: number;
    text: string;
    amount: number;
}

function App() {
    const [income, setIncome] = useState<number>(0);
    const [expense, setExpense] = useState<number>(0);
    const [transList, setTransList] = useState<ITrans[]>([]);

    useEffect(()=>{
        const localTransList = localStorage.getItem("transList");
        if (!localTransList) return 
        const firstTransList = JSON.parse(localTransList)
        let firstIncome = 0;
        let firstExpense = 0;
        firstTransList.forEach((trans) => {
            if (trans.amount >= 0) {
                firstIncome += trans.amount;
            } else {
                firstExpense -= trans.amount
            }
        })
        setIncome(firstIncome);
        setExpense(firstExpense);
        setTransList(firstTransList);
    }, []);

    const makeNewId = (): number => {
        if (transList .length === 0) return 1;
        return transList[transList.length - 1].amount + 1;
    }

    const addTrans = (text: string, amount: number) => {
        if (!text || !amount) {
            alert("値を入力してください")
            return ;
        }
        const newId = makeNewId();
        const newTrans: ITrans = {
            id: newId,
            text: text,
            amount: amount,
        };
        if (amount >= 0){
            setIncome(income + amount);
        } else {
            setExpense(expense + amount);
        }
        const newTransList = [...transList, newTrans];
        setTransList(newTransList);
        localStorage.setItem("transList", JSON.stringify(newTransList));
    }


    return (
        <>
            <div className={styles.app}>
                <div className={styles.title}>Expense Tracker</div>
                <Balance
                income={income}
                expense={expense}
                ></Balance>
                <History
                transList={transList}
                ></History>
                <AddTransaction
                addTrans={addTrans}
                ></AddTransaction>
            </div>
        </>
    );
}

export default App;

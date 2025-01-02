import  path from 'path';
import  readline from 'readline';
import  fs from 'fs';


const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})
let atm = JSON.parse(fs.readFileSync('atm.json', 'utf8'));

const saveData = () => {
    fs.writeFileSync('atm.json', JSON.stringify(atm));
};
const showOption = () =>{
    console.log('\n1 : Change Pin\n2 : Check Acoount Balance\n3 : Withdraw\n4 : Credit Money\n5 : Exit');
    r1.question("\nEnter The Option No , What You Want to do : ",handleInput);
}
 const handleInput = (option) =>{
    if (option === "1"){
        changePin();   
    }
    else if (option === "2"){
        account_balance();
    }
    else if (option === "3"){
        withdraw ();
    }
    else if (option === "4"){
        credit_money();
    }
    else if(option === "5"){
        console.log("Thank You Mr/Mrs....")
        r1.close();
    }
    else{
        console.log("Please Enter The Valid Number ..")
        showOption();
    }
 }


const changePin = () => {
    r1.question("\nEnter Your Account No: ", (accountNo) => {
        r1.question("\nEnter Your Current Password: ", (password) => {
            const account = atm.find((acc) => acc.acc_no === accountNo);

            if (account && account.password === password) {
                r1.question("\nEnter Your New PIN: ", (newPin) => {
                    account.password = newPin;
                    saveData();
                    console.log("\nPIN successfully changed!");
                    showOption();
                });
            } else {
                console.log("\nInvalid account number or password.");
                showOption();
            }
        });
    });
};

const account_balance = () => {
    r1.question("\nEnter Your Account No: ", (accountNo) => {
        const account = atm.find((acc) => acc.acc_no === accountNo);

        if(account){
            console.log(`Account Balance is ${account.balance}`)
        }
        else{
            console.log(`Invalid Account No`)
            showOption();
        }        
    });
};

const withdraw = () => {
    r1.question("\nEnter Your Account No: ", (accountNo) => {
        r1.question("\nEnter Amount to Withdraw: ", (amount) => {
            const account = atm.find((acc) => acc.acc_no === accountNo);

            if (account) {
                if (parseFloat(account.balance) >= parseFloat(amount)) {
                    account.balance = (parseFloat(account.balance) - parseFloat(amount)).toString();
                    saveData();
                    console.log(`\nWithdrawal successful! Your new balance is: ${account.balance}`);
                } else {
                    console.log("\nInsufficient funds.");
                }
            } else {
                console.log("\nAccount not found.");
            }
            showOption();
        });
    });
};

const credit_money = () => {
    r1.question("\nEnter Your Account No: ", (accountNo) => {
        r1.question("\nEnter Amount to Credit: ", (amount) => {
            const account = atm.find((acc) => acc.acc_no === accountNo);

            if (account) {
                account.balance = (parseFloat(account.balance) + parseFloat(amount)).toString();
                saveData();
                console.log(`\nMoney credited successfully! Your new balance is: ${account.balance}`);
            } else {
                console.log("\nAccount not found.");
            }
            showOption();
        });
    });
};

console.log("Welcome To Our ATM and Depositor Machiene..")
showOption();
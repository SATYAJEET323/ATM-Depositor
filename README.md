# Node.js ATM Application 💳

This project is a Node.js Command Line Interface (CLI) application simulating basic ATM operations, including PIN changes, account balance checks, withdrawals, and crediting money. It reads and writes account data from a JSON file for persistence.

---

## Features ✨

1. 🔑 **Change PIN**: Update the PIN of your account securely.
2. 💰 **Check Account Balance**: View the current balance of your account.
3. 💸 **Withdraw Money**: Withdraw a specified amount from your account.
4. 📥 **Credit Money**: Add money to your account balance.
5. 🚪 **Exit**: Exit the application gracefully.

---

## Prerequisites 🛠️

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or later)
- npm (comes with Node.js)

---

## Setup Instructions 📦

1. Clone this repository or save the code to a file named `atm.js`.

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Prepare the required JSON file (`atm.json`) for account data. Create a file named `atm.json` in the same directory with the following sample structure:

   ```json
   [
       {
           "acc_no": "12345",
           "password": "1234",
           "balance": "1000"
       },
       {
           "acc_no": "67890",
           "password": "5678",
           "balance": "500"
       }
   ]
   ```

3. Run the application using Node.js:

   ```bash
   node atm.js
   ```

---

## How to Use 🧑‍💻

1. Start the application and follow the menu options.
   - **Option 1**: Enter your account number and current PIN to set a new PIN.
   - **Option 2**: Enter your account number to check the balance.
   - **Option 3**: Enter your account number and the amount to withdraw.
   - **Option 4**: Enter your account number and the amount to credit to your balance.
   - **Option 5**: Exit the application.

### Example Interaction 🗨️

```text
Welcome To Our ATM and Depositor Machine..

1 : Change Pin
2 : Check Account Balance
3 : Withdraw
4 : Credit Money
5 : Exit
Enter The Option No , What You Want to do : 1

Enter Your Account No: 12345
Enter Your Current Password: 1234
Enter Your New PIN: 4321

PIN successfully changed!
```

---

## Code Overview 🔍

The application uses the following modules and concepts:

1. **Built-in Modules**:
   - `readline`: For capturing user input interactively.
   - `fs`: For reading and writing data to the JSON file.

2. **Functions**:
   - `changePin`: Handles PIN update functionality.
   - `account_balance`: Retrieves and displays the account balance.
   - `withdraw`: Deducts a specified amount from the account balance.
   - `credit_money`: Adds a specified amount to the account balance.
   - `saveData`: Writes the updated account data back to the JSON file.

3. **Persistent Data**: Account information is stored in `atm.json` for persistence between application runs.

---

## Navigation Ideas for Implementation 🧭

To enhance the system further, consider implementing:

1. **Transaction History**: Store and display a log of all transactions (withdrawals, credits, etc.).
2. **Multi-User Support**: Allow multiple accounts to interact concurrently.
3. **Input Validation**: Ensure inputs are properly formatted (e.g., numeric values for account numbers and balances).
4. **Account Locking**: Lock accounts after a certain number of failed PIN attempts.
5. **Language Support**: Provide multi-language support for a wider audience.
6. **Interest Calculation**: Add periodic interest for savings accounts.
7. **UI Improvements**: Enhance the CLI with color-coded output and formatted tables for better readability.

---

## Potential Improvements 🚀

- Implement better error handling for invalid inputs and JSON parsing.
- Encrypt sensitive data like PINs for security.
- Introduce a GUI version of the application.
- Add a mobile or web interface.

---

## License 📄

This project is open-source.

---

## Author 🖋️

Developed by SATYAJEET DESAi. Contributions and suggestions are welcome!


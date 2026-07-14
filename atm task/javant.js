let pin ="2534";
let balance =1500;
let attempts = 0;
 while(attempts<3){
    let userpin=prompt("enter your pin");
    if(userpin==pin){
        let choice=prompt(
            "1. Check Balance\n2. Withdraw\n3. Deposit\n4. Change Pin\n5. Exit"
        )
        if(choice=="1"){
            alert("your balance is:"+balance);
        }
        else if(choice=="2"){
            let amount=Number(prompt("enter amount to withdraw"));
            if(amount>balance){
                alert("insufficient balance");
            }
            else{
                balance-=amount;
                alert("withdrawal successful. your new balance is:"+balance);
            }
        }
        else if(choice=="3"){
            let amount=Number(prompt("enter amount to deposit"));
            balance+=amount;
            alert("deposit successful. your new balance is:"+balance);
        }
        else if(choice=="4"){
            let newpin=prompt("enter new pin");
            pin=newpin;
            alert("pin changed successfuly");
        }
        else if(choice=="5"){
            alert("thank you for using our service");
            break;
        }
    }
    else{
        attempts++;
        alert("incorrect pin");
        if(attempts===3){
            alert("you have exceeded maximum attempts");
        }
    }
 }
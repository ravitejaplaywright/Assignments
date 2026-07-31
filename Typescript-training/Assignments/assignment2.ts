
//Create common function and then based on below details, print whether user is eligible to get the loan
//or not

//customerName = "John Doe";
//creditScore = 720;
//income = 55000.0;
//isEmployed = true;
//debtToIncomeRatio = 35.0;


function checkloan ( name : string, creditscore:number , income:number , isemployed:boolean, dti:number){

     if (creditscore > 750)
     {
        console.log(` ${name} : Loan Approved`)
     }
    else if (creditscore <650)
    {
        console.log (` ${name} : Loan Denied`)
    }
    else 
    {
        if (income >= 50000)
        {
          if (isemployed)
          {
            if (dti<40)
            {
                console.log(` ${name} : Loan Approved`)
            }
            else 
            {
                console.log (` ${name} : Loan Denied`)
            }
          }
          else 
          {
            console.log (` ${name} : Loan Denied`)
          }
        }
        else
        {
            console.log (` ${name} : Loan Denied`)
        }
    }


}

checkloan("John Doe" , 720 ,55000.0 ,true,35.0); 







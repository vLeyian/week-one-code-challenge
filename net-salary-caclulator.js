// Get the input values from the user
const basicSalary = parseFloat(prompt("Enter your basic salary: "));
const benefits = parseFloat(prompt("Enter your benefits: "));

// Define constants for tax rates and deduction percentages
const TAX_RATE_1 = 0.1;
const TAX_RATE_2 = 0.25;
const TAX_RATE_3 = 0.3;
const NSSF_PERCENTAGE = 0.06;

// Calculate the gross salary
const grossSalary = basicSalary + benefits;

// Calculate the tax based on the gross salary
let tax = 0;
if (grossSalary <= 24000) {
  tax = grossSalary * TAX_RATE_1;
} else if (grossSalary <= 32333) {
  tax = 2400 + (grossSalary - 24000) * TAX_RATE_2;
} else if (grossSalary > 32333) {
  tax = 4483.25 + (grossSalary - 32333) * TAX_RATE_3;
} else {
  tax = 0
}

// Calculate the NHIF deduction
function NhifDeduction(basic){
    if(basic<=5999){
        deduction1=150
    }
    else if(basic>=6000 && basic<=7999){
    deduction1=300
    }
    else if(basic>=8000 && basic<=11999){
        deduction1=400
    }
    else if(basic>=12000 && basic<=14999){
        deduction1=500
    }
    else if(basic>=15000 && basic<=19999){
        deduction1=600
    }
    else if(basic>=20000 && basic<=24999){
        deduction1=750
    }
    else if(basic>=25000 && basic<=29999){
        deduction1=850
    }
    else if(basic>=30000 && basic<=34999){
        deduction1= 900
    }
    else if(basic>=35000 && basic<=39999){
        deduction1=950
    }
    else if(basic>=40000 && basic<=44999){
        deduction1=1000
    }
    else if(basic>=45000 && basic<=49999){
        deduction1=1100
    }
    else if(basic>=50000 && basic<=59999){
        deduction1=1200
    }
    else if(basic>=60000 && basic<=69999){
        deduction1=1300
    }
    else if(basic>=70000 && basic<=79999){
        deduction1=1400
    }
    else if(basic>=80000 && basic<=89999){
        deduction1=1500
    }
    else if(basic>=90000 && basic<=99999){
        deduction1=1600
    }
    else if(basic>=100000){
    deduction1=1700
    }
    else{
        return "The value enetred is invalid"
    }
    return deduction1;
    }
let nhifDeduction =NhifDeduction(grossSalary)

// Calculate the NSSF deduction
const nssfDeduction = grossSalary * NSSF_PERCENTAGE;

// Calculate the net salary
const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;

// Print out the results
console.log(`Gross Salary: ${grossSalary}`);
console.log(`Payee (Tax): ${tax}`);
console.log(`NHIF Deduction: ${nhifDeduction}`);
console.log(`NSSF Deduction: ${nssfDeduction}`);
console.log(`Net Salary: ${netSalary}`);
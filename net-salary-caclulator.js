const basicPay = document.querySelector(".basePay");
const benefits = document.querySelector(".benefits");
const calcBtn = document.querySelector(".calcBtn");

var monthlySalary = 0;
var monthlyBenefits = 0;

//globla variables
let NHIF = 0;
let PAYE = 0;
let NSSF = 0;
let MONTHLYNET = 0;
let MONTHLYGROSS = 0;
let ANNUALNET = 0;
let ANNUALGROSS = 0;
let TOTALMONTHLYDEDUCTIONS = 0;

calcBtn.addEventListener("click", () => {
  monthlySalary = parseInt(basicPay.value, 10);
  monthlyBenefits = parseInt(benefits.value, 10);

  //SET VARIABLES TO BE USED BY THE FUNCTIONS TO PERFORM VARIOUS CALCULATIONS
  MONTHLYGROSS = monthlySalary + monthlyBenefits;
  ANNUALGROSS = MONTHLYGROSS * 12;
  PAYE = calculatePaye(ANNUALGROSS);
  NHIF = calculateNHIF(MONTHLYGROSS);
  NSSF = calculateNSSF(MONTHLYGROSS);

  TOTALMONTHLYDEDUCTIONS = totalDeductions(PAYE / 12, NHIF, NSSF);
  MONTHLYNET = MONTHLYGROSS - TOTALMONTHLYDEDUCTIONS;

  ANNUALNET = MONTHLYNET * 12;

  alert(
    "Your Monthly PAYE is : " +
      PAYE / 12 +
      "\n" +
      "Your Monthly NHIF pay is : " +
      NHIF +
      "\n" +
      "Your Monthly NSSF Pay is : " +
      NSSF +
      "\n" +
      "Your Monthly Gross is :  " +
      MONTHLYGROSS +
      "\n" +
      "Your Monthly Net is : " +
      MONTHLYNET +
      "\n" +
      "Your annual gross is  : " +
      ANNUALGROSS +
      "\n" +
      "Your annual net is : " +
      ANNUALNET
  );
});

//Calculate Paye function
const calculatePaye = (annualPay) => {
  if (annualPay <= 288000) {
    //tax rate is 10% 04 0.1
    return annualPay * 0.1;
  } else if (annualPay > 288000 && annualPay <= 388000) {
    //tax rate is 25% 0r 0.25
    return annualPay * 0.25;
  } else if (annualPay > 388000) {
    //tax rate is 30% 0r 0.3
    return annualPay * 0.3;
  } else {
  }
};



//calculate the NHIF
const calculateNHIF = (montlyGrossPay) =>
  montlyGrossPay <= 5999
    ? 150
    : montlyGrossPay >= 6000 && montlyGrossPay <= 7999
    ? 300
    : montlyGrossPay >= 8000 && montlyGrossPay <= 11999
    ? 400
    : montlyGrossPay >= 12000 && montlyGrossPay <= 14999
    ? 500
    : montlyGrossPay >= 15000 && montlyGrossPay <= 19999
    ? 600
    : montlyGrossPay >= 20000 && montlyGrossPay <= 24999
    ? 750
    : montlyGrossPay >= 25000 && montlyGrossPay < 29999
    ? 850
    : montlyGrossPay >= 30000 && montlyGrossPay <= 34999
    ? 900
    : montlyGrossPay >= 35000 && montlyGrossPay <= 39999
    ? 950
    : montlyGrossPay >= 40000 && montlyGrossPay <= 44999
    ? 1000
    : montlyGrossPay >= 45000 && montlyGrossPay <= 49999
    ? 1100
    : montlyGrossPay >= 50000 && montlyGrossPay <= 59999
    ? 1200
    : montlyGrossPay >= 60000 && montlyGrossPay <= 69999
    ? 1300
    : montlyGrossPay >= 70000 && montlyGrossPay <= 79999
    ? 1400
    : montlyGrossPay >= 80000 && montlyGrossPay <= 89999
    ? 1500
    : montlyGrossPay >= 90000 && montlyGrossPay <= 99999
    ? 1600
    : montlyGrossPay >= 100000
    ? 1700
    : "";



//calculate the NSSF pay according to tier 1 (up to 6000))
//and tier 2 (up to 18000)

const calculateNSSF = (monthlygross) => {
  let payableNssf = monthlygross * 0.06;

  if (payableNssf <= 6000) {
    //maximum pay is up to 6000
    return payableNssf;
  }
  if (payableNssf > 6000 && payableNssf <= 18000) {
    //tier 2
    //maximu pay is 18000
    return payableNssf;
  } else {
    //payableNssf returned a value greater than 18000
    //hence, return payableNssf value as 18000 since it's maximum

    payableNssf = 18000;

    return payableNssf;
  }
};



//calculate total deductions
const totalDeductions = (paye, nhif, nssf) => {
  return paye + nhif + nssf;
};
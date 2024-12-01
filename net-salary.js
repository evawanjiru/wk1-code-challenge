function calculatePAYE(grossSalary) {
    let payee = 0;

    if (grossSalary <= 24000) {
        payee = grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
        payee = 24000 * 0.10 + (grossSalary - 24000) * 0.25;
    } else if (grossSalary <= 500000) {
        payee = 24000 * 0.10 + (32333 - 24000) * 0.25 + (grossSalary - 32333) * 0.30;
    } else if (grossSalary <= 800000) {
        payee = 24000 * 0.10 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (grossSalary - 500000) * 0.325;
    } else {
        payee = 24000 * 0.10 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (800000 - 500000) * 0.325 + (grossSalary - 800000) * 0.35;
    }

    return payee;
}

function calculateNhif(grossSalary) {
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary <= 44999) return 1000;
    if (grossSalary <= 49999) return 1100;
    if (grossSalary <= 59999) return 1200;
    if (grossSalary <= 69999) return 1300;
    if (grossSalary <= 79999) return 1400;
    if (grossSalary <= 89999) return 1500;
    if (grossSalary <= 99999) return 1600;
    return 1700;
}

function calculateNssf(grossSalary) {
    const lowerEarningsLimit = 7000; 
    const upperEarningsLimit = 36000; 
  
    let tier1Employee = 0;
    let tier2Employee = 0;
  
    if (grossSalary <= lowerEarningsLimit) {
      // Only Tier I contributions apply
      tier1Employee = grossSalary * 0.06;
    } else if (grossSalary <= upperEarningsLimit) {
      // Both Tier I and Tier II contributions apply
      tier1Employee = lowerEarningsLimit * 0.06;
      tier2Employee = (grossSalary - lowerEarningsLimit) * 0.06;
    } else {
      // Contributions at upperEarningsLimit
      tier1Employee = lowerEarningsLimit * 0.06;
      tier2Employee = (upperEarningsLimit - lowerEarningsLimit) * 0.06;
    }
  
    return tier1Employee + tier2Employee;
  }
  


function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits
    const payee = calculatePAYE(grossSalary)
    const nhif = calculateNhif(grossSalary)
    const nssf = calculateNssf(grossSalary)
    const netSalary = grossSalary - payee - nhif - nssf  

    console.log(payee, nhif, nssf)
    return netSalary

}

console.log(calculateNetSalary(50000, 20000))
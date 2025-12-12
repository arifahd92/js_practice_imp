/**
 * TaxStrategy Interface
 * -----------------------
 * All tax strategies must implement this interface.
 * This ensures the CalculateTax class depends on an abstraction (DIP).
 */
interface TaxStrategy {
  calculate(amount: number): number;
}

/**
 * Concrete Strategy: India Tax Calculation
 * -----------------------------------------
 * Implements its own logic for calculating tax.
 */
class IndiaTaxStrategy implements TaxStrategy {
  calculate(amount: number): number {
    return amount * 0.4; // 40% tax
  }
}

/**
 * Concrete Strategy: USA Tax Calculation
 * ---------------------------------------
 * Implements its own tax calculation logic.
 */
class UsaTaxStrategy implements TaxStrategy {
  calculate(amount: number): number {
    return amount * 0.35; // 35% tax
  }
}

/**
 * Concrete Strategy: UK Tax Calculation
 * --------------------------------------
 * Implements UK tax calculation logic.
 */
class UkTaxStrategy implements TaxStrategy {
  // low level module
  calculate(amount: number): number {
    return amount * 0.4; // 40% tax
  }
}

/**
 * Context Class: CalculateTax
 * ----------------------------
 * This class does NOT know how tax is calculated.
 * It only delegates the calculation to the strategy passed.
 * Applying SOLID:
 * - OCP: Add new tax strategies without modifying this class.
 * - DIP: Depends on abstraction (TaxStrategy), not concrete classes.
 */
class TaxCalculator {
  // high level module, depends on abstraction/interface not on concrete class/low level module
  constructor(private strategy: TaxStrategy) {} // this line is DIP,

  /**
   * Performs tax calculation using the injected strategy.
   */
  calculate(amount: number): number {
    return this.strategy.calculate(amount);
  }
}

/**
 * Usage Example
 * ---------------
 * We pass IndiaTaxStrategy to TaxCalculator.
 * We can easily swap strategies without modifying TaxCalculator.
 */
const indianTaxCalculator = new TaxCalculator(new IndiaTaxStrategy());
console.log(indianTaxCalculator.calculate(1000)); // Output: 400
/*

# 🎯 **What SOLID principles this demonstrates**

### **1. O — Open/Closed Principle**

Add new tax rules without touching existing code — create a new `TaxStrategy` class.

### **2. D — Dependency Inversion Principle**

`TaxCalculator` depends on `TaxStrategy` (interface), not concrete tax classes.

### **3. L — Liskov Substitution Principle**

Any new strategy can replace another without breaking functionality.

### **4. S — Single Responsibility**

Each class has one job:

* TaxCalculator → delegates tax calculation
* Strategy classes → hold tax logic



If you want, I can also show the **Functional Programming version** of Strategy Pattern.*/

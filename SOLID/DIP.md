if i have a function that is calling multiple methods in a specific orders and they are doing some task then this method is high level and those are low level? yes

function processOrder() {
const items = getItemsFromCart(); // low-level
const total = calculateTotal(items); // low-level
const tax = calculateTax(total); // low-level
makePayment(total + tax); // low-level
}

✔ HIGH-LEVEL
processOrder()
Because it:

decides what steps happen

in what order

represents a business action (“process order”)

✔ LOW-LEVEL
getItemsFromCart(), calculateTotal(), calculateTax(), makePayment()

Because they:

do small, specific tasks

contain implementation details

can be modified/replaced without changing business flow

// DIP

🎯 Dependency Inversion Principle (DIP) — Simple Definition

High-level modules should not depend on low-level modules.
Both should depend on abstractions (interfaces).
And abstractions should not depend on details — details should depend on abstractions.

🧠 Put in very simple English
✔ High-level code (big business logic)

should not depend on
small implementation classes.

✔ Instead, both should depend on an interface.
✔ The interface defines what must exist,

and the low-level implementation defines how it works.

🛠 A super simple sentence
DIP = Depend on INTERFACE, not on CLASS.

SEE ocp-dip.ts

const users = [
  { name: "John Doe", department: "Engineering", salary: 80000 },
  { name: "Jane Smith", department: "Marketing", salary: 65000 },
  { name: "Alice Brown", department: "Human Resources", salary: 70000 },
  { name: "Bob Johnson", department: "Sales", salary: 75000 },
  { name: "Charlie Davis", department: "Engineering", salary: 85000 },
  { name: "David Lee", department: "Marketing", salary: 68000 },
  { name: "Eve White", department: "Engineering", salary: 90000 },
  { name: "Frank Green", department: "Sales", salary: 78000 },
  { name: "Grace Hall", department: "Human Resources", salary: 72000 },
  { name: "Hannah King", department: "Sales", salary: 77000 },
];
const map = new Map();
for (const user of users) {
  if (!map.has(user.department)) {
    map.set(user.department, user);
  }else{
    if(user.salary>map.get(user.department).salary){
        map.set(user.department, user)
    }
  }
 
}
console.log([...map.values()])

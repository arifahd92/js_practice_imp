const patients = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Brown" },
];
// one patient has many appointment
const appointments = [
  { appt_id: 102, patient_id: 2, doctor: "Dr. B", time: "11:00 AM" },
  { appt_id: 101, patient_id: 1, doctor: "Dr. A", time: "10:00 AM" },
  { appt_id: 104, patient_id: 1, doctor: "Dr. D", time: "09:00 AM" },
  { appt_id: 103, patient_id: 1, doctor: "Dr. C", time: "12:00 PM" },
];
//imp trick
//duplicate patientid are there in appointments group them
// common is patient id, try to make patient id as key
const map = new Map();
for (const appointment of appointments) {
  const { patient_id } = appointment;
  if (map.has(patient_id)) {
    map.get(patient_id).push(appointment);
  } else {
    map.set(patient_id, [{ ...appointment }]);
  }
}
// console.log(map);
const patientWithTheirAppintment = [];
for (const patient of patients) {
  const { id } = patient;
  patientWithTheirAppintment.push({
    ...patient,
    appointment: map.get(id) ?? [],
   
  });
}
console.dir(patientWithTheirAppintment, { depth: null });

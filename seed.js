const bills = [];

const seed1 = {
    name: "Brian",
    address: "123 Fake Street",
    hospital: "Memorial Sloan Kettering",
    date: new Date("2015-12-17T01:23:45"),
    amount: 100,
}
bills.push(seed1);

const seed2 = {
    name: "Lambert",
    address: "456 Fake Street",
    hospital: "Mayo Clinic",
    date: new Date("2020-01-02T03:04:05"),
    amount: 200,
}
bills.push(seed2);

export default bills;
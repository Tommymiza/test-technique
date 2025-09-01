type User = { name: string; dob: string };

const users: User[] = [
  { name: "Alice", dob: "2000-02-29" },
  { name: "Bob", dob: "1990-12-31" },
  { name: "Charlie", dob: "2005-08-28" },
];

// filter function to get adults only
const isAdult = (date: string) => {
  const differenceInMilliseconds = (date1: Date, date2: Date) => {
    return date1.getTime() - date2.getTime();
  };
  const limiteAdulteMilliseconds = 18 * 365.25 * 24 * 60 * 60 * 1000;

  const today = new Date();
  return (
    differenceInMilliseconds(today, new Date(date)) >= limiteAdulteMilliseconds
  );
};

// get adults from users
const getAdults = (users: User[]) => {
  const adults = users.filter((user) => isAdult(user.dob));

  return adults;
};

console.log(getAdults(users));

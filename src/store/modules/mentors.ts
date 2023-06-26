import { Mentors } from "../models/mentors";

let initialData: Mentors[] = [];

initialData = [
  {
    name: "멘토1",
    career: 1,
    comment: "bla bla bla1 bla bla bla1 bla bla bla1",
  },
  {
    name: "멘토2",
    career: 2,
    comment: "bla bla bla2 bla bla bla2 bla bla bla2",
  },
  {
    name: "멘토3",
    career: 3,
    comment: "bla bla bla3 bla bla bla3 bla bla bla3",
  },
  {
    name: "멘토4",
    career: 4,
    comment: "bla bla bla4 bla bla bla4 bla bla bla4",
  },
];
const initState = { data: initialData };

export default function mentorsData(state = initState, action: any) {
  return state;
}

import { atom, selector } from "recoil";

export interface ITodo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE";
}
export const toDoState = atom<ITodo[]>({
  key: "toDo",
  default: [],
});
export const categoryState = atom({
  key: "catogory",
  default: "TO_DO",
});

export const toDoSelector = selector({
  key: "toDoSelctor",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter(toDo => toDo.category === category);
  },
});

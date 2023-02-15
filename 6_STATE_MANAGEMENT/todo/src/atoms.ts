import { atom, selector } from "recoil";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}
export interface ITodo {
  text: string;
  id: number;
  category: Categories;
}
export const toDoState = atom<ITodo[]>({
  key: "toDo",
  default: [],
});
export const categoryState = atom({
  key: "catogory",
  default: Categories.TO_DO,
});

export const toDoSelector = selector({
  key: "toDoSelctor",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter(toDo => toDo.category === category);
  },
});

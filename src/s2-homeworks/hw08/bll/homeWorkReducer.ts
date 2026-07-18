import { UserType } from "../HW8";

export type ActionType =
  | {
      type: "sort";
      payload: "up" | "down";
    }
  | {
      type: "check";
      payload: number;
    };

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType,
): UserType[] => {
  switch (action.type) {
    case "sort": {
      const sortedPeople = [...state].sort((a, b) =>
        a.name.localeCompare(b.name, "ru"),
      );

      return action.payload === "up" ? sortedPeople : sortedPeople.reverse();
    }

    case "check": {
      return state.filter((person) => person.age >= action.payload);
    }

    default:
      return state;
  }
};

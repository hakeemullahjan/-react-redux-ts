import { ActionType } from "../action-types/index";

interface DespositAction {
  type: ActionType.DEPOSIT;
  payload: number;
}

interface WithdrawAction {
  type: ActionType.WITHDRAW;
  payload: number;
}

interface BankruptAction {
  type: ActionType.BANKRUPT;
}

export type Action = DespositAction | WithdrawAction | BankruptAction;

// type Action = {
//   type: string;
//   payload?: number;
// };

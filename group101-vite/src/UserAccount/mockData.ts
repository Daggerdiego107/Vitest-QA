import type { IUserAccount } from "./userAccount";

export const mockUser: IUserAccount = {
    id: 1,
    name: "John Doe",
    isManager: false
};

export const mockAdmin: IUserAccount = {
    id: 2,
    name: "Jane Smith",
    isManager: true
};
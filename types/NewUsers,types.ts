export type ExistingUserStructure = {
  username: string;
  fullName: string;
  email: string;
  password: string;
  repeatedPassword: string;
  level: string;
  phoneNumber: number;
  bio: string;
  department: string;
};

export type NewUserStructure = Omit<ExistingUserStructure, "bio" | "phoneNumber">;
export type UpdateUserStructure = Omit<
  ExistingUserStructure,
  "username" | "email" | "level" | "password" | "repeatedPassword"
>;

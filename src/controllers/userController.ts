import { Request, Response } from "express";
import {
  createUserService,
  deleteById,
  getUserById,
  getUsers,
} from "../services/userService";

export interface IUser {
  fullName: string;
  email: string;
  phoneNumber: string;
}

export const createUser = async (req: Request, res: Response) => {
  try {
    const userData: IUser = req.body;
    const newUser = await createUserService(userData);
    res.status(201).json({
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.status(200).json({ data: users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

export const getUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const user = await getUserById(userId);
    if (!user)
      return res.status(400).json({
        message: "Invalid user data",
      });
    res.status(200).json({ data: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const deletedUser = await deleteById(userId);
    if (!deletedUser)
      return res.status(400).json({
        message: "Invalid user",
      });
    res.status(200).json({
      message: "User deleted successfully",
      data: deletedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

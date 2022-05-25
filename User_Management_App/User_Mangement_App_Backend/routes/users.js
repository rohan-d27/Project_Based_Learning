import express from "express";
import { getUsers, createUser, getUser, deleteUser, updateUser } from "../controller/users.js";

const router = express.Router();
router.get("/users", getUsers);
router.post("/user", createUser);
router.get("/user/:id", getUser);
router.delete("/user/:id", deleteUser);
router.put("/user/:id", updateUser);

export default router;

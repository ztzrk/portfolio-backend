import { Request, Response } from "express";
import Message from "../models/message";

export const submitMessage = async (req: Request, res: Response) => {
    try {
        const { name, email, message } = req.body;
        const newMessage = new Message({ name, email, message });
        await newMessage.save();
        res.status(201).json({
            message: "Message submitted successfully",
            data: newMessage,
        });
    } catch (error) {
        res.status(500).json({ message: "Error submitting message", error });
    }
};

export const getMessages = async (req: Request, res: Response) => {
    try {
        const messages = await Message.find();
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: "Error fetching messages", error });
    }
};

export const coba = async (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: "coba" });
    } catch (error) {
        res.status(500).json({ message: "Error fetching messages", error });
    }
};

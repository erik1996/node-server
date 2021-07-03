import { Request, Response } from 'express';
import { ItemModel } from "../data/models/Item";

export async function getItemController(req: Request, res: Response) {
	const list = await ItemModel.find();
	res.send(list);
};

export async function insertItemController(req: Request, res: Response) {
	const newItem = new ItemModel(req.body);

	await newItem.save();
	res.send(newItem);
};

export async function removeItemController(req: Request, res: Response) {
	const id = req.params.id;

	const response = await ItemModel.findByIdAndDelete({ '_id': id });
	res.send(response);
}
import { model, Schema, Model, Document } from 'mongoose';

interface IItem extends Document {
  name: string;
}

const ItemSchema: Schema = new Schema({
  name: { type: String, required: true },
});

export const ItemModel: Model<IItem> = model('Item', ItemSchema);
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: Number, default: () => Math.floor(Date.now() / 1000) })
  createdAt: number;
}

export const UserSchema = SchemaFactory.createForClass(User);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {IsNotEmpty, IsEmail, IsOptional } from 'class-validator';


// Address Schema jise hm enquiry m use krenge 
@Schema()
export class Address {
  @Prop({ required: true })
  @IsNotEmpty({ message: "Street is required" })
  street: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: "City is required" })
  city: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: "State is required" })
  state: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: "Zip Code is required" })
  zipCode: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: "Country is required" })
  country: string;
}

// Generate schema for Address
export const AddressSchema = SchemaFactory.createForClass(Address);

// CreateEnquiry Schema
@Schema({ timestamps: true }) // Adds createdAt and updatedAt fields


export class CreateEnquiry {
  @Prop({ required: true })
  @IsNotEmpty({ message: "You have to provide your first name" })
  GFName: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: "You have to provide your last name" })
  GLName: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: "You have to provide your phone number" })
  GPhone: string;

  @Prop({ type: AddressSchema, required: true })
  @IsNotEmpty({ message: "You have to provide your address" })
  address: Address;

  @Prop({ required: true })
  @IsEmail()
  @IsNotEmpty({ message: "You have to provide your email" })
  Gemail: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: "You have to provide Student first name" })
  SFName: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: "You have to provide Student last name" })
  SLName: string;

  @Prop()
  @IsEmail()
  @IsOptional()
  Semail?: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: "Please provide the grade your child is studying in" })
  Grade: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: "Please provide the Date of birth of your child" })
  DOB: Date;

  @Prop({ required: true })
  @IsNotEmpty({ message: "Please provide the name of the current school of your child" })
  school: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: "Please provide the description" })
  description: string;

  @Prop({ required: true })
  @IsNotEmpty({ message: "Please specify the source of enquiry" })
  enquirySource: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop()
  updatedAt?: Date;
}


export const CreateEnquirySchema = SchemaFactory.createForClass(CreateEnquiry);




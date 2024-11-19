
import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";

class Address {
    @IsNotEmpty({ message: "Street is required" })
    street: string;

    @IsNotEmpty({ message: "City is required" })
    city: string;

    @IsNotEmpty({ message: "State is required" })
    state: string;

    @IsNotEmpty({ message: "Zip Code is required" })
    zipCode: string;

    @IsNotEmpty({ message: "Country is required" })
    country: string;
}

export class CreateEnquiry {
    @IsNotEmpty({ message: "You have to provide your first name" })
    GFName: string;

    @IsNotEmpty({ message: "You have to provide your last name" })
    GLName: string;

    @IsNotEmpty({ message: "You have to provide your phone number" })
    GPhone: string;

    @IsNotEmpty({ message: "You have to provide your address" })
    address: Address;

    @IsEmail()
    @IsNotEmpty({ message: "You have to provide your email" })
    Gemail: string;

    @IsNotEmpty({ message: "You have to provide Student first name" })
    SFName: string;

    @IsNotEmpty({ message: "You have to provide Student last name" })
    SLName: string;

    @IsEmail()
    @IsOptional()
    Semail?: string;

    @IsNotEmpty({ message: "Please provide the grade your child is studying in" })
    Grade: string;

    @IsNotEmpty({ message: "Please provide the Date of birth of your child" })
    DOB: Date;

    @IsNotEmpty({ message: "Please provide the name of the current school of your child" })
    school: string;

    @IsNotEmpty({ message: "Please provide the description" })
    description: string;

    @IsNotEmpty({ message: "Please specify the source of enquiry" })
    enquirySource: string;

    createdAt: Date;
    updatedAt?: Date;
}

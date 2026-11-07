
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

export class CreatePetSupplyDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsString()
  @IsNotEmpty()
  petCategory: string;

  @IsNumber()
  @Min(0.1)
  packageWeightKg: number;

  @IsString()
  @IsNotEmpty()
  brand: string;
}


import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

export class UpdatePetSupplyDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title?: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  price?: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  petCategory?: string;

  @IsOptional()
  @IsNumber()
  @Min(0.1)
  packageWeightKg?: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  brand?: string;
}

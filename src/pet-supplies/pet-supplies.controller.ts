
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePetSupplyDto } from './dto/create-pet-supply.dto';
import { UpdatePetSupplyDto } from './dto/update-pet-supply.dto';
import { PetSuppliesService } from './pet-supplies.service';
import type { PetSupplyEntity } from './pet-supplies.service';

@Controller('pet-supplies')
export class PetSuppliesController {
  constructor(private readonly petSuppliesService: PetSuppliesService) {}

  @Get()
  findAll(): PetSupplyEntity[] {
    return this.petSuppliesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): PetSupplyEntity {
    return this.petSuppliesService.findOne(id);
  }

  @Post()
  create(@Body() createDto: CreatePetSupplyDto): PetSupplyEntity {
    return this.petSuppliesService.create(createDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdatePetSupplyDto,
  ): PetSupplyEntity {
    return this.petSuppliesService.update(id, updateDto);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssetService } from './asset.service';
import { CreateAssetDto } from './dto/create-asset.dto';

@Controller('asset')
export class AssetController {
  constructor(private readonly assetService: AssetService) {}

  @Post()
  create(@Body() createAssetDto: CreateAssetDto) {
    return this.assetService.create(createAssetDto);
  }

  @Get()
  findAll() {
    return this.assetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assetService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assetService.remove(+id);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto';

@Injectable()
export class AssetService {
  create(createAssetDto: CreateAssetDto) {
    return 'This action adds a new asset';
  }

  findAll() {
    return `This action returns all asset`;
  }

  findOne(id: number) {
    return `This action returns a #${id} asset`;
  }


  remove(id: number) {
    return `This action removes a #${id} asset`;
  }
}

import { Module } from '@nestjs/common';
import { AssetService } from './asset.service';
import { AssetController } from './asset.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Asset, AssetScheme } from './Scheme/asset.Scheme';

@Module({
  imports: [MongooseModule.forFeature([{name: Asset.name, schema:AssetScheme}])],
  controllers: [AssetController],
  providers: [AssetService]
})
export class AssetModule {}

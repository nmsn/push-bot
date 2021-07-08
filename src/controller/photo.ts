import { Controller, Get, Inject, Provide } from '@midwayjs/decorator';
import { PhotoService } from '../service/photo';

@Provide()
@Controller('/photo')
export class PhotoController {
  @Inject()
  photoService: PhotoService;

  @Get('/')
  async save() {
    const data = await this.photoService.savePhoto();
    console.log(data);
    return 'Hello Photo!';
  }
}

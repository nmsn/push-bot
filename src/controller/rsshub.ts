import { Controller, Get, Inject, Param, Provide } from '@midwayjs/decorator';
import { RSSHubService, RSSHubEnum } from '../service/rsshub';

@Provide()
@Controller('/rsshub')
export class RssHubController {
  @Inject()
  rsshubService: RSSHubService;

  @Get('/')
  async home() {
    const data = await this.rsshubService.getData();
    console.log(data);
    return data;
  }

  @Get('/type/:type')
  async getType(@Param() type: RSSHubEnum) {
    console.log(type);
    const data = await this.rsshubService.getTypeRoute(type);
    console.log(data);
    return data;
  }

  @Get('/allType')
  async getAllType() {
    try {
      const data = await this.rsshubService.getAllTypeRoute();
      return data;
    } catch (e) {
      console.log(e);
      return 'err';
    }
  }

  @Get('/url/:url')
  async getUrl(@Param() url: string) {
    console.log(url);
    const data = await this.rsshubService.getUrl(url);
    console.log(data);
    return data;
  }

  @Get('/juejin/category/frontend')
  async getJuejinCategory() {
    try {
      console.log(1);
      const data = await this.rsshubService.getJuejinCategory();
      return data;
    } catch (e) {
      console.log(e);
      return 'err';
    }
  }
}

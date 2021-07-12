import { Controller, Get, Inject, Param, Provide } from '@midwayjs/decorator';
import { RSSHubService, RSSHubType } from '../service/rsshub';

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

  @Get('/:type')
  async getTypeUrl(@Param() type: RSSHubType) {
    console.log(type);
    const data = await this.rsshubService.getTypeUrl(type);
    console.log(data);
    return data;
  }

  @Get('/url/:type')
  async getTypeUrl(@Param() type: RSSHubType) {
    console.log(type);
    const data = await this.rsshubService.getTypeUrl(type);
    console.log(data);
    return data;
  }
}

import { Controller, Get, /* Inject, */ Provide } from '@midwayjs/decorator';
// import RssHub from 'rsshub';
// import { RSSHubService } from '../service/rsshub';

@Provide()
@Controller('/rsshub')
export class RssHubController {
  // @Inject()
  // rsshubService: RSSHubService;

  @Get('/')
  async home() {
    // const data = await this.rsshubService.getData();
    // console.log(data);
    return 'Hello RssHub!';
  }
}

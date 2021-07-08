import { Provide } from '@midwayjs/decorator';
// import RSSHub from 'rsshub';
const RSSHub = require('rsshub');

console.log(RSSHub);

RSSHub.init({
    // config
});

@Provide()
export class RSSHubService {
  async getData() {
    const data = await RSSHub.request('/bilibili/bangumi/media/9192');

    console.log(data);

    return 1;
  }
}

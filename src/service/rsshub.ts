import { Provide } from '@midwayjs/decorator';
const RSSHub = require('rsshub');

export type RSSHubType =
  | 'zhihu'
  | 'juejin'
  | 'github'
  | 'gitchat'
  | 'damai'
  | 'v2ex'
  | 'segmentfault'
  | 'd2'
  | 'imuseum';
// 获取类型对应的所有链接
const getTypeUrl = (type?: RSSHubType) => {
  return `/api/routes/${type}`;
};

const getV2ex = (type: 'latest' | 'hot') => {
  return `/v2ex/topics/${type}`;
};

// 前端 | 职场 | 互联网
const getGitChatFE = (
  type:
    | '58e84f875295227534aad506'
    | '58e84f1584c651693437f27c'
    | '5d8b7c3786194a1921979124'
) => {
  return `/gitchat/newest/${type}`;
};

const getGithubTrending = (
  period: 'daily' | 'weekly' | 'monthly',
  type: 'javascript' | 'typescript' | 'css' | 'html'
) => {
  return `/github/trending/${period}/${type}`;
};

const getSegmentFault = (type: 'frontend') => {
  return `/segmentfault/channel/${type}`;
};

const getJuejinCategory = (
  type: 'frontend' | 'freebie' | 'career' | 'article'
) => {
  return `/juejin/category/${type}`;
};

const getJuejinTrending = (
  type: 'frontend' | 'freebie' | 'career' | 'article' | 'all',
  period: 'weekly' | 'monthly' | 'historical'
) => {
  return `/juejin/trending/${type}/${period}`;
};

// 0 前端艺术家 1 飞冰早报
const getIce = (type: 0 | 1) => {
  return `/jskou/${type}`;
};

const getD2 = () => {
  return '/d2/daily';
};

// 除了关键词其他不选填入 ‘全部’
const getDamai = (
  city: string,
  category: string,
  subcategory: string,
  keyword: string
) => {
  return `/damai/activity/${city}/${category}/${subcategory}/${keyword}`;
};

const getImuseum = (
  city: string,
  type: 'all' | 'latest' | 'hot' | 'end_soon' | 'coming' | 'outdated'
) => {
  return `/imuseum/${city}/${type}`;
};

export const getTypeData = () => ({
  getV2ex,
  getGitChatFE,
  getGithubTrending,
  getSegmentFault,
  getJuejinCategory,
  getJuejinTrending,
  getIce,
  getD2,
  getDamai,
  getImuseum,
});

RSSHub.init({
  // config
});

@Provide()
export class RSSHubService {
  async getData() {
    const data = await RSSHub.request(getTypeUrl('juejin'));
    console.log(data);
    return data;
  }

  async getTypeUrl(type: RSSHubType) {
    const data = await RSSHub.request(getTypeUrl(type));
    return data;
  }
}

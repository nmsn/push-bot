export const getTypeUrl = (type: string) => {
  return `/api/routes/${type}`;
};

export const getV2ex = (type: 'latest' | 'hot') => {
  return `/v2ex/topics/${type}`;
};

// 前端 | 职场 | 互联网
export const getGitChatFE = (
  type:
    | '58e84f875295227534aad506'
    | '58e84f1584c651693437f27c'
    | '5d8b7c3786194a1921979124'
) => {
  return `/gitchat/newest/${type}`;
};

export const getGithubTrending = (
  period: 'daily' | 'weekly' | 'monthly',
  type: 'javascript' | 'typescript' | 'css' | 'html'
) => {
  return `/github/trending/${period}/${type}`;
};

export const getSegmentFault = (type: 'frontend') => {
  return `/segmentfault/channel/${type}`;
};

export const getJuejinCategory = (
  type: 'frontend' | 'freebie' | 'career' | 'article'
) => {
  return `/juejin/category/${type}`;
};

export const getJuejinTrending = (
  type: 'frontend' | 'freebie' | 'career' | 'article' | 'all',
  period: 'weekly' | 'monthly' | 'historical'
) => {
  return `/juejin/trending/${type}/${period}`;
};

// 0 前端艺术家 1 飞冰早报
export const getIce = (type: 0 | 1) => {
  return `/jskou/${type}`;
};

export const getD2 = () => {
  return '/d2/daily';
};

// 除了关键词其他不选填入 ‘全部’
export const getDamai = (
  city: string,
  category: string,
  subcategory: string,
  keyword: string
) => {
  return `/damai/activity/${city}/${category}/${subcategory}/${keyword}`;
};

export const getImuseum = (
  city: string,
  type: 'all' | 'latest' | 'hot' | 'end_soon' | 'coming' | 'outdated'
) => {
  return `/imuseum/${city}/${type}`;
};

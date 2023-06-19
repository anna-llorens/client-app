export type Country = {
  code: string;
  name: string;
  emoji: string;
};

export type User = {
  username: string;
  expiredAt: number;
  accessToken: string;
  avatar?: string;
  id: string;
};

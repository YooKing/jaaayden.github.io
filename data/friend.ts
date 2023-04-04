export const Friends: Friend[] = [
  {
    title: 'Jayden',
    description: '为天地立心,为生民立命,为往圣继学,为万世开太平',
    website: 'https://zengxud.top',
    avatar: 'https://github.com/Jaaayden.png',
  },
  {
    title: 'Yooking',
    description: '路漫漫其修远兮，吾将上下而求索',
    website: 'https://yooking.top',
    avatar: 'https://github.com/Yooking.png',
  },
]

export type Friend = {
  title: string
  description: string
  website: string
  avatar?: any
}

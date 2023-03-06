import randomize from 'randomatic';

export const generatePromotionCode = () => {
  return [randomize('A0', 4), randomize('A0', 4), randomize('A0', 4), randomize('A0', 4)].join('-');
};

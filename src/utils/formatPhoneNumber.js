export const formatPhoneNumber = ({num = ''}) => {
  return `${num.replace(/\B(?=(\d{3})+(?!\d))/g, '-')}`;
};

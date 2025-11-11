export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
};

export const formatDate = (timestamp) => {
  return new Date(timestamp).toLocaleString();
};

export const formatNumber = (number) => {
  return number.toLocaleString();
};
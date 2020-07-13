const formatValue = (value: number): string =>
  Intl.NumberFormat('en-US', { style: 'currency', currency: 'BRL' }).format(
    value,
  ); // TODO

export default formatValue;

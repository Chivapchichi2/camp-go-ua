export const firstToUpperCase = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const makePluralOrSingular = (text, attribute) => {
  attribute =
    attribute.charAt(attribute.length - 1) === 's'
      ? attribute.slice(0, -1)
      : attribute;
  return (text += text > 1 ? ' ' + attribute + 's' : ' ' + attribute);
};

const formatter = new Intl.NumberFormat('en-IE', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
});

const firstThreeKeysWithNonFalsyValues = obj =>
  Object.entries(obj)
    .filter(([key, value]) => value !== 0 && value !== '')
    .slice(0, 3)
    .reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {});

export const parseDataForCatalog = data => {
  const { adults, engine, transmission, details } = data;
  return {
    name: data.name,
    image: data.gallery[0],
    price: formatter.format(data.price),
    rating: data.rating + ' (' + data.reviews.length + ' reviews)',
    location: data.location,
    description: data.description.slice(0, 65) + '...',
    attributes: {
      adults,
      engine,
      transmission,
      ...firstThreeKeysWithNonFalsyValues(details),
    },
  };
};

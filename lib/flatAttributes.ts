export const flatAttributes = (data: { attributes: object; id: string }) => {
  if (!data) return {};

  return { ...data.attributes, id: data.id };
};

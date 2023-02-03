export const colorBlockClickHandler = async (param) => {
  console.log(param);
  gtag('event', 'color_block_click', {
    content: param,
  });
};

export const resourceBlockClickHandler = async (param) => {
  console.log(param);
  gtag('event', 'resource_block_click', {
    content: param,
  });
};

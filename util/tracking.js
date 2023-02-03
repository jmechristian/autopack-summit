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

export const formSubmitClickHandler = async (param, email) => {
  console.log(param);
  gtag('event', 'form_submission', {
    content: param,
    emailid: email,
  });
};

//Sponsor Logo Clicks

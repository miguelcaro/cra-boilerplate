import { path, head, compose, propOr } from 'ramda';

export const getErrorMessage = compose(
  propOr('There was a problem with your request.', 'message'),
  head,
  propOr([{}], 'errors'),
  path(['response', 'response', 'data']),
);

export const onSubmitFailed = () => {
  const inputErrorElement = document.querySelectorAll('input.is-invalid')[0];

  if (inputErrorElement) {
    inputErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    inputErrorElement.focus();
  }
};

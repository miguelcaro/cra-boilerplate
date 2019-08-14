import { authenticationService, httpMethods, apiUrls } from 'libs';

const { apiCall } = authenticationService;
const { GET } = httpMethods;
const { EXAMPLE_URL } = apiUrls;

export const reqExample = data => {
  return apiCall(GET, EXAMPLE_URL, { data });
};

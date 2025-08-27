import { invokeApi } from "../utils/InvokeApi";

export const getAllServices= async () => {
  const reqObj = {
    path: "/servicecategory/all",
    method: "GET",
    headers: {
  
    },
    postData: {},
  };
  return invokeApi(reqObj);
};

export const getAllBlogs= async () => {
  
  const reqObj = {
    path: "/blog/list?limit=3&page=1",
    method: "GET",
    headers: {
  
    },
    postData: {},
  };
  return invokeApi(reqObj);
};

export const getServicesTitle = async (slug) => {
  
  const reqObj = {
    path: `/service/view/${slug}`,
    method: "GET",
    headers: {
  
    },
    postData: {},
  };
  return invokeApi(reqObj);
};
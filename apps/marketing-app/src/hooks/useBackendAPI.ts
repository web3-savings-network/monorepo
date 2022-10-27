import axios from "axios";
import { useMemo } from "react";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useBackendAPI = () => {
  const instance = useMemo(() => axios.create({
    baseURL: API_URL,
    timeout: 50000,
  }), []);

  const authHeader = () => {
    // @ts-ignore
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.authToken) {
      return { Authorization: `Bearer ${user.authToken}` };
    } else {
      return {};
    }
  };
  

  const postRegisterRequest = async (data?: any) => {
    if(!data.address || !data.name || !data.email) return;
    return await instance.post(`/register`, {
        address: data.address,
        name: data.name,
        email: data.email,
    },{
      headers: authHeader()
    });
  };

  const postPartnerRequest = async (data?: any) => {
    if(!data.address || !data.name || !data.email) return;
    return await instance.post(`/data/partner`, {
        address: data.address,
        name: data.name,
        email: data.email,
    },{
      headers: authHeader()
    });
  };
  
  const postInstitutionRequest = async (data?: any) => {
    if(!data.address || !data.name || !data.email) return;
    return await instance.post(`/data/institution`, {
        address: data.address,
        name: data.name,
        email: data.email,
    },{
      headers: authHeader()
    });
  };

  return { postPartnerRequest, postInstitutionRequest, postRegisterRequest };
};

export default useBackendAPI;

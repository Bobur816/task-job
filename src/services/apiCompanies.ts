import { message } from "antd";
import { axiosInstance } from "./apiAuth";

// COMPANY
export async function getCompanies() {
  try {
    const response = await axiosInstance.get("companies/get-all");
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function addCompany({ name, count }: { name: string; count: number }) {
  try {
    await axiosInstance.post("companies/add", { name, count });
    message.success("Successfully Added");
  } catch (error: any) {
    message.error("Faild to add");
    throw new Error(error);
  }
}

export async function editCompany({ id, name, count }: { id: string; name: string; count: number }) {
  // console.log({ id, name, count });

  try {
    // const response =
    await axiosInstance.put(`companies/update`, { id, name, count });
    // console.log(response);
    message.success("Successfully Edited");
  } catch (error: any) {
    message.error("Faild to edit");
    throw new Error(error);
  }
}

export async function deleteCompany({ id }: { id: string }) {
  try {
    // const response =
    await axiosInstance.delete(`companies/delete/by-id`, { data: id });
    // console.log(response);
    message.success("Successfully deleted");
  } catch (error: any) {
    message.error("Faild to delete");

    throw new Error(error);
  }
}

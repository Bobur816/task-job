import { RiLogoutCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router";
import CompaniesTable from "../ui/CompaniesTable";
import CompanyForm from "../ui/CompanyForm";
import MyModal from "../ui/MyModal";
import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "../services/apiCompanies";
import { Spin, message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

function Companies() {
  const navigate = useNavigate();

  const { isLoading, data: companies } = useQuery({
    queryKey: ["companies"],
    queryFn: getCompanies,
  });

  // console.log(isLoading, companies);

  function handleLogOut() {
    navigate("/signIn");
    localStorage.removeItem("authToken");
    message.success("Logout");

    // console.log("Logged out");
  }

  return (
    <div className="bg-red-700 h-screen grid grid-rows-[auto_1fr]">
      <div className="bg-[#313131]  flex justify-between items-center text-white p-5 h-fit">
        <h2>Компания</h2>
        <div className=" flex items-center gap-4">
          <button onClick={handleLogOut}>
            <RiLogoutCircleLine className="text-4xl text-white" />
          </button>
          <MyModal>
            <MyModal.Open opens="add-company">
              <button className="bg-[#08979C] py-2 px-4 rounded-sm hover:bg-[#08979c9f] transition">
                Добавить компания
              </button>
            </MyModal.Open>
            <MyModal.Window name="add-company">
              <CompanyForm />
            </MyModal.Window>
          </MyModal>
        </div>
      </div>
      <div className="bg-white  p-5">
        {isLoading ? (
          <div className="h-full w-full flex justify-center items-center ">
            <Spin indicator={<LoadingOutlined style={{ fontSize: 96 }} spin />} />
          </div>
        ) : (
          <CompaniesTable companies={companies} />
        )}
      </div>
    </div>
  );
}

export default Companies;

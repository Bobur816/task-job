import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps, Popconfirm, Table } from "antd";
import { HiOutlineDotsVertical } from "react-icons/hi";
import MyModal from "./MyModal";
import CompanyForm from "./CompanyForm";
import { useDeleteCompany } from "../hooks/useDeleteCompany";

function CompaniesTable({ companies }: { companies: [] }) {
  const { deleteCompany } = useDeleteCompany();

  const handleDelete = (key: any) => {
    const id = key;
    console.log("Delete:", key);
    deleteCompany({ id });
  };

  const columns = [
    {
      title: "Название компании",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "количество сотрудников",
      dataIndex: "count",
      key: "count",
      render: (value: number) => `${value} человек`,
    },
    {
      title: "",
      key: "actions",
      width: "5%",
      render: (_: any, record: { id: string; name: string; count: number }) => {
        const items: MenuProps["items"] = [
          {
            key: "edit",
            label: (
              <MyModal>
                <MyModal.Open opens="edit-company">
                  <span className="flex items-center gap-2 ">
                    <EditOutlined />
                    Изменить
                  </span>
                </MyModal.Open>
                <MyModal.Window name="edit-company">
                  <CompanyForm initialData={record} />
                </MyModal.Window>
              </MyModal>
            ),
          },
          {
            key: "delete",
            label: (
              <Popconfirm
                title="Вы хотите удалить?"
                onConfirm={() => handleDelete(record.id)}
                okText="Да"
                cancelText="Нет"
              >
                <span className="flex items-center gap-2 text-red-600">
                  <DeleteOutlined />
                  Удалить
                </span>
              </Popconfirm>
            ),
          },
        ];
        return (
          <div className="whitespace-nowrap flex justify-center">
            <Dropdown menu={{ items }} className="">
              <a>
                <HiOutlineDotsVertical className="text-xl text-gray-900" />
              </a>
            </Dropdown>
          </div>
        );
      },
    },
  ];

  return <Table dataSource={companies} columns={columns} rowKey="id" />;
}

export default CompaniesTable;

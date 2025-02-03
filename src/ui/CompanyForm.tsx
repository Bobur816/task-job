import { Button, Form, Input } from "antd";
import { useAddCompany } from "../hooks/useAddCompany";
import { useEditCompany } from "../hooks/useEditCompany";

type CompanyFormProps = {
  initialData?: { id: string; name: string; count: number } | null | undefined;
  onCloseModal?: () => void;
};

function CompanyForm({ initialData, onCloseModal }: CompanyFormProps) {
  const [form] = Form.useForm();
  const { addCompany } = useAddCompany();
  const { editCompany } = useEditCompany();

  function handleSubmit(values: { name: string; count: number }) {
    const { name, count } = values;
    // console.log(values);

    if (initialData) {
      // console.log("handle Edit", initialData);
      editCompany({ id: initialData.id, name, count });
    } else {
      console.log("handle Add");
      addCompany({ name, count });
    }

    onCloseModal?.();
  }
  return (
    <Form form={form} layout="vertical" initialValues={initialData || { name: "", count: "" }} onFinish={handleSubmit}>
      <div className="grid grid-cols-2  gap-2 mt-10">
        <label className="w-full p-1" htmlFor="name">
          Название компании
        </label>
        <div>
          <Form.Item name="name" rules={[{ required: true, message: "Введите название" }]}>
            <Input placeholder="Введите название" />
          </Form.Item>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <label className="p-1" htmlFor="numEmp">
          Количество сотрудников
        </label>
        <div>
          <Form.Item name="count" rules={[{ required: true, message: "Введите количество" }]}>
            <Input placeholder="Введите количество" type="number" />
          </Form.Item>
        </div>
      </div>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-full mt-5">
          {initialData ? "Сохранить изменения" : "Добавить компанию"}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default CompanyForm;

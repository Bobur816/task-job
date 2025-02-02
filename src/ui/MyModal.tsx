import { Modal } from "antd";
import { ReactElement, cloneElement, createContext, useContext, useState } from "react";

const MyModalContext = createContext<any>(undefined);

function MyModal({ children }: { children: ReactElement | any }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return <MyModalContext.Provider value={{ openName, close, open }}>{children}</MyModalContext.Provider>;
}

function Open({ opens: openWindowName, children }: { opens: string; children: ReactElement }) {
  const { open } = useContext(MyModalContext);

  return cloneElement(children, { onClick: () => open(openWindowName) });
}

function Window({ name, children }: { name: string; children: ReactElement }) {
  const { close, openName } = useContext(MyModalContext);

  if (name !== openName) return null;
  return (
    <Modal
      title={name === "add-company" ? "Добавить компания" : "Изменить компания"}
      open={name == openName}
      onOk={close}
      onCancel={close}
      footer={<div></div>}
    >
      {cloneElement(children, { onCloseModal: close })}
    </Modal>
  );
}

MyModal.Open = Open;
MyModal.Window = Window;

export default MyModal;

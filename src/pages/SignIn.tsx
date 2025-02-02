import { Form, Input } from "antd";
import { Link } from "react-router";
import { useLogin } from "../authentication/useLogin";

function SignIn() {
  const { login: loginFn, isLoading } = useLogin();

  const handleLogin = ({ login, password }: { login: string; password: string }) => {
    if (!login || !password) return;
    loginFn(
      { login, password },
      {
        onSettled: () => {},
      }
    );
  };

  return (
    <div className="auth">
      <div className="overlay h-svh w-full flex justify-center items-center bg-black/70">
        <div className="bg-white py-2 px-5 rounded-sm shadow-lg w-120">
          <h2 className="text-3xl font-bold mb-4">Вход</h2>

          <Form layout="vertical" onFinish={handleLogin}>
            <div>
              <label className="text-md font-semibold" htmlFor="login">
                Логин
              </label>
              <Form.Item name="login" rules={[{ required: true, message: "Введите логин" }]}>
                <Input disabled={isLoading} placeholder="Введите логин" />
              </Form.Item>
            </div>

            <div>
              <label className="text-md font-semibold" htmlFor="password">
                Пароль
              </label>
              <Form.Item name="password" rules={[{ required: true, message: "Введите пароль" }]}>
                <Input.Password disabled={isLoading} placeholder="Введите пароль" />
              </Form.Item>
            </div>

            <div className="flex justify-between items-center mb-4">
              <Link to="/signUp">Регистрация</Link>
            </div>

            <button className="block px-4 mx-auto w-fit bg-[#7CB305] text-white py-2 rounded-sm hover:bg-[#64773d] transition">
              Вход
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

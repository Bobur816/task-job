import { Form, Input } from "antd";
import { Link } from "react-router";
import { useSignUp } from "../authentication/useSignUp";
import { useLogin } from "../authentication/useLogin";

function SignUp() {
  const { signUp, isLoading } = useSignUp();
  const { login: loginApi } = useLogin();
  const handleSignUp = ({ fullName, login, password }: { fullName: string; login: string; password: string }) => {
    if (!fullName || !login || !password) return;
    signUp(
      { fullName, login, password },
      {
        onSettled: () => {
          loginApi({ login, password });
        },
      }
    );
  };
  return (
    <div className="auth">
      <div className="overlay h-svh w-full flex justify-center items-center bg-black/70">
        <div className="bg-white py-2 px-5 rounded-sm shadow-lg w-120">
          <h2 className="text-3xl font-bold mb-4">Регистрация</h2>

          <Form layout="vertical" onFinish={handleSignUp}>
            <div>
              <label className="text-md font-semibold" htmlFor="fullName">
                Ф. И. О
              </label>
              <Form.Item name="fullName" rules={[{ required: true, message: "Введите Ф. И. О" }]}>
                <Input disabled={isLoading} placeholder="Введите Ф. И. О" />
              </Form.Item>
            </div>

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
              <Link to="/signIn">Вход</Link>
            </div>

            <button className="block px-4 mx-auto w-fit bg-[#7CB305] text-white py-2 rounded-sm hover:bg-[#64773d] transition">
              Регистрация
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

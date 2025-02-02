import { Input } from "antd";
import { Link } from "react-router";

function SignUp() {
  return (
    <div className="auth">
      <div className="overlay h-svh w-full flex justify-center items-center bg-black/70">
        <div className="flex items-center justify-center  bg-red-600 w-[29rem] max-md:w-90 max-sm:mx-2">
          <form className="bg-white shadow-xl py-3 px-5  w-full ">
            <h2 className="text-2xl font-bold mb-4">Регистрация</h2>
            <div className="mb-4">
              <label className="block text-black font-medium mb-1">Ф. И. О</label>
              <Input
                type="text"
                placeholder="Введите Ф. И. О"
                className="w-full p-2 border rounded-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black font-medium mb-1">Логин</label>
              <Input
                type="text"
                placeholder="Введите логин"
                className="w-full p-2 border rounded-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black font-medium mb-1">Пароль</label>
              <Input
                type="password"
                placeholder="Введите пароль"
                className="w-full p-2 border rounded-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <Link to={"/signIn"} className="text-blue-500 text-sm mb-4 inline-block">
              Вход
            </Link>
            <button className="block px-4 mx-auto w-fit bg-[#7CB305] text-white py-2 rounded-sm hover:bg-[#64773d] transition">
              Регистрация
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

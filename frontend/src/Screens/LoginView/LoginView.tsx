const LoginView = () => {
  return (
    <div className="grid w-screen h-screen bg-AppBackground place-content-center">
      <h2 className="mb-6 text-3xl font-bold text-white">Volunteer App</h2>
      <div className="grid w-full grid-cols-1 px-8 py-12 rounded-2xl gap-9 place-content-center bg-white/25">
        <div className="flex items-center justify-center gap-2">
          <div className="flex-grow w-full h-0 p-0.5 bg-white"></div>
          <h1 className="text-4xl font-normal text-white">Login</h1>
          <div className="flex-grow w-full h-0 p-0.5 bg-white"></div>
        </div>
        <form className="grid w-full gap-9">
          <div className="flex flex-col w-full gap-6">
            <input id="email" type="email" placeholder="email" className="py-1 pl-2 text-2xl text-black bg-clr-primary shadow-input" />
            <input id="password" type="password" placeholder="password" className="py-1 pl-1 text-2xl text-black bg-clr-primary shadow-input" />
          </div>
          <div className="flex flex-col w-full gap-6">
            <button type="button" className="text-xl font-bold text-white drop-shadow-app-btn p4 bg-clr-login">Login</button>
            <button type="button" className="text-xl font-bold text-white drop-shadow-app-btn p4 bg-clr-register">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginView;

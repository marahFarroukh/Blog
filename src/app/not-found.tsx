

function NotFound() {
  return (
    <div className="h-screen flex flex-col">
      <div className="max-w-[100vw] w-full flex flex-1 flex-col justify-center items-center">
        <p className="text-[8rem] text-green-300 font-bold mb-0">404</p>
        <p className="text-[8rem] text-slate-400 font-bold">Page Not Found</p>
      </div>
    </div>
  );
}

export default NotFound;

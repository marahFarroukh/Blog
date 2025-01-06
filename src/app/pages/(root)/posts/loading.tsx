function LoadingPage() {
  const load =
    "uppercase inline-block transition-all animate-spin text-green-800 text-[6rem] font-bold";
  return (
    <div className="flex justify-center items-center min-h-screen  bg-slate-100">
      <div className="container flex justify-center items-center">
        <span className={`${load} delay-[0]`}>L</span>
        <span className={`${load} delay-[0.2]`}>o</span>
        <span className={`${load} delay-[0.4]`}>a</span>
        <span className={`${load} delay-[0.6]`}>d</span>
        <span className={`${load} delay-[0.8]`}>i</span>
        <span className={`${load} delay-[1]`}>n</span>
        <span className={`${load} delay-[1.2]`}>g</span>
        <span className={`${load} delay-[1.4]`}>.</span>
        <span className={`${load} delay-[1.6]`}>.</span>
        <span className={`${load} delay-[1.8]`}>.</span>
      </div>
    </div>
  );
}

export default LoadingPage;

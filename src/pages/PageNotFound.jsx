import { useMoveBack } from "../shared/hooks/useMoveBack";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <main className="max-w-[100rem] min-h-screen mx-auto flex items-center justify-center px-4 sm:px-8 md:px-12">
      <div className="flex flex-col gap-6 md:gap-12 items-center justify-center p-6 sm:p-10 md:p-12 text-center">
        <h1 className="!text-6xl md:!text-5xl lg:!text-8xl !leading-relaxed !tracking-wide sm:!tracking-wider">
          Lost Your Way ?
        </h1>

        <button
          className="group flex font-semibold rounded-full bg-[#1e1e1e] text-[#fefefe] cursor-pointer border border-transparent hover:border hover:border-[#1e1e1e] hover:bg-[#e5e7df] hover:text-[#1e1e1e] transition-all duration-300 gap-2 md:gap-4 lg:gap-6 w-full justify-center items-center px-8 sm:px-10 md:px-12 py-4 md:py-5 text-4xl"
          onClick={moveBack}
        >
          <span className="group-hover:-translate-x-2 transition-transform pb-1 md:pb-0 duration-200">
            &larr;
          </span>{" "}
          Go back
        </button>
      </div>
    </main>
  );
}

export default PageNotFound;

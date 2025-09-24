function ErrorFallback({ error, resetErrorBoundary }) {
  console.error(error);

  return (
    <main className="min-h-screen max-w-[80rem] mx-auto flex items-center justify-center bg-[#e5e7df] text-[#1e1e1e] px-4 sm:px-6">
      <div className="bg-[#1e1e1e] shadow-2xl rounded-2xl py-8 sm:py-12 px-4 sm:px-6 md:px-12 w-full text-center flex flex-col gap-6 sm:gap-8">
        <h1 className="text-[2.7rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#e5e7df]">
          Something went wrong
        </h1>
        <p className="text-2xl md:text-3xl text-[#c1c1c1] leading-11">
          Oops! Something went wrong. Please try refreshing the page.
        </p>
        <p className="text-xl md:text-3xl text-[#8b919b]">
          (Error details have been logged to the console)
        </p>
        <button
          onClick={resetErrorBoundary}
          className="group flex w-full justify-center items-center font-semibold rounded-full cursor-pointer bg-[#e5e7df] text-[#1e1e1e] hover:bg-[#fefefe] hover:text-[#1e1e1e] transition-colors duration-300 px-6 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 text-3xl md:text-4xl mx-auto"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}

export default ErrorFallback;

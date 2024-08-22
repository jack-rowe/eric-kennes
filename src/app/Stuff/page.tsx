export default function Stuff() {
  return (
    <main className="flex flex-col items-center justify-between p-4 sm:p-6 md:p-8 overflow-hidden mx-auto">
      <div className="flex w-full max-w-[1080px] flex-col space-y-6">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-2/3">
            <p className="text-xl leading-relaxed">
            There is hella stuff in here!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

import { BoltIcon, ExclamationTriangleIcon, SunIcon } from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">ChaoGPT </h1>

      <div className='flex space-x-2 text-center'>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* sun icon */}
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Explain this shit to me</p>
            <p className="infoText">"is KD a snake"</p>
            <p className="infoText">How much wood can a woodchuck chuck</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* sun icon */}
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Change the ChaoGPT Model to use</p>
            <p className="infoText">Messages stored in Firebase's Firestore</p>
            <p className="infoText">Hot Toast noti's</p>
          </div>
        </div>{" "}
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* sun icon */}
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Never trust Ultron and especially</p>
            <p className="infoText ">Never Kyrie nor </p>
            <p className="infoText">Ever trust MODOK</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

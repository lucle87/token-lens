export default function TrustScore({ score }: any) {

  return (

    <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-5">
        Trust Score
      </h2>

      <div className="text-center">

        <div className="text-7xl font-bold text-green-500">

          {score}

        </div>

        <div className="mt-3 text-green-500">

          SAFE

        </div>

      </div>

    </div>

  );

}
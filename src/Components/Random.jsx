import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

const Random = () => {
  const { gif, loading, fetchData } = useGif();
  return (
    <div className="w-1/2 h-[680px] bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-3xl uppercase underline font-bold">A Random Gif</h1>

      {loading ? <Spinner /> : <img src={gif} style={{ maxWidth: '100%', maxHeight: '100%' }} />}

      <button
        onClick={() => {
          fetchData();
        }}
        className="w-10/12 bg-white text-xl rounded-lg font-bold"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;

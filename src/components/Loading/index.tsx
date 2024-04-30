type LoadingPropsType = {
  designs: string;
};

const Loading = ({ designs }: LoadingPropsType) => {
  return (
    <div
      className={` ${designs} bg-pattern bg-cover bg-center rounded-lg bg-red-300`}
    >
      Yükleniyor
    </div>
  );
};

export default Loading;

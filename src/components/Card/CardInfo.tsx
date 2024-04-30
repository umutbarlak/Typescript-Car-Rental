type InfoProps = {
  title: string;
  icon: string;
};

const CardInfo = ({ title, icon }: InfoProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <img width={25} src={icon} alt="" />
      <p className="text-sm">{title}</p>
    </div>
  );
};

export default CardInfo;

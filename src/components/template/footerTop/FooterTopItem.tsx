
export default function FooterTopItem(props: any) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-row gap-4">
        <img className="w-20" src={props.img} alt="" />
        <div>
          <p className="text-start font-semibold text-2xl">{props.title}</p>
          <p className="text-start text-xl text-grayTop">
           {props.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

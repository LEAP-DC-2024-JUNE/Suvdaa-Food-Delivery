type FoodType = {
  title: string;
  price: number;
  description: string;
  img: string;
};

type CardPropsType = {
  food: FoodType;
};

const Card = ({ food }: CardPropsType) => {
  return (
    <div className="w-[200px] h-[200px] bg-slate-500">
      <div>{food.title}</div>
      <div>{food.price}</div>
      <div>{food.img}</div>
    </div>
  );
};

export default Card;

import Card from "./Card.tsx";

const CardList = ({ robots }: { robots: any[] }) => {
  return (
    <div className="tc">
      {robots.map((robot, i) => {
        return <Card key={i} name={robot.name} email={robot.email} />;
      })}
    </div>
  );
};

export default CardList;

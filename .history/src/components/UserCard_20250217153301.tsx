// src/components/UserCard.tsx
import "./UserCard.css";

type UserCardProps = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  age: number;
};

export default function UserCard({ id, firstname, lastname, email, age }: UserCardProps) {
  return (
    <div className="user-card">
      <h2 className="user-card__name">
        {firstname} {lastname}
      </h2>
      <p className="user-card__detail">ID: {id}</p>
      <p className="user-card__detail">Email: {email}</p>
      <p className="user-card__detail">Age: {age}</p>
    </div>
  );
}

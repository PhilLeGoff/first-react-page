// src/Hero.tsx
import "./Hero.css";
import users from '../data/users.json';
import UserCard from './UserCard';

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="hero_container">
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
}

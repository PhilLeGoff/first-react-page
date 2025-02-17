import { useRef, useEffect } from 'react';
import "./Hero.css";
import users from '../data/users.json';
import UserCard from './UserCard';

type Props = {};

export default function Hero({}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on mount (or when users change)
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className="hero_container" ref={containerRef}>
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
}

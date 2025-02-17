// src/components/UserCard.tsx
type UserCardProps = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  age: number;
};

export default function UserCard({ id, firstname, lastname, email, age }: UserCardProps) {
  return (
    <div className="user-card p-4 border rounded shadow bg-white">
      <h2 className="text-xl font-bold">
        {firstname} {lastname}
      </h2>
      <p>ID: {id}</p>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </div>
  );
}

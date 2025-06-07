import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

export default function UsersPage({ users }: { users: UserProps[] }) {
return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4"> 
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-red-800 bg-blue-600">User Directory</h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add User</button>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user: UserProps) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()

  return {
    props: {
      users
    }
  }
}
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  email,
  address,
}) => {
  return (
    <div className="m-3">
      <h2>{name}</h2> 
      <p>@{id}</p>
      <p>
        <a href={`mailto:${email}`}>
          {email}
        </a>
      </p>

      <div className="mt-5 p-5 border-b">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Contact Information:</h3>
        <p className="text-gray-600">
          <span className="font-semibold">Phone:</span> {address.city}
        </p>
      </div>

    </div>
  );
};

export default UserCard;
import "./index.css";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <div>
      <FriendsList />
      <AddFriendForm />
      <SplitBillForm />
    </div>
  );
}
function FriendsList() {
  return (
    <div>
      {initialFriends.map((friend) => (
        <Friend
          name={friend.name}
          image={friend.image}
          balance={friend.balance}
          key={friend.id}
        />
      ))}
    </div>
  );
}
function Friend({ name, image, balance }) {
  return (
    <div>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <button>Select</button>
      <p>{balance}</p>
    </div>
  );
}
function AddFriendForm() {}
function SplitBillForm() {}

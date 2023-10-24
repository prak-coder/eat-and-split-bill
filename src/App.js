import { useState } from "react";
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
function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [showSplitBill, setShowSplitBill] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }
  function onAddFriend(friend) {
    setFriends([...friends, friend]);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          showSplitBill={showSplitBill}
          setShowSplitBill={setShowSplitBill}
          friends={friends}
        />
        {showAddFriend && <FormAddFriend onAddFriend={onAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {showSplitBill && <FormSplitBill />}
    </div>
  );
}
function FriendsList({ showSplitBill, setShowSplitBill, friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          showSplitBill={showSplitBill}
          setShowSplitBill={setShowSplitBill}
          friend={friend}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
function Friend({ friend, showSplitBill, setShowSplitBill }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          {friend.name} owes you ₹${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          You owe {friend.name} ₹${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button onClick={() => setShowSplitBill(!showSplitBill)}>Select</Button>
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id: id,
    };
    onAddFriend(newFriend);
    setImage("https://i.pravatar.cc/48");
    setName("");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🤼 Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🎅 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button className="button">Add</Button>
    </form>
  );
}
function FormSplitBill() {
  return (
    <form className="form-split-bill" disabled>
      <h2>SPLIT A BILL WITH SARAH</h2>
      <label>💰 Bill Value</label>
      <input type="text" />
      <label>👧Your Expense</label>
      <input type="text" />
      <label>👩‍🦰 Sarah's Expense</label>
      <input type="text" disabled />
      <label>Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">Sarah</option>
      </select>
      <Button className="button">Split Bill</Button>
    </form>
  );
}

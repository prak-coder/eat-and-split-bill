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
      <ul>
        {initialFriends.map((friend) => (
          <Friend
            name={friend.name}
            image={friend.image}
            balance={friend.balance}
            key={friend.id}
          />
        ))}
      </ul>
    </div>
  );
}
function Friend({ name, image, balance }) {
  return (
    <>
      <li>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <button className="button">Select</button>
        <p>{balance}</p>
      </li>
    </>
  );
}
function AddFriendForm() {
  return (
    <div>
      <form>
        <label>🤼 Friend Name</label>
        <input type="text" />
        <label>🎅Add Image URL</label>
        <input type="text" />
        <button className="button">Add</button>
      </form>
      <button className="button">Close</button>
    </div>
  );
}
function SplitBillForm() {
  return (
    <div>
      <form>
        <h1>SPLIT A BILL WITH SARAH</h1>
        <br />
        <label>💰 Bill Value</label>
        <input type="text" />
        <label>👧Your Expense</label>
        <input type="text" />
        <label>👩‍🦰 Sarah's Expense</label>
        <input type="text" />
        <label>Who is paying the bill?</label>
        <select>
          <option>You</option>
          <option>Sarah</option>
        </select>
        <button className="button">Split Bill</button>
      </form>
    </div>
  );
}

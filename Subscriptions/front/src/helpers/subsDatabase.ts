interface ISubscription {
  logo: string;
  name: string;
  price: string;
  renew: string;
  type: string;
  active: boolean;
}

const subsDatabase: ISubscription[] = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
    name: "Netflix",
    price: "$19.9 USD",
    renew: "20 / October / 2025",
    type: "Monthly",
    active: true,
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/640px-Spotify_App_Logo.svg.png",
    name: "Spotify",
    price: "$4.99 USD",
    renew: " 1 / November / 2025",
    type: "Monthly",
    active: false
  },
];

export default subsDatabase;

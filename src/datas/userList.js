import tickets from "../assets/img/logo/tickets.png";
import asso from "../assets/img/logo/community.png";
import visitor from "../assets/img/logo/traveler.png";

export const user_type = [
  {
    id: "1asso",
    name: "Associations",
    src: asso,
    alt: "logo association",
    height: 30,
    width: 30,
    className: "logo_connexion logo_visitor",
  },
  {
    id: "2parc",
    name: "Parcs animaliers",
    src: tickets,
    alt: "logo Parc animalier",
    height: 30,
    width: 30,
    className: "logo_connexion logo_visitor",
  },
  {
    id: "3visiteur",
    name: "Visiteurs",
    src: visitor,
    alt: "logo visitor",
    height: 30,
    width: 30,
    className: "logo_connexion logo_visitor",
  },
];

type Team = {
  id: number;
  city: string;
  full_name: string;
};

interface PlayerInfo {
  id: number;
  first_name: string;
  last_name: string;
  position: string;
  team: Team;
  favorite: boolean;
}

export interface Character extends ResultItemProps {
  uid: string;
}

export interface SearchFormProps {
  onSearch: (results: Character[]) => void;
}

export interface SearchFormState {
  value: string;
  isLoading: boolean;
  error: string | null;
}

export interface ResultItemProps {
  name: string;
  gender: string | null;
  maritalStatus: string | string;
  monthOfBirth: number | string;
  monthOfDeath: number | string;
  yearOfBirth: number | string;
  yearOfDeath: number | string;
}

export interface SearchPanelProps {
  onSearch: (characters: Character[]) => void;
}

export interface ResultListProps {
  items: Character[];
}

export interface ResultsProps {
  characters: Character[];
}

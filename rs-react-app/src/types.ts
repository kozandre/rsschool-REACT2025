export interface Character {
  uid: string;
  name: string;
  gender?: string;
  species?: string;
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
  description: string;
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

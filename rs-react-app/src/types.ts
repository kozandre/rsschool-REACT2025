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

interface ResultItem {
  name: string;
  description: string;
}

export interface ResultListProps {
  items: ResultItem[];
}

export interface ResultItemProps {
  name: string;
  description: string;
}

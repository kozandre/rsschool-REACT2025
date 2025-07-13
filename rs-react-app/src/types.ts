export interface SearchFormProps {}

export interface SearchFormState {
  value: string;
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

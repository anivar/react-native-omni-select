// Simple type definitions - no over-engineering

export interface DropdownProps<T = any> {
  // Data
  data: T[];
  value?: T | T[] | null;
  onChange?: (value: T | T[] | null) => void;

  // Field mapping
  labelField?: keyof T | ((item: T) => string);
  valueField?: keyof T | ((item: T) => any);

  // Display
  placeholder?: string;
  searchPlaceholder?: string;
  noResultsText?: string;
  renderItem?: (item: T, isSelected: boolean) => React.ReactNode;

  // Features
  search?: boolean;
  multiple?: boolean;
  disabled?: boolean;

  // Styling
  style?: any;
  dropdownStyle?: any;
  itemStyle?: any;
}

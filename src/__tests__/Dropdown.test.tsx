import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { Dropdown } from '../Dropdown';

describe('Dropdown Component', () => {
  const mockData = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  it('renders correctly', () => {
    const { getByText } = render(<Dropdown data={mockData} placeholder="Select an option" />);

    expect(getByText('Select an option')).toBeTruthy();
  });

  it('opens dropdown when pressed', () => {
    const { getByText, queryByText } = render(
      <Dropdown data={mockData} placeholder="Select an option" />,
    );

    const trigger = getByText('Select an option');
    fireEvent.press(trigger);

    // Check if dropdown items are visible
    expect(queryByText('Option 1')).toBeTruthy();
    expect(queryByText('Option 2')).toBeTruthy();
    expect(queryByText('Option 3')).toBeTruthy();
  });

  it('handles single selection', () => {
    const onChange = jest.fn();
    const { getByText } = render(
      <Dropdown data={mockData} placeholder="Select an option" onChange={onChange} />,
    );

    // Open dropdown
    fireEvent.press(getByText('Select an option'));

    // Select an item
    fireEvent.press(getByText('Option 2'));

    expect(onChange).toHaveBeenCalledWith({ label: 'Option 2', value: '2' });
  });

  it('handles multi-selection', () => {
    const onChange = jest.fn();
    const Controlled = () => {
      const [value, setValue] = React.useState<typeof mockData>([]);
      return (
        <Dropdown
          data={mockData}
          value={value}
          placeholder="Select options"
          onChange={(v) => {
            onChange(v);
            setValue(v as typeof mockData);
          }}
          multiple
        />
      );
    };
    const { getByText } = render(<Controlled />);

    fireEvent.press(getByText('Select options'));

    fireEvent.press(getByText('Option 1'));
    expect(onChange).toHaveBeenLastCalledWith([{ label: 'Option 1', value: '1' }]);

    fireEvent.press(getByText('Option 2'));
    expect(onChange).toHaveBeenLastCalledWith([
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ]);
  });

  it('handles search functionality', () => {
    const { getByText, getByPlaceholderText, queryByText } = render(
      <Dropdown
        data={mockData}
        placeholder="Select an option"
        search
        searchPlaceholder="Search..."
      />,
    );

    // Open dropdown
    fireEvent.press(getByText('Select an option'));

    // Search for Option 2
    const searchInput = getByPlaceholderText('Search...');
    fireEvent.changeText(searchInput, 'Option 2');

    // Only Option 2 should be visible
    expect(queryByText('Option 2')).toBeTruthy();
    expect(queryByText('Option 1')).toBeFalsy();
    expect(queryByText('Option 3')).toBeFalsy();
  });

  it('handles disabled state', () => {
    const onChange = jest.fn();
    const { getByText } = render(
      <Dropdown data={mockData} placeholder="Disabled dropdown" onChange={onChange} disabled />,
    );

    const trigger = getByText('Disabled dropdown');
    fireEvent.press(trigger);

    // onChange should not be called
    expect(onChange).not.toHaveBeenCalled();
  });

  it('works with string array', () => {
    const onChange = jest.fn();
    const stringData = ['Apple', 'Banana', 'Orange'];

    const { getByText } = render(
      <Dropdown data={stringData} placeholder="Select fruit" onChange={onChange} />,
    );

    fireEvent.press(getByText('Select fruit'));
    fireEvent.press(getByText('Banana'));

    expect(onChange).toHaveBeenCalledWith('Banana');
  });

  it('displays selected value', () => {
    const { getByText } = render(
      <Dropdown data={mockData} value={mockData[1]} placeholder="Select an option" />,
    );

    // Should display the selected item's label
    expect(getByText('Option 2')).toBeTruthy();
  });

  it('displays count for multiple selected items', () => {
    const { getByText } = render(
      <Dropdown
        data={mockData}
        value={[mockData[0], mockData[1]]}
        placeholder="Select options"
        multiple
      />,
    );

    // Should display count
    expect(getByText('2 selected')).toBeTruthy();
  });
});

import React, {
  SelectHTMLAttributes,
  DetailedHTMLProps,
  ChangeEvent,
} from "react";
import s from "./SuperSelect.module.css";

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type OptionType = {
  id: number;
  value: string;
};

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: OptionType[];
  onChangeOption?: (option: number) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
  options,
  className,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const mappedOptions = options
    ? options.map((option) => (
        <option
          id={"hw7-option-" + option.id}
          className={s.option}
          key={option.id}
          value={option.id}
        >
          {option.value}
        </option>
      ))
    : [];

  const onChangeCallback = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event);

    const selectedValue = Number(event.currentTarget.value);
    onChangeOption?.(selectedValue);
  };

  const finalSelectClassName = s.select + (className ? ` ${className}` : "");

  return (
    <select
      {...restProps}
      className={finalSelectClassName}
      onChange={onChangeCallback}
    >
      {mappedOptions}
    </select>
  );
};

export default SuperSelect;

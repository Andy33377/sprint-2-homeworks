import React, {
  ChangeEvent,
  InputHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
} from "react";
import s from "./SuperRadio.module.css";

type DefaultRadioPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type DefaultSpanPropsType = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

type OptionType = {
  id: number;
  value: string;
};

type SuperRadioPropsType = Omit<DefaultRadioPropsType, "type"> & {
  options?: OptionType[];
  onChangeOption?: (option: number) => void;
  spanProps?: DefaultSpanPropsType;
};

const SuperRadio: React.FC<SuperRadioPropsType> = ({
  id,
  name,
  className,
  options,
  value,
  onChange,
  onChangeOption,
  spanProps,
  ...restProps
}) => {
  const onChangeCallback = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);

    const selectedValue = Number(event.currentTarget.value);
    onChangeOption?.(selectedValue);
  };

  const finalRadioClassName = s.radio + (className ? ` ${className}` : "");

  const spanClassName =
    s.span + (spanProps?.className ? ` ${spanProps.className}` : "");

  const mappedOptions = options
    ? options.map((option) => (
        <label key={`${name}-${option.id}`} className={s.label}>
          <input
            {...restProps}
            id={`${id}-input-${option.id}`}
            className={finalRadioClassName}
            type={"radio"}
            name={name}
            value={option.id}
            checked={value === option.id}
            onChange={onChangeCallback}
          />

          <span
            id={`${id}-span-${option.id}`}
            {...spanProps}
            className={spanClassName}
          >
            {option.value}
          </span>
        </label>
      ))
    : [];

  return <div className={s.options}>{mappedOptions}</div>;
};

export default SuperRadio;

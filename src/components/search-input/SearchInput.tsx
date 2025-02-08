import { ChangeEvent, FC } from "react";
import { useIntl } from "react-intl";
import { TSearchInputPops } from "./SearchInput.types";

export const SearchInput: FC<TSearchInputPops> = ({ value, setValue }) => {
  const { formatMessage } = useIntl()

  const changeHandler = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setValue(value);
  }

  return <input
    className={["text-3xl",
      "placeholder:text-slate-300",
      "px-2 py-1 m-2",
      "bg-gradient-to-b",
      "from-white",
      "to-slate-50",
      "rounded-md",
      "border-slate-100",
      "border-2",
      "focus-visible:outline-slate-500"
    ].join(' ')}
    value={value}
    onChange={changeHandler}
    placeholder={
      formatMessage({ id: 'inputPlaceholder' })
    } ></input >
}

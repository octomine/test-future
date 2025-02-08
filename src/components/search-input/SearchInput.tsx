import { ChangeEvent, FC } from "react";
import { TSearchInputPops } from "./SearchInput.types";
import { useIntl } from "react-intl";

export const SearchInput: FC<TSearchInputPops> = ({ value, setValue }) => {
  const { formatMessage } = useIntl()

  const changeHandler = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setValue(value);
  }

  return <input
    value={value}
    onChange={changeHandler}
    placeholder={formatMessage({ id: 'inputPlaceholder' })
    }></input>
}

import { ChangeEvent, FC, useState } from "react";
import { useIntl } from "react-intl";
import { useAppDispatch } from "@/store/store";
import { getRepos } from "@/store/thunks";
import { setName } from "@/store/slices";

export const SearchInput: FC = () => {
  const { formatMessage } = useIntl()
  const dispatch = useAppDispatch()
  const [value, setValue] = useState('')

  const changeHandler = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setValue(value)
    dispatch(setName(value))
    dispatch(getRepos())
  }

  return <input
    className={[
      "text-3xl",
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
